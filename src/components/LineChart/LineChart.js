import React from "react";
import { Line, Axis, GridLine } from "./_components";
import useController from "./LineChart.controller";

const LineChart = ({ data = [], dimensions = {} }) => {
	const { width, height, margin = {} } = dimensions;
	const svgWidth = width + margin.left + margin.right;
	const svgHeight = height + margin.top + margin.bottom;
	const controller = useController({ data, width, height });
	const { yTickFormat, xScale, yScale, yScaleForAxis } = controller;

	return (
		<svg width={svgWidth} height={svgHeight}>
			<g transform={`translate(${margin.left},${margin.top})`}>
				<GridLine
					type="vertical"
					scale={xScale}
					ticks={10}
					size={height}
					transform={`translate(0, ${height})`}
				/>
				<GridLine
					type="horizontal"
					scale={yScaleForAxis}
					ticks={10}
					size={width}
				/>
				<GridLine
					type="horizontal"
					className="baseGridLine"
					scale={yScale}
					ticks={10}
					size={width}
					disableAnimation
				/>
				{data.map(({ name, items = [], color }) => (
					<Line
						key={name}
						data={items}
						xScale={xScale}
						yScale={yScale}
						color={color}
					/>
				))}

				<Axis
					type="left"
					scale={yScaleForAxis}
					// transform="translate(50, -10)"
					ticks={10}
					tickFormat={yTickFormat}
					color="#000"
				/>
				<Axis
					type="bottom"
					className="axisX"
					scale={xScale}
					transform={`translate(0, ${height})`}
					color="#000"
					ticks={10}
				/>
			</g>
		</svg>
	);
};

export default LineChart;
