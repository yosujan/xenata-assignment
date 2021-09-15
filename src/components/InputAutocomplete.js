import React, { useEffect, useState } from "react";

const InputAutocomplete = (props) => {
	const [activeOption, setActiveOption] = useState(0);
	const [filteredOptions, setFilteredOptions] = useState([]);
	const [showOptions, setShowOptions] = useState(false);
	const [userInput, setUserInput] = useState("");

	const onChange = (e) => {
		const { options } = props;

		const _userInput = e.currentTarget.value;

		const _filteredOptions = options.filter(
			(optionName) =>
				optionName.toLowerCase().indexOf(_userInput.toLowerCase()) > -1
		);

		setActiveOption(0);
		setFilteredOptions(_filteredOptions);
		setShowOptions(true);
		setUserInput(e.currentTarget.value);
	};

	const onOptionClick = (e) => {
		setActiveOption(0);
		setFilteredOptions([]);
		setShowOptions(false);
		setUserInput(e.currentTarget.innerText);
		// props.setValue(e.currentTarget.innerText);
	};

	const onKeyDown = (e) => {
		// if enter key pressed
		if (e.keyCode === 13) {
			setActiveOption(0);
			setShowOptions(false);
			setUserInput(filteredOptions[activeOption]);
			// props.setValue(filteredOptions[activeOption]);
		} else if (e.keyCode === 38) {
			// UP arrrow pressed
			if (activeOption === 0) {
				return;
			}
			setActiveOption(activeOption - 1);
		} else if (e.keyCode === 40) {
			// DOWN arrrow pressed
			if (activeOption === filteredOptions.length - 1) {
				console.log(activeOption);
				return;
			}
			setActiveOption(activeOption + 1);
		}
	};

	// update value if option updates
	useEffect(() => {
		props.setValue(userInput);
	}, [userInput, props]);

	return (
		<div className="inputautocomplete-wrapper">
			<div className="autocomplete-div">
				<input
					type="text"
					className="select-input"
					onChange={onChange}
					onKeyDown={onKeyDown}
					value={userInput}
					placeholder={props.placeholder}
					required={props.required}
					// valid={props.valid}
				/>
			</div>

			{/* list of options */}
			{showOptions && userInput && (
				<div>
					{filteredOptions.length ? (
						<ul>
							{filteredOptions.map((optionName, index) => (
								<li
									className={
										index === activeOption
											? "option-active"
											: ""
									}
									key={optionName}
									onClick={onOptionClick}
								>
									{optionName}
								</li>
							))}
						</ul>
					) : (
						<div className="error">Port name incorrect.</div>
					)}
				</div>
			)}
		</div>
	);
};

export default InputAutocomplete;
