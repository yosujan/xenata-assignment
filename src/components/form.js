import React, { useState, useEffect } from "react";
import RatesService from "../services/RatesService";

const Form = (props) => {
	const { ports } = props;
	const [originPort, setOriginPort] = useState("");
	const [destinationPort, setDestinationPort] = useState("");
	const [rates, setRates] = useState([]);

	useEffect(() => {
		// setOriginPort(ports[0].code);
		// setDestinationPort(ports[1].code);
	}, [ports]);

	const onChangeOrigin = (e) => {
		console.log(e.target.value);
		setOriginPort(e.target.value);
	};

	const onChangeDestination = (e) => {
		console.log(e.target.value);
		setDestinationPort(e.target.value);
	};

	const onSubmit = () => {
		console.log("Submit");
		RatesService.get(originPort, destinationPort).then((response) => {
			console.log(response);
			setRates(response.data);
			props.setTheRates(response.data);
		});
	};

	return (
		<div>
			<select className="select-input" onChange={onChangeOrigin}>
				{ports.map((port) => (
					<option
						value={port.code}
						key={"from-" + port.code}
						selected={originPort === port.code && true}
					>
						{port.name} ({port.code})
					</option>
				))}
			</select>
			<select className="select-input" onChange={onChangeDestination}>
				{ports.map((port) => (
					<option
						value={port.code}
						key={"destination-" + port.code}
						selected={destinationPort === port.code && true}
					>
						{port.name} ({port.code})
					</option>
				))}
			</select>

			<button type="button" onClick={onSubmit}>
				Submit
			</button>
		</div>
	);
};

export default Form;
