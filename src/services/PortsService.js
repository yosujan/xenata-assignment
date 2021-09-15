import http from "./HttpCommon";

const get = () => {
	return http.get("/ports");
};

const PortsService = {
	get,
};
export default PortsService;
