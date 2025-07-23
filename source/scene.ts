// import { join } from 'path';
// module.paths.push(join(Editor.App.path, 'node_modules'));
import { director, SceneAsset } from 'cc';

import { AssetInfo } from '@cocos/creator-types/editor/packages/asset-db/@types/public';
import packageJSON from '../package.json';

// 切换到 Main 场景
export async function openSceneMain() {
  const sceneName = 'main.scene';
  let uuid = await QuerySceneUuid(sceneName);
  await Editor.Message.request('scene', 'open-scene', uuid);
  console.log(`Scene Switcher: 已切换到场景 ${sceneName}`);
}

// 切换到 Game 场景
export async function openSceneGame() {
  const sceneName = 'game.scene';
  let uuid = await QuerySceneUuid(sceneName);
  await Editor.Message.request('scene', 'open-scene', uuid);
  console.log(`Scene Switcher: 已切换到场景 ${sceneName}`);
}

interface SceneInfo {
  name: string;
  path: string;
}

export async function showAllScenes() {
  const scenes = await getAllScenes();
  if (!Array.isArray(scenes) || scenes.length === 0) {
    console.log('No scenes found.');
    return;
  }
  console.log('Available Scenes:');
  scenes.forEach(scene => {
    console.log(`showAllScenes - ${scene.name} (${scene.path})`);
  });
}

export async function printAllScenesV2() {
  const scenes = await getAllScenesV2();
  if (!Array.isArray(scenes) || scenes.length === 0) {
    console.log('No scenes found.');
    return;
  }
  console.log('Available Scenes (v2):');
  scenes.forEach(scene => {
    console.log(`printAllScenesV2 - name:${scene.name}, path:(${scene.path}), type: ${scene.type}`);
  });

}

// 获取所有场景（异步）
export async function getAllScenes(): Promise<AssetInfo[]> {
  let assets: AssetInfo[] = [];
  try {
    assets = await Editor.Message.request('asset-db', 'query-assets', {
      // @ts-ignore
      type: 'scene'
    });
  } catch (e) {

    console.error('Failed to query scenes:', e);
    return assets;
  }
  console.log('Assets:', assets);
  return assets;
}

export async function getAllScenesV2(): Promise<AssetInfo[]> {
  let assets: AssetInfo[] = [];
  try {
    assets = await Editor.Message.request('asset-db', 'query-assets', { ccType: 'cc.SceneAsset' });
  }
  catch (e) {
    console.error('Failed to query scenes:', e);
    return assets;
  }
  return assets;
}

export async function QuerySceneUuid(sceneName: string): Promise<string> {
  const scenes = await getAllScenesV2();
  const scene = scenes.find(s => s.name === sceneName);
  let find_asset: AssetInfo | undefined = undefined;
  if (!scene) {
    // 打印所有 scenes
    for (const s of scenes) {
      console.log(`Available Scene: name: ${s.name}, display: ${s.displayName}, path: (${s.path})`);
      console.log(`scene info: ${JSON.stringify(s, null, 2)}`);
    }
    // 如果没有找到指定的场景，抛出错误 
    throw new Error(`Scene "${sceneName}" not found.`);
  }

  return scene.uuid;
}
