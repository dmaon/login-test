import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Login from "../../login";
import VerifyCode from "../index";
import { BrowserRouter, Route, Routes } from "react-router-dom";

test("renders verify code page when user click on login button", () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/verify-code" element={<VerifyCode />} />
      </Routes>
    </BrowserRouter>
  );

  const loginBtn = screen.getByRole("button", { name: /ورود/i });
  expect(loginBtn).toBeInTheDocument();
  fireEvent.click(loginBtn);

  const verifyCodeText = screen.getByText(/تایید رمز عبور یکبار مصرف/i);
  expect(verifyCodeText).toBeInTheDocument();
});
