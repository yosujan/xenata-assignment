import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders app correctly", () => {
	render(<App />);
	const heading = screen.getByText(/xenata visualization/i);
	expect(heading).toBeInTheDocument();
});
