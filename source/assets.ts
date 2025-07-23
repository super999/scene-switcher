export async function printAllAssets() {
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