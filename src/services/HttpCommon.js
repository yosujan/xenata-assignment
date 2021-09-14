import axios from "axios";

const API_URL = "https://685rp9jkj1.execute-api.eu-west-1.amazonaws.com/prod/";
const X_API_KEY = "***REMOVED***";

export default axios.create({
	baseURL: API_URL,
	crossdomain: true,
	headers: {
		// "Content-type": "application/json",
		"x-api-key": X_API_KEY,
	},
});
