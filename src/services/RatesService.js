import http from "./HttpCommon";

const get = (origin, destination) => {
	return http.get("rates?origin=" + origin + "&destination=" + destination);
};

export default {
	get,
};
