import { join } from 'path';
// 临时在当前模块增加编辑器内的模块为搜索路径，为了能够正常 require 到 cc 模块，后续版本将优化调用方式


// 当前版本需要在 module.paths 修改后才能正常使用 cc 模块
// 并且如果希望正常显示 cc 的定义，需要手动将 engine 文件夹里的 cc.d.ts 添加到插件的 tsconfig 里
// 当前版本的 cc 定义文件可以在当前项目的 temp/declarations/cc.d.ts 找到
module.paths.push(join(Editor.App.path, 'node_modules'));

import { director } from 'cc';


interface SceneInfo {
    name: string;
    path: string;
}



// Cocos Creator 编辑器环境下，Editor 是全局变量
declare const Editor: any;

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

    // 切换到 Main 场景
    async openSceneMain() {
        const sceneName = 'Main';
        const options = {
            name: pkg.name,            // 与 package.json 中 name 保持一致
            method: 'openScene',       // scene.ts 中的方法名
            args: [sceneName]          // 传入场景名称
        };
        // 调用场景脚本
        await Editor.Message.request('scene', 'execute-scene-script', options);
        Editor.log(`Scene Switcher: 已切换到场景 ${sceneName}`);
    },

    // 切换到 Game 场景
    async openSceneGame() {
        const sceneName = 'Game';
        const options = {
            name: pkg.name,
            method: 'openScene',
            args: [sceneName]
        };
        await Editor.Message.request('scene', 'execute-scene-script', options);
        Editor.log(`Scene Switcher: 已切换到场景 ${sceneName}`);
    }
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

// 获取所有场景
function getAllScenes(): SceneInfo[] {
    const scenes: SceneInfo[] = [];
    const assets = Editor.Message.request('asset-db', 'query-assets', {
        type: 'scene',
    });

    assets.forEach((asset: any) => {
        scenes.push({
            name: asset.name,
            path: asset.path
        });
    });

    return scenes;
}

