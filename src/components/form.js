import React, { useState, useEffect } from "react";
import InputAutocomplete from "./InputAutocomplete";

const Form = (props) => {
	const { ports = [] } = props;

	// options for dropdown list
	const [options, setOptions] = useState([
		ports.map((port) => port.name + " (" + port.code + ")"),
	]);

	// port codes only
	const [portCodes, setPortCodes] = useState([
		ports.map((port) => port.code),
	]);

	const [originPort, setOriginPort] = useState();
	const [destinationPort, setDestinationPort] = useState();

	useEffect(() => {
		if (originPort) {
			const _origin = originPort.substr(originPort.indexOf("(") + 1, 5);
			setOriginValue(_origin);
		} else {
			setOriginValue(false);
		}
	}, [originPort]);

	useEffect(() => {
		if (destinationPort) {
			const _destination = destinationPort.substr(
				destinationPort.indexOf("(") + 1,
				5
			);
			setDestinationValue(_destination);
		} else {
			setDestinationValue(false);
		}
	}, [destinationPort]);

	const [originValue, setOriginValue] = useState(false);
	const [destinationValue, setDestinationValue] = useState(false);

	useEffect(() => {
		var _options = ports.map((port) => port.name + " (" + port.code + ")");
		setOptions(_options);

		var _portCodes = ports.map((port) => port.code);
		setPortCodes(_portCodes);
	}, [ports, props]);

	// Check if the selected value is in the list of portcodes
	const validate = (value) => {
		return portCodes.includes(value);
	};

	const onSubmitButtonClick = (e) => {
		if (validate(originValue) && validate(destinationValue)) {
			props.getRates(originValue, destinationValue);
		}
	};

	return (
		<div className="form-wrapper">
			<div>
				<label>
					Origin:
					<InputAutocomplete
						options={[...options]}
						required={true}
						placeholder="Origin"
						setValue={setOriginPort}
						// valid={originValue}
					/>
				</label>
				<label>
					Destination:
					<InputAutocomplete
						options={[...options]}
						required={true}
						placeholder="Destination"
						setValue={setDestinationPort}
						// valid={destinationValue}
					/>
				</label>

				<button
					type="button"
					disabled={
						!validate(originValue) || !validate(destinationValue)
					}
					onClick={onSubmitButtonClick}
				>
					Submit
				</button>
			</div>
		</div>
	);
};

export default Form;
