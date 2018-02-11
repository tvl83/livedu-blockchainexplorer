export function nFormatter(num, digits) {
	let si = [
		{value: 1E18, symbol: "E"},
		{value: 1E15, symbol: "P"},
		{value: 1E12, symbol: "T"},
		{value: 1E9, symbol: "G"},
		{value: 1E6, symbol: "M"},
		{value: 1E3, symbol: "k"}
	], rx = /\.0+$|(\.[0-9]*[1-9])0+$/, i;
	for (i = 0; i < si.length; i++) {
		if (num >= si[i].value) {
			return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
		}
	}
	return num.toFixed(digits).replace(rx, "$1");
}

export function formatBytes(bytes,decimals) {
	if(bytes === 0) return '0 Bytes';
	let k = 1024,
		dm = decimals || 2,
		sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
		i = Math.floor(Math.log(bytes) / Math.log(k));
	return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

export function numberWithCommas(x) {
	let parts = x.toString().split(".");
	parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

	return parts.join(".");
}

export const ROOT_URL = 'http://192.168.0.18:3001';
export const CHOSEN_NET = 'MAINNET';

export function elipsisHash(hash) {
	return `${hash.substring(0,15)}...`
}