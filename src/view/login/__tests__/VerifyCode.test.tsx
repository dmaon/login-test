import React from 'react'

import { render, screen, fireEvent } from '@testing-library/react'
import Login from '..'

// const setup = () => {
// 	const utils = render(<Login />)
// 	const input = screen.getByLabelText('phone-number')
// 	return {
// 		input,
// 		...utils,
// 	}
// }

test('renders verify code page when user click on login button', () => {
	render(<Login />)

	const loginBtn = screen.getByRole('button', { name: /ورود/i })
	expect(loginBtn).toBeInTheDocument()

	// const input = screen.getByRole("input", { name: "phoneNumber" });
	// expect(input).toBeInTheDocument();
	// fireEvent.change(input, { target: { value: "09012345678" } });

	fireEvent.click(loginBtn)

	const verifyCodeText = screen.getByText(/تایید رمز عبور یکبار مصرف/i)
	expect(verifyCodeText).toBeInTheDocument()
})
