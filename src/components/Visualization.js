import React, { useEffect, useState } from "react";
import PortsService from "../services/PortsService";
import RatesService from "../services/RatesService";
import Form from "./form";
import Graph from "./graph";

const Visualization = () => {
	const [ports, setPorts] = useState([]);
	const [rates, setRates] = useState([]);
	const [status, setStatus] = useState(false);
	const [message, setMessage] = useState("Select origin and destination.");

	useEffect(() => {
		PortsService.get().then((response) => {
			var allports = response;
			setPorts([...allports.data]);
		});
	}, []);

	const getRates = (originPort, destinationPort) => {
		RatesService.get(originPort, destinationPort)
			.then((response) => {
				setRates(response.data);
				setMessage(false);
				setStatus(true);
			})
			.catch(function (error) {
				setMessage(
					"Sorry! No Results found for the selected origin and destination. Please try other combinations."
				);
				setStatus(false);
			});
	};

	return (
		<div>
			<Form ports={ports} getRates={getRates} />
			<div className="wrapper">
				{message && <div className="message">{message}</div>}
				{status && <Graph rates={rates} />}
			</div>
		</div>
	);
};

export default Visualization;
