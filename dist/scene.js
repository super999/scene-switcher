'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.methods = void 0;
exports.load = load;
exports.unload = unload;
// 注入引擎模块搜索路径（若需要引用 Editor.App 等变量）
// import { join } from 'path';
// module.paths.push(join(Editor.App.path, 'node_modules'));
const cc_1 = require("cc");
/** 扩展启动时触发 */
function load() { }
/** 扩展卸载时触发 */
function unload() { }
/** 暴露给主进程调用的方法 */
exports.methods = {
    /**
     * 切换场景
     * @param sceneName 场景名称（不带扩展名）
     */
    openScene(sceneName) {
        cc_1.director.loadScene(sceneName); // 加载并运行场景 :contentReference[oaicite:5]{index=5}:contentReference[oaicite:6]{index=6}
        return true;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NlbmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zb3VyY2Uvc2NlbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7QUFTYixvQkFBeUI7QUFHekIsd0JBQTJCO0FBVjNCLG1DQUFtQztBQUNuQywrQkFBK0I7QUFDL0IsNERBQTREO0FBRTVELDJCQUE4QjtBQUU5QixjQUFjO0FBQ2QsU0FBZ0IsSUFBSSxLQUFJLENBQUM7QUFFekIsY0FBYztBQUNkLFNBQWdCLE1BQU0sS0FBSSxDQUFDO0FBRTNCLGtCQUFrQjtBQUNMLFFBQUEsT0FBTyxHQUFHO0lBQ3JCOzs7T0FHRztJQUNILFNBQVMsQ0FBQyxTQUFpQjtRQUN6QixhQUFRLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUUscUZBQXFGO1FBQ3JILE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG4vLyDms6jlhaXlvJXmk47mqKHlnZfmkJzntKLot6/lvoTvvIjoi6XpnIDopoHlvJXnlKggRWRpdG9yLkFwcCDnrYnlj5jph4/vvIlcclxuLy8gaW1wb3J0IHsgam9pbiB9IGZyb20gJ3BhdGgnO1xyXG4vLyBtb2R1bGUucGF0aHMucHVzaChqb2luKEVkaXRvci5BcHAucGF0aCwgJ25vZGVfbW9kdWxlcycpKTtcclxuXHJcbmltcG9ydCB7IGRpcmVjdG9yIH0gZnJvbSAnY2MnO1xyXG5cclxuLyoqIOaJqeWxleWQr+WKqOaXtuinpuWPkSAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbG9hZCgpIHt9XHJcblxyXG4vKiog5omp5bGV5Y246L295pe26Kem5Y+RICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1bmxvYWQoKSB7fVxyXG5cclxuLyoqIOaatOmcsue7meS4u+i/m+eoi+iwg+eUqOeahOaWueazlSAqL1xyXG5leHBvcnQgY29uc3QgbWV0aG9kcyA9IHtcclxuICAvKipcclxuICAgKiDliIfmjaLlnLrmma9cclxuICAgKiBAcGFyYW0gc2NlbmVOYW1lIOWcuuaZr+WQjeensO+8iOS4jeW4puaJqeWxleWQje+8iVxyXG4gICAqL1xyXG4gIG9wZW5TY2VuZShzY2VuZU5hbWU6IHN0cmluZykge1xyXG4gICAgZGlyZWN0b3IubG9hZFNjZW5lKHNjZW5lTmFtZSk7ICAvLyDliqDovb3lubbov5DooYzlnLrmma8gOmNvbnRlbnRSZWZlcmVuY2Vbb2FpY2l0ZTo1XXtpbmRleD01fTpjb250ZW50UmVmZXJlbmNlW29haWNpdGU6Nl17aW5kZXg9Nn1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxufTtcclxuIl19