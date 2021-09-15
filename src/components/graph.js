import React, { useEffect, useState } from "react";
import LineChart from "./LineChart/LineChart";
import Legend from "./LineChart/_components/Legend";

const Graph = (props) => {
	const { rates } = props;
	const [selectedItems, setSelectedItems] = useState(["Low", "Mean", "High"]);
	const [lowData, setLowData] = useState({
		name: "Low",
		color: "#00f",
		items: [],
	});

	const [highData, setHighData] = useState({
		name: "High",
		color: "#d53e4f",
		items: [],
	});

	const [meanData, setMeanData] = useState({
		name: "Mean",
		color: "#27ae60",
		items: [],
	});

	const legendData = [lowData, meanData, highData];
	const chartData = [
		...[lowData, meanData, highData].filter((d) =>
			selectedItems.includes(d.name)
		),
	];

	const dimensions = {
		width: 800,
		height: 400,
		margin: { top: 30, right: 30, bottom: 30, left: 60 },
	};

	const onChangeSelection = (name) => {
		const newSelectedItems = selectedItems.includes(name)
			? selectedItems.filter((item) => item !== name)
			: [...selectedItems, name];
		setSelectedItems(newSelectedItems);
	};

	useEffect(() => {
		var _lowData = {
			...lowData,
			items: rates.map((d) => ({
				...d,
				value: d.low,
				date: new Date(d.day),
			})),
		};

		var _highData = {
			...highData,
			items: rates.map((d) => ({
				...d,
				value: d.high,
				date: new Date(d.day),
			})),
		};

		var _meanData = {
			...meanData,
			items: rates.map((d) => ({
				...d,
				value: d.mean,
				date: new Date(d.day),
			})),
		};

		setLowData(_lowData);
		setHighData(_highData);
		setMeanData(_meanData);
		// eslint-disable-next-line
	}, [rates]);

	return (
		<div className="graph-div">
			{rates && (
				<div className="graph-wrapper">
					<Legend
						data={legendData}
						selectedItems={selectedItems}
						onChange={onChangeSelection}
					/>
					<LineChart data={chartData} dimensions={dimensions} />
				</div>
			)}
		</div>
	);
};

export default Graph;
