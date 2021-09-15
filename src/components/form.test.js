import { render, screen, fireEvent } from "@testing-library/react";
import Form from "./form";

test("renders the form", () => {
	render(<Form />);
	const label = screen.getByText(/origin:/i);
	expect(label).toBeInTheDocument();
});

test("submit button should be disabled when origin or destination is not selected", () => {
	const { debug, getByText } = render(<Form />);
	const submitBtn = getByText(/submit/i);
	expect(submitBtn).toBeDisabled();
});

// test("submit button should be enabled after origin and destination are selected", () => {
// 	const { getByLabelText, getByText, getByRole } = render(<Form />);
// 	const selectOrigin = getByText(/origin:/i);
// 	const selectDestination = getByText(/destination:/i);
// });
