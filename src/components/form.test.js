import { render, screen, fireEvent } from "@testing-library/react";
import Form from "./form";

test("renders the form", () => {
	render(<Form ports={[]} />);
	const label = screen.getByText(/origin:/i);
	expect(label).toBeInTheDocument();
});

test("submit button should be disabled by default", () => {
	const { getByText } = render(<Form ports={[]} />);
	const submitBtn = getByText(/submit/i);
	expect(submitBtn).toBeDisabled();
});

test("submit button should be enabled after origin and destination are selected", () => {
	const ports = [
		{
			code: "CNSGH",
			name: "Shanghai",
		},
		{
			code: "NLRTM",
			name: "Rotterdam",
		},
	];
	const { getByLabelText, getByText, getByRole } = render(
		<Form ports={ports} />
	);
	const selectOrigin = getByText(/origin:/i);
	const selectDestination = getByText(/destination:/i);
	expect;
});
