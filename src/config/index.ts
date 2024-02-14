const token = localStorage.getItem('user-auth');

export const apiHeader = {
	authorization: token,
};

export const config = {
	api_config: token,
};
