const path = require('path');

module.exports = {
  debug: false,
  noRestore: true,
  key: 'AF92823F5E4F57B3ACD31920797B2EB2', //Enter first 32 digits of dedicated server code here
  addonPath: path.resolve(__dirname, '../bsj_no_player_name_encrypted/'),

  vscripts: {
    patterns: [ //I'm not exactly sure how this works, so I have left the folders for custom hero clash, I think this is excluding some lua files from being encrypted
      '**/*',
      '!components/abilities/**/*',
      '!libraries/modifiers/**/*',
    ],
    clientModules: [],
  },
  panorama: {
    cssFiles: 4, //How many fake CSS files to create to confuse people, this is a count per css file, increasing this number will dramatically increase the time it takes
    patterns: [
      'layout/custom_game/teams_panels/**/*.{js,css,xml}',
      'layout/custom_game/drop_select/**/*.{js,css,xml}',
      'layout/custom_game/duel_panel/**/*.{js,css,xml}',
      'layout/custom_game/round_panel/**/*.{js,css,xml}',
      'layout/custom_game/progress_bar/**/*.{js,css,xml}',
      //'layout/custom_game/minimap_overlay/**/*.{js,css,xml}',
      'layout/custom_game/gold_history/**/*.{js,css,xml}',
    ]
  },
};
