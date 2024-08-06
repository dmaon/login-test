import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Login from "../index";
import VerifyCode from "../../verifyCode";
import { BrowserRouter, Route, Routes } from "react-router-dom";

test("renders login page with button", () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );

  const loginBtn = screen.getByRole("button");
  expect(loginBtn).toBeInTheDocument();
});
