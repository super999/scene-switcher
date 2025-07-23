
import { AssetInfo } from '@cocos/creator-types/editor/packages/asset-db/@types/public';

export async function showAllScripts() {
    const scripts = await GetAllScript();
    if (!Array.isArray(scripts) || scripts.length === 0) {
        console.log('No scripts found.');
        return;
    }
    console.log('Available Scripts:');
    scripts.forEach(script => {
        console.log(`showAllScripts - name:${script.name},displayName:(${script.path})`);
    });
}

export async function GetAllScript(): Promise<AssetInfo[]> {
    let assets: AssetInfo[] = [];
    try {
        assets = await Editor.Message.request('asset-db', 'query-assets', { ccType: 'cc.Script' });
    } catch (e) {
        console.error('Failed to query scripts:', e);
        return assets;
    }
    return assets;
}