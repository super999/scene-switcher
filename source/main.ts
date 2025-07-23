import { join } from 'path';
// 临时在当前模块增加编辑器内的模块为搜索路径，为了能够正常 require 到 cc 模块，后续版本将优化调用方式


// 当前版本需要在 module.paths 修改后才能正常使用 cc 模块
// 并且如果希望正常显示 cc 的定义，需要手动将 engine 文件夹里的 cc.d.ts 添加到插件的 tsconfig 里
// 当前版本的 cc 定义文件可以在当前项目的 temp/declarations/cc.d.ts 找到
module.paths.push(join(Editor.App.path, 'node_modules'));

// import { director, Scene, Texture2D } from 'cc';


import { showAllScenes, printAllScenesV2, openSceneMain, openSceneGame } from './scene';
// import { AssetInfo } from '@cocos/creator-types/editor/packages/asset-db/@types/public';
import { showAllScripts } from './script';
import { printAllAssets } from './assets';
/**
 * @en Registration method for the main process of Extension
 * @zh 为扩展的主进程的注册方法
 */
export const methods: { [key: string]: (...any: any) => any } = {
    /**
     * @en A method that can be triggered by message
     * @zh 通过 message 触发的方法
     */
    showLog() {
        console.log('Hello World - 6');
    },

    showAllScenes,
    printAllScenesV2,
    showAllScripts,
    printAllAssets,
    openSceneMain,
    openSceneGame,
};

/**
 * @en Method Triggered on Extension Startup
 * @zh 扩展启动时触发的方法
 */
export function load() {
    console.log("extension scene-switcher loaded");
}

/**
 * @en Method triggered when uninstalling the extension
 * @zh 卸载扩展时触发的方法
 */
export function unload() {
    console.log("extension scene-switcher unloaded");
}






