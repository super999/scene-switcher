"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printAllAssets = printAllAssets;
async function printAllAssets() {
    const assets = await Editor.Message.request('asset-db', 'query-assets', {});
    if (!Array.isArray(assets) || assets.length === 0) {
        console.log('No assets found.');
        return;
    }
    console.log('Available Assets:');
    assets.forEach(asset => {
        console.log(`printAllAssets - name:${asset.name}, path:(${asset.path}), type: ${asset.type}`);
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc291cmNlL2Fzc2V0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHdDQVVDO0FBVk0sS0FBSyxVQUFVLGNBQWM7SUFDaEMsTUFBTSxNQUFNLEdBQUcsTUFBTSxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsY0FBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzVFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFLENBQUM7UUFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ2hDLE9BQU87SUFDWCxDQUFDO0lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ2pDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsS0FBSyxDQUFDLElBQUksV0FBVyxLQUFLLENBQUMsSUFBSSxZQUFZLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ2xHLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcmludEFsbEFzc2V0cygpIHtcclxuICAgIGNvbnN0IGFzc2V0cyA9IGF3YWl0IEVkaXRvci5NZXNzYWdlLnJlcXVlc3QoJ2Fzc2V0LWRiJywgJ3F1ZXJ5LWFzc2V0cycsIHt9KTtcclxuICAgIGlmICghQXJyYXkuaXNBcnJheShhc3NldHMpIHx8IGFzc2V0cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnTm8gYXNzZXRzIGZvdW5kLicpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKCdBdmFpbGFibGUgQXNzZXRzOicpO1xyXG4gICAgYXNzZXRzLmZvckVhY2goYXNzZXQgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBwcmludEFsbEFzc2V0cyAtIG5hbWU6JHthc3NldC5uYW1lfSwgcGF0aDooJHthc3NldC5wYXRofSksIHR5cGU6ICR7YXNzZXQudHlwZX1gKTtcclxuICAgIH0pO1xyXG59Il19