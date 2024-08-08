import React, { SetStateAction, useState, Dispatch, FC } from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import { LoginForm as LoginFormDataType } from '../../../types/LoginForm'
import * as Check from '../../../helpers/Functions'

type Props = {
	formData: LoginFormDataType
	setFormData: Dispatch<SetStateAction<LoginFormDataType>>
	setShowLoginFormState: Dispatch<SetStateAction<boolean>>
}

type FormAlerts = {
	phoneNumber: string
}

const defaultFormAlerts: FormAlerts = {
	phoneNumber: '',
}

const LoginUI: FC<Props> = ({
	formData,
	setFormData,
	setShowLoginFormState,
}) => {
	const [formAlerts, setFormAlerts] = useState<FormAlerts>(defaultFormAlerts)
	const handleValidation = (formData: LoginFormDataType): boolean => {
		// validate phone number
		if (
			formData.phoneNumber.length !== 11 ||
			!Check.checkPhoneNumber(formData.phoneNumber)
		) {
			setFormAlerts({ phoneNumber: 'شماره همراه نامعتبر است' })
			return false
		}

		return true
	}

	const handleFillData = (target: React.ChangeEvent<HTMLInputElement>) => {
		const inputName: string = target.target.name
		const inputValue: string = target.target.value

		setFormData((formEntry: LoginFormDataType) => ({
			...formEntry,
			[inputName]: inputValue,
		}))
	}

	const handleSubmit = () => {
		if (handleValidation(formData)) {
			setFormAlerts(defaultFormAlerts)
			setShowLoginFormState(false)
		}
	}

	return (
		<Box
			sx={{
				marginTop: 8,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}
		>
			<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
				<LockOutlinedIcon />
			</Avatar>
			<Typography component='h1' variant='h5'>
				ورود / ثبت نام
			</Typography>
			<Box sx={{ mt: 1 }}>
				<TextField
					margin='normal'
					required
					fullWidth
					id='phone-number'
					label='شماره همراه'
					name='phoneNumber'
					autoComplete='phone-number'
					autoFocus
					onChange={handleFillData}
					helperText={formAlerts.phoneNumber}
					error={formAlerts.phoneNumber.length > 0 ? true : false}
				/>
				<Button
					type='button'
					fullWidth
					variant='contained'
					sx={{ mt: 3, mb: 2 }}
					onClick={handleSubmit}
				>
					ورود
				</Button>
				<Grid container>
					<Grid item xs>
						<Link href='#' variant='body2'>
							قوانین و مقررات
						</Link>
					</Grid>
				</Grid>
			</Box>
		</Box>
	)
}

export default LoginUI
