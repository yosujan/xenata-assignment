import http from "./HttpCommon";

const get = (origin, destination) => {
	// return http.get("/rates?origin=" + origin + "&destination=" + destination);
	// return http.get(
	// 	"https://685rp9jkj1.execute-api.eu-west-1.amazonaws.com/prod/rates?origin=CNSGH&destination=NLRTM"
	// );

	return http.get("rates?origin=" + origin + "&destination=" + destination);
};

export default {
	get,
};
// https://685rp9jkj1.execute-api.eu-west-1.amazonaws.com/prod/rates?origin=CNSGH&destination=NLRTM'
