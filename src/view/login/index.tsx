import React from 'react'
import { useState } from 'react'
import LoginUI from './components/LoginUI'
import VerifyCode from './components/VerifyCode'

import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { LoginForm as LoginFormDataType } from '../../types/LoginForm'

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme({
	direction: 'rtl',
})

export default function Login() {
	const [formData, setFormData] = useState<LoginFormDataType>({
		phoneNumber: '',
	})
	const [showLoginFormState, setShowLoginFormState] = useState<boolean>(true)

	const handleLogin = () => {
		console.log(formData)
	}

	return (
		<>
			<ThemeProvider theme={defaultTheme}>
				<Container component='main' maxWidth='xs'>
					<CssBaseline />
					{showLoginFormState ? (
						<LoginUI
							formData={formData}
							setFormData={setFormData}
							setShowLoginFormState={setShowLoginFormState}
						/>
					) : (
						<VerifyCode setFormData={setFormData} handleLogin={handleLogin} />
					)}
				</Container>
			</ThemeProvider>
		</>
	)
}
