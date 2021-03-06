import axios from "axios";

const API_URL = "https://685rp9jkj1.execute-api.eu-west-1.amazonaws.com/prod/";
const X_API_KEY = process.env.REACT_APP_X_API_KEY;

export default axios.create({
	baseURL: API_URL,
	crossdomain: true,
	headers: {
		"x-api-key": X_API_KEY,
	},
});
