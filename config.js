const path = require('path');

module.exports = {
	debug: true,
	noRestore: true,
	key: '', //Enter first 32 digits of dedicated server code here
	addonPath: path.resolve(__dirname, '../frostrose_battlefield_encrypted/'),

	vscripts: {
		patterns: [ //I'm not exactly sure how this works, so I have left the folders for custom hero clash, I think this is excluding some lua files from being encrypted
			'**/*',
			'!internal/client_util',
			'!libraries/parabolic',
			'!components/abilities/**/*',
			'!libraries/modifiers/**/*',
			'!components/items/**/*',
			'!components/modifiers/**/*',
			'!components/battlepass/modifiers/**/*',
		],
		clientModules: [],
	},
	panorama: {
		cssFiles: 4, //How many fake CSS files to create to confuse people, this is a count per css file, increasing this number will dramatically increase the time it takes
		patterns: [
			'layout/custom_game/layout/**/*.{xml}',
			'layout/custom_game/scripts/**/*.{js}',
			'layout/custom_game/styles/**/*.{css}',
//			'layout/custom_game/drop_select/**/*.{js,css,xml}',
//			'layout/custom_game/duel_panel/**/*.{js,css,xml}',
//			'layout/custom_game/round_panel/**/*.{js,css,xml}',
//			'layout/custom_game/progress_bar/**/*.{js,css,xml}',
			//'layout/custom_game/minimap_overlay/**/*.{js,css,xml}',
//			'layout/custom_game/gold_history/**/*.{js,css,xml}',
		]
	},
};
