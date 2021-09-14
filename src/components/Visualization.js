import React, { useEffect, useState } from "react";
import PortsService from "../services/PortsService";
import Form from "./form";
import Graph from "./graph";

const Visualization = () => {
	const [ports, setPorts] = useState([]);
	const [rates, setRates] = useState([]);

	const setTheRates = (rates) => {
		setRates(rates);
	};

	useEffect(() => {
		PortsService.get().then((response) => {
			var allports = response;
			console.log(allports);
			setPorts([...allports.data]);
		});
	}, []);

	return (
		<div className="graph-div">
			<Form ports={ports} setTheRates={setTheRates} />

			<Graph rates={rates} />
		</div>
	);
};

export default Visualization;
