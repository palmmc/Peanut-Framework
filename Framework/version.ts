/**
 *                                                                                                                                                                               
,-.----.                                                                                                                                                                      
\    /  \                                                    ___                ,---,.                              ____                                                 ,-.  
|   :    \                                                 ,--.'|_            ,'  .' |                            ,'  , `.                                           ,--/ /|  
|   |  .\ :                           ,---,          ,--,  |  | :,'         ,---.'   |  __  ,-.                ,-+-,.' _ |                 .---.   ,---.    __  ,-.,--. :/ |  
.   :  |: |                       ,-+-. /  |       ,'_ /|  :  : ' :         |   |   .',' ,'/ /|             ,-+-. ;   , ||                /. ./|  '   ,'\ ,' ,'/ /|:  : ' /   
|   |   \ : ,---.     ,--.--.    ,--.'|'   |  .--. |  | :.;__,'  /          :   :  :  '  | |' | ,--.--.    ,--.'|'   |  || ,---.       .-'-. ' | /   /   |'  | |' ||  '  /    
|   : .   //     \   /       \  |   |  ,"' |,'_ /| :  . ||  |   |           :   |  |-,|  |   ,'/       \  |   |  ,', |  |,/     \     /___/ \: |.   ; ,. :|  |   ,''  |  :    
;   | |`-'/    /  | .--.  .-. | |   | /  | ||  ' | |  . .:__,'| :           |   :  ;/|'  :  / .--.  .-. | |   | /  | |--'/    /  | .-'.. '   ' .'   | |: :'  :  /  |  |   \   
|   | ;  .    ' / |  \__\/: . . |   | |  | ||  | ' |  | |  '  : |__         |   |   .'|  | '   \__\/: . . |   : |  | ,  .    ' / |/___/ \:     ''   | .; :|  | '   '  : |. \  
:   ' |  '   ;   /|  ," .--.; | |   | |  |/ :  | : ;  ; |  |  | '.'|        '   :  '  ;  : |   ," .--.; | |   : |  |/   '   ;   /|.   \  ' .\   |   :    |;  : |   |  | ' \ \ 
:   : :  '   |  / | /  /  ,.  | |   | |--'  '  :  `--'   \ ;  :    ;        |   |  |  |  , ;  /  /  ,.  | |   | |`-'    '   |  / | \   \   ' \ | \   \  / |  , ;   '  : |--'  
|   | :  |   :    |;  :   .'   \|   |/      :  ,      .-./ |  ,   /         |   :  \   ---'  ;  :   .'   \|   ;/        |   :    |  \   \  |--"   `----'   ---'    ;  |,'     
`---'.|   \   \  / |  ,     .-./'---'        `--`----'      ---`-'          |   | ,'         |  ,     .-./'---'          \   \  /    \   \ |                       '--'       
  `---`    `----'   `--`---'                                                `----'            `--`---'                    `----'      '---"                                   
 
  
                                                                                created by palm1
 */

/**
 * API version of the current module.
 * @constant {string}
 */
const API_VERSION = "0.0.2";

/**
 * Minimum engine version required by the module.
 * @constant {number[]}
 * @example
 * [1, 21, 50] represents version 1.21.50
 */
const MIN_ENGINE_VERSION = [1, 21, 50];

/**
 * Format versions for different types of assets.
 * @constant {Object}
 * @property {string} BLOCK - Block format version.
 * @property {string} ITEM - Item format version.
 * @property {string} BLOCKMAP - Blockmap format version.
 */
const FORMAT_VERSION = {
  BLOCK: "1.21.50",
  ITEM: "1.21.50",
  BLOCKMAP: "1.21.40",
};

/**
 * Version information for various modules.
 * @constant {Object}
 * @property {Object} server - Version information for the server module.
 * @property {Object} "server-ui" - Version information for the server UI module.
 * @property {Object} "server-net" - Version information for the server network module.
 * @property {Object} "server-gametest" - Version information for the server gametest module.
 * @property {Object} "server-editor" - Version information for the server editor module.
 * @property {Object} "server-admin" - Version information for the server admin module.
 * @property {Object} "debug-utilities" - Version information for the debug utilities module.
 * @example
 * MODULE_VERSION.server.latest - The latest version for the server module.
 */
const MODULE_VERSION = {
  server: {
    latest: "1.16.0",
    beta: "1.17.0-beta.1.21.51-stable",
  },
  "server-ui": {
    latest: "1.3.0",
    beta: "1.4.0-beta.1.21.51-stable",
  },
  "server-net": {
    beta: "1.0.0-beta.1.21.51-stable",
  },
  "server-gametest": {
    beta: "1.0.0-beta.1.21.51-stable",
  },
  "server-editor": {
    beta: "0.1.0-beta.1.21.51-stable",
  },
  "server-admin": {
    beta: "1.0.0-beta.1.21.51-stable",
  },
  "debug-utilities": {
    beta: "1.0.0-beta.1.21.51-stable",
  },
};

export { API_VERSION, MIN_ENGINE_VERSION, FORMAT_VERSION, MODULE_VERSION };
