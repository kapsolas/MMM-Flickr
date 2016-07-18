/* Magic Mirror
 * Module: MMM-Flickr
 *
 * By Jim Kapsalis https://github.com/kapsolas
 * MIT Licensed.
 */

 var NodeHelper = require("node_helper");
 var request = require('request');
 
 module.exports = NodeHelper.create({
    // subclass start method.
    start: function() {
        console.log("Starting node_helper for module [" + this.name + "]");
    },
    
    // subclass socketNotificationReceived
    socketNotificationReceived: function(notification, payload){
        //console.log("=========== notification received: " + notification);
        if (notification === 'FLICKR_GET') {
            this.getImagesFromJSON(payload);
        }
    },
    
    getImagesFromJSON: function(api_url) {
        //console.log('============ HERE =================');
        var self = this;
        request({url: api_url, method: 'GET'}, function(error, response, body) 
        {
            if (!error && response.statusCode == 200) 
            {
                // get our images out of the FLICKR JSON response
                var items = JSON.parse(body).items;
                
                // create our model, a dictionary with 
                var images = {};
                images.photo = new Array();
                
                for (var i in items)
                {
                    var title = items[i].title;
                    var media = items[i].media.m;
                    
                    //console.log("title: " + title + "\nmedia: " + media.m);
                    
                    // create a new array for each images object in the dictionary
                    images.photo.push( {
                        "title" : title,
                        "photolink" : media
                    });
                    
                }
                //console.log("count: " + images.photo.length);
                self.sendSocketNotification('FLICK_IMAGE_LIST', images);
                
            }
            else
            {
                console.log(" Error: " + response.statusCode);
            }
        });
    }
 });