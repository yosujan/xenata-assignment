import http from "./HttpCommon";

const get = (origin, destination) => {
	return http.get("rates?origin=" + origin + "&destination=" + destination);
};

const RatesService = {
	get,
};
export default RatesService;
