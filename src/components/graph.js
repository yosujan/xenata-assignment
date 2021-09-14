import React, { useEffect, useState } from "react";
import LineChart from "./LineChart";

const Graph = (props) => {
	const { rates } = props;
	const [lowData, setLowData] = useState({
		name: "Low",
		color: "#d53e4f",
		items: [],
	});

	const [highData, setHighData] = useState({
		name: "High",
		color: "#f00",
		items: [],
	});

	const [meanData, setMeanData] = useState({
		name: "Mean",
		color: "#0f0",
		items: [],
	});

	const dimensions = {
		width: 800,
		height: 400,
		margin: { top: 30, right: 30, bottom: 30, left: 60 },
	};

	useEffect(() => {
		var _lowData = {
			name: "Low",
			color: "#0000ff",
			items: rates.map((d) => ({
				...d,
				value: d.low,
				date: new Date(d.day),
			})),
		};

		var _highData = {
			name: "High",
			color: "#ff0000",
			items: rates.map((d) => ({
				...d,
				value: d.high,
				date: new Date(d.day),
			})),
		};

		var _meanData = {
			name: "Mean",
			color: "#00ff00",
			items: rates.map((d) => ({
				...d,
				value: d.mean,
				date: new Date(d.day),
			})),
		};

		setLowData(_lowData);
		setHighData(_highData);
		setMeanData(_meanData);
	}, [rates]);

	return (
		<div>
			Graph
			<div>{JSON.stringify(rates, null, "\t")}</div>
			{rates && (
				<div>
					<LineChart
						data={[meanData, lowData, highData]}
						dimensions={dimensions}
					/>
				</div>
			)}
		</div>
	);
};

export default Graph;
