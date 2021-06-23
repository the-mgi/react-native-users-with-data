export const STATUSES = {
	IS_LOADING: "IS_LOADING",
	NOT_LOGGED_IN: "NOT_LOGGED_IN",
	LOGGED_IN: "LOGGED_IN"
};

export const TYPES = Object.freeze({
	ALBUMS: 'ALBUMS',
	POSTS: 'POSTS',
	TODOS: 'TODOS'
});

export const URLS_DATA = Object.freeze({
	BASE_URL: 'https://jsonplaceholder.typicode.com/users/',
	[TYPES.ALBUMS]: {
		subPart: 'albums'
	},
	[TYPES.POSTS]: {
		subPart: 'posts'
	},
	[TYPES.TODOS]: {
		subPart: 'todos'
	}
});

export const ACCORDIONS = {
	personalInformation: 'PERSONAL_INFORMATION',
	address: 'ADDRESS',
	company: 'COMPANY'
};

export const ICONS = {
	company: "domain",
	address: "home",
	personalInformation: "card-account-details-outline"
};
