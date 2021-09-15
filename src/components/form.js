import React, { useState, useEffect } from "react";
import RatesService from "../services/RatesService";

const Form = (props) => {
	const { ports = [] } = props;
	const [originPort, setOriginPort] = useState(0);
	const [destinationPort, setDestinationPort] = useState(0);

	const onChangeOrigin = (e) => {
		setOriginPort(e.target.value);
	};

	const onChangeDestination = (e) => {
		setDestinationPort(e.target.value);
	};

	const onClick = () => {
		if (originPort && destinationPort) {
			props.getRates(originPort, destinationPort);
		}
	};

	return (
		<div className="form-wrapper">
			<label>
				Origin:
				<select className="select-input" onChange={onChangeOrigin}>
					<option value={0}>Select Origin</option>
					{ports.map((port) => (
						<option value={port.code} key={"origin-" + port.code}>
							{port.name} ({port.code})
						</option>
					))}
				</select>
			</label>
			<label>
				Destination:
				<select className="select-input" onChange={onChangeDestination}>
					<option value={0}>Select Destination</option>
					{ports.map((port) => (
						<option
							value={port.code}
							key={"destination-" + port.code}
						>
							{port.name} ({port.code})
						</option>
					))}
				</select>
			</label>

			<button
				type="button"
				onClick={onClick}
				disabled={originPort == 0 || destinationPort == 0}
			>
				Submit
			</button>
		</div>
	);
};

export default Form;
