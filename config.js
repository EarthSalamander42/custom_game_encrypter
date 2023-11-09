const path = require('path');

console.log("Addon path: " + __dirname);
module.exports = {
	debug: false,
	noRestore: true,
	key: '',
	addonPath: path.resolve(__dirname, '../warpath_encrypted/'),
	addonName: 'warpath_encrypted',
	// addonPath: path.resolve("", '../warpath_encrypted/'),

	vscripts: {
		patterns: [ //I'm not exactly sure how this works, so I have left the folders for custom hero clash, I think this is excluding some lua files from being encrypted
			'**/*',
//			'!creatures/**/*',
//			'!heroes/**/*',
			'!abilities/**/*',
			'!items/**/*',
			'!modifiers/**/*',
			'!components/battlepass/**/*',
//			'!game/battlepass/default_cosmetic_ability',
//			'!game/battlepass/inventory/modifiers/**/*',
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
