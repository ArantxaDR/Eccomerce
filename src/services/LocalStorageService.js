export const getLocalStorage = (key, defaultData) => {
	const data = JSON.parse(localStorage.getItem(key));
	return data === null ? defaultData : data;
};

export const setLocalStorage = (key, data) => {
	const item = {
		value: data,
		expiry: Date.now() + 3600000,
	}
	localStorage.setItem(key, JSON.stringify(item));
};
