import http from "./HttpCommon";

const get = () => {
	return http.get("/ports");
};

export default {
	get,
};
