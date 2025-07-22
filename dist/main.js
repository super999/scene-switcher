"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.methods = void 0;
exports.load = load;
exports.unload = unload;
const path_1 = require("path");
// 临时在当前模块增加编辑器内的模块为搜索路径，为了能够正常 require 到 cc 模块，后续版本将优化调用方式
module.paths.push((0, path_1.join)(Editor.App.path, 'node_modules'));
/**
 * @en Registration method for the main process of Extension
 * @zh 为扩展的主进程的注册方法
 */
exports.methods = {
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
            name: pkg.name, // 与 package.json 中 name 保持一致
            method: 'openScene', // scene.ts 中的方法名
            args: [sceneName] // 传入场景名称
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
function load() {
    console.log("extension scene-switcher loaded");
}
/**
 * @en Method triggered when uninstalling the extension
 * @zh 卸载扩展时触发的方法
 */
function unload() {
    console.log("extension scene-switcher unloaded");
}
// 获取所有场景
function getAllScenes() {
    const scenes = [];
    const assets = Editor.Message.request('asset-db', 'query-assets', {
        type: 'scene',
    });
    assets.forEach((asset) => {
        scenes.push({
            name: asset.name,
            path: asset.path
        });
    });
    return scenes;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQTZEQSxvQkFFQztBQU1ELHdCQUVDO0FBdkVELCtCQUE0QjtBQUM1QiwyREFBMkQ7QUFDM0QsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBQSxXQUFJLEVBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQztBQWdCekQ7OztHQUdHO0FBQ1UsUUFBQSxPQUFPLEdBQTRDO0lBQzVEOzs7T0FHRztJQUNILE9BQU87UUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELGNBQWM7SUFDZCxLQUFLLENBQUMsYUFBYTtRQUNmLE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQztRQUN6QixNQUFNLE9BQU8sR0FBRztZQUNaLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxFQUFhLDZCQUE2QjtZQUN4RCxNQUFNLEVBQUUsV0FBVyxFQUFRLGlCQUFpQjtZQUM1QyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBVSxTQUFTO1NBQ3ZDLENBQUM7UUFDRixTQUFTO1FBQ1QsTUFBTSxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkUsTUFBTSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsU0FBUyxFQUFFLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsY0FBYztJQUNkLEtBQUssQ0FBQyxhQUFhO1FBQ2YsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDO1FBQ3pCLE1BQU0sT0FBTyxHQUFHO1lBQ1osSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJO1lBQ2QsTUFBTSxFQUFFLFdBQVc7WUFDbkIsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDO1NBQ3BCLENBQUM7UUFDRixNQUFNLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2RSxNQUFNLENBQUMsR0FBRyxDQUFDLDBCQUEwQixTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQ3RELENBQUM7Q0FDSixDQUFDO0FBRUY7OztHQUdHO0FBQ0gsU0FBZ0IsSUFBSTtJQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7QUFDbkQsQ0FBQztBQUVEOzs7R0FHRztBQUNILFNBQWdCLE1BQU07SUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO0FBQ3JELENBQUM7QUFFRCxTQUFTO0FBQ1QsU0FBUyxZQUFZO0lBQ2pCLE1BQU0sTUFBTSxHQUFnQixFQUFFLENBQUM7SUFDL0IsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLGNBQWMsRUFBRTtRQUM5RCxJQUFJLEVBQUUsT0FBTztLQUNoQixDQUFDLENBQUM7SUFFSCxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBVSxFQUFFLEVBQUU7UUFDMUIsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNSLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtZQUNoQixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7U0FDbkIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgam9pbiB9IGZyb20gJ3BhdGgnO1xyXG4vLyDkuLTml7blnKjlvZPliY3mqKHlnZflop7liqDnvJbovpHlmajlhoXnmoTmqKHlnZfkuLrmkJzntKLot6/lvoTvvIzkuLrkuobog73lpJ/mraPluLggcmVxdWlyZSDliLAgY2Mg5qih5Z2X77yM5ZCO57ut54mI5pys5bCG5LyY5YyW6LCD55So5pa55byPXHJcbm1vZHVsZS5wYXRocy5wdXNoKGpvaW4oRWRpdG9yLkFwcC5wYXRoLCAnbm9kZV9tb2R1bGVzJykpO1xyXG5cclxuXHJcbmltcG9ydCB7IGRpcmVjdG9yIH0gZnJvbSAnY2MnO1xyXG5cclxuXHJcbmludGVyZmFjZSBTY2VuZUluZm8ge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgcGF0aDogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIENvY29zIENyZWF0b3Ig57yW6L6R5Zmo546v5aKD5LiL77yMRWRpdG9yIOaYr+WFqOWxgOWPmOmHj1xyXG5kZWNsYXJlIGNvbnN0IEVkaXRvcjogYW55O1xyXG5cclxuLyoqXHJcbiAqIEBlbiBSZWdpc3RyYXRpb24gbWV0aG9kIGZvciB0aGUgbWFpbiBwcm9jZXNzIG9mIEV4dGVuc2lvblxyXG4gKiBAemgg5Li65omp5bGV55qE5Li76L+b56iL55qE5rOo5YaM5pa55rOVXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbWV0aG9kczogeyBba2V5OiBzdHJpbmddOiAoLi4uYW55OiBhbnkpID0+IGFueSB9ID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBAZW4gQSBtZXRob2QgdGhhdCBjYW4gYmUgdHJpZ2dlcmVkIGJ5IG1lc3NhZ2VcclxuICAgICAqIEB6aCDpgJrov4cgbWVzc2FnZSDop6blj5HnmoTmlrnms5VcclxuICAgICAqL1xyXG4gICAgc2hvd0xvZygpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnSGVsbG8gV29ybGQgLSA2Jyk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIOWIh+aNouWIsCBNYWluIOWcuuaZr1xyXG4gICAgYXN5bmMgb3BlblNjZW5lTWFpbigpIHtcclxuICAgICAgICBjb25zdCBzY2VuZU5hbWUgPSAnTWFpbic7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgbmFtZTogcGtnLm5hbWUsICAgICAgICAgICAgLy8g5LiOIHBhY2thZ2UuanNvbiDkuK0gbmFtZSDkv53mjIHkuIDoh7RcclxuICAgICAgICAgICAgbWV0aG9kOiAnb3BlblNjZW5lJywgICAgICAgLy8gc2NlbmUudHMg5Lit55qE5pa55rOV5ZCNXHJcbiAgICAgICAgICAgIGFyZ3M6IFtzY2VuZU5hbWVdICAgICAgICAgIC8vIOS8oOWFpeWcuuaZr+WQjeensFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8g6LCD55So5Zy65pmv6ISa5pysXHJcbiAgICAgICAgYXdhaXQgRWRpdG9yLk1lc3NhZ2UucmVxdWVzdCgnc2NlbmUnLCAnZXhlY3V0ZS1zY2VuZS1zY3JpcHQnLCBvcHRpb25zKTtcclxuICAgICAgICBFZGl0b3IubG9nKGBTY2VuZSBTd2l0Y2hlcjog5bey5YiH5o2i5Yiw5Zy65pmvICR7c2NlbmVOYW1lfWApO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyDliIfmjaLliLAgR2FtZSDlnLrmma9cclxuICAgIGFzeW5jIG9wZW5TY2VuZUdhbWUoKSB7XHJcbiAgICAgICAgY29uc3Qgc2NlbmVOYW1lID0gJ0dhbWUnO1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6IHBrZy5uYW1lLFxyXG4gICAgICAgICAgICBtZXRob2Q6ICdvcGVuU2NlbmUnLFxyXG4gICAgICAgICAgICBhcmdzOiBbc2NlbmVOYW1lXVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgYXdhaXQgRWRpdG9yLk1lc3NhZ2UucmVxdWVzdCgnc2NlbmUnLCAnZXhlY3V0ZS1zY2VuZS1zY3JpcHQnLCBvcHRpb25zKTtcclxuICAgICAgICBFZGl0b3IubG9nKGBTY2VuZSBTd2l0Y2hlcjog5bey5YiH5o2i5Yiw5Zy65pmvICR7c2NlbmVOYW1lfWApO1xyXG4gICAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBlbiBNZXRob2QgVHJpZ2dlcmVkIG9uIEV4dGVuc2lvbiBTdGFydHVwXHJcbiAqIEB6aCDmianlsZXlkK/liqjml7bop6blj5HnmoTmlrnms5VcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJleHRlbnNpb24gc2NlbmUtc3dpdGNoZXIgbG9hZGVkXCIpO1xyXG59XHJcblxyXG4vKipcclxuICogQGVuIE1ldGhvZCB0cmlnZ2VyZWQgd2hlbiB1bmluc3RhbGxpbmcgdGhlIGV4dGVuc2lvblxyXG4gKiBAemgg5Y246L295omp5bGV5pe26Kem5Y+R55qE5pa55rOVXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdW5sb2FkKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJleHRlbnNpb24gc2NlbmUtc3dpdGNoZXIgdW5sb2FkZWRcIik7XHJcbn1cclxuXHJcbi8vIOiOt+WPluaJgOacieWcuuaZr1xyXG5mdW5jdGlvbiBnZXRBbGxTY2VuZXMoKTogU2NlbmVJbmZvW10ge1xyXG4gICAgY29uc3Qgc2NlbmVzOiBTY2VuZUluZm9bXSA9IFtdO1xyXG4gICAgY29uc3QgYXNzZXRzID0gRWRpdG9yLk1lc3NhZ2UucmVxdWVzdCgnYXNzZXQtZGInLCAncXVlcnktYXNzZXRzJywge1xyXG4gICAgICAgIHR5cGU6ICdzY2VuZScsXHJcbiAgICB9KTtcclxuXHJcbiAgICBhc3NldHMuZm9yRWFjaCgoYXNzZXQ6IGFueSkgPT4ge1xyXG4gICAgICAgIHNjZW5lcy5wdXNoKHtcclxuICAgICAgICAgICAgbmFtZTogYXNzZXQubmFtZSxcclxuICAgICAgICAgICAgcGF0aDogYXNzZXQucGF0aFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHNjZW5lcztcclxufVxyXG5cclxuIl19