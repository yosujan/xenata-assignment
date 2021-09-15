import { render, screen, fireEvent, debug } from "@testing-library/react";
import InputAutocomplete from "./InputAutocomplete";

// afterEach(cleanup);

test("renders the Input with autocomplete field", () => {
	const placeholder = "origin";
	render(<InputAutocomplete placeholder={placeholder} />);
	const input = screen.getByPlaceholderText(placeholder);
	expect(input).toBeInTheDocument();
});

test("renders error for wrong input", () => {
	const placeholder = "origin";
	render(
		<InputAutocomplete
			placeholder={placeholder}
			options={["abc", "def"]}
			setValue={() => {}}
		/>
	);
	const input = screen.getByPlaceholderText(placeholder);

	fireEvent.change(input, { target: { value: "randomvalue" } });
	const err = screen.getByText("Port name incorrect.");
	expect(err).toBeInTheDocument();
});

test("renders a dropdown with related items for matching input value", () => {
	const placeholder = "origin";
	render(
		<InputAutocomplete
			placeholder={placeholder}
			options={["abc", "def", "abzzd"]}
			setValue={() => {}}
		/>
	);
	const input = screen.getByPlaceholderText(placeholder);

	fireEvent.change(input, { target: { value: "ab" } });

	const listItem = screen.getByText("abzzd");
	expect(listItem).toBeInTheDocument();

	const listItem2 = screen.getByText("abc");
	expect(listItem2).toBeInTheDocument();
});
