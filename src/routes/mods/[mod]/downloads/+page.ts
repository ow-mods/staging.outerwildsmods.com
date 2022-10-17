import type { HistoryPoint } from '$lib/helpers/api/history-points';
import { getModPathName } from '$lib/helpers/mod-path-name';
import { readFromStore } from '$lib/helpers/read-from-store';
import { modList } from '$lib/store';
import type { PageLoad } from './$types';

export const prerender = true;

export const load: PageLoad = async ({ fetch, params }) => {
	const mods = await readFromStore(modList);
	console.log('mods here', mods.length);
	console.log('mods here', mods.map((mod) => mod.name).join(', '));
	const currentMod = mods.find(({ name }) => params.mod === getModPathName(name));
	console.log('params.mod', params.mod);

	if (!currentMod) {
		return {
			status: 404,
			error: new Error(`Could not find mod ${params.mod}`),
		};
	}

	const modDownloadHistoryResponse = await fetch(`/api/${currentMod.uniqueName}/downloads`);

	if (modDownloadHistoryResponse.status !== 200) {
		console.error(
			`Failed to get mod download history from local API: ${modDownloadHistoryResponse.status}. ${modDownloadHistoryResponse.statusText}`
		);
		return {
			modDownloadHistory: [],
			mod: currentMod,
		};
	}

	const modDownloadHistory: HistoryPoint[] = await modDownloadHistoryResponse.json();

	return {
		modDownloadHistory,
		mod: currentMod,
	};
};
