import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders index page with learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
