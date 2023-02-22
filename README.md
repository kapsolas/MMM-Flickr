# MMM-Flickr
This a module for the [MagicMirror](https://github.com/MichMich/MagicMirror/tree/develop). It pulls the top 20 photos from your own or another users Flickr Photostream with out the use of an API_KEY. The photos are then rotated and animated in the screen.

## Installation
1. Navigate into your MagicMirror's `modules` folder and execute `git clone https://github.com/kapsolas/MMM-Flickr.git`. A new folder will appear, navigate into it.
2. Execute `npm install` to install the node dependencies.

## Config
The entry in `config.js` can include the following options:


|Option|Description|
|---|---|
|`id`|The userid of the user whose photostream to pull images from. You can find a user's ID [here](https://www.webpagefx.com/tools/idgettr/).<br><br>**Type:** `string`<br>This value is **REQUIRED**|
|`animationSpeed`|How long the fade out and fade in of photos should take.<br><br>This value is **REQUIRED**|
|`updateInterval`|How long before refreshing image list.<br><br>This value is **REQUIRED**|

Here is an example of an entry in `config.js`
```
{
	module: 'MMM-Flickr',
	position: 'top_right',
	config: {
		id: 'user_id_of_user_whose_photostream_to_view',
		animationSpeed: 2500,
		updateInterval: 10000,
		size: 'm' // Default is m, can be o=original, t=thumbnail, s= 75x75, b=1024
		          // 'z' medium 640, 640 on longest side. 'c' medium 800, 800 on longest side
	}
},
```

## Dependencies
- [request](https://www.npmjs.com/package/request) (installed via `npm install`)

## Important Notes
- This is my first project using Node, so feel free to submit pull requests or post on the issues/wiki and I will do my best to improve the project.

## Special Thanks
- [Michael Teeuw](https://github.com/MichMich) for creating the awesome [MagicMirror2](https://github.com/MichMich/MagicMirror/tree/develop) project that made this module possible.
- [Sam Lewis](https://github.com/SamLewis0602/) for creating the [MMM-Traffic](https://github.com/SamLewis0602/MMM-Traffic) module that I used as guidance in creating this module.

## Donations Welcome
- DOGE - DDNabBuKR9EkHzf1fmfRm8Q5aMvnU9s97k
- BTC - bc1q53ntv3hqtch2yf50pupjaqayd27cz53k53cj7j
- ETH - 0x6F8D49cbc1024Ab2FBcF1F0235601B70A36489dD
- MATIC - 0x6F8D49cbc1024Ab2FBcF1F0235601B70A36489dD
