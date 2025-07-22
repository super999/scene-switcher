'use strict';

// 注入引擎模块搜索路径（若需要引用 Editor.App 等变量）
// import { join } from 'path';
// module.paths.push(join(Editor.App.path, 'node_modules'));

import { director } from 'cc';

/** 扩展启动时触发 */
export function load() {}

/** 扩展卸载时触发 */
export function unload() {}

/** 暴露给主进程调用的方法 */
export const methods = {
  /**
   * 切换场景
   * @param sceneName 场景名称（不带扩展名）
   */
  openScene(sceneName: string) {
    director.loadScene(sceneName);  // 加载并运行场景 :contentReference[oaicite:5]{index=5}:contentReference[oaicite:6]{index=6}
    return true;
  }
};
