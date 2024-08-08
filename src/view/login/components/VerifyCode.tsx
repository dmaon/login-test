import React, { SetStateAction, Dispatch, FC } from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import { LoginForm as LoginFormDataType } from '../../../types/LoginForm'

type Props = {
	handleLogin: () => void
	setFormData: Dispatch<SetStateAction<LoginFormDataType>>
}

const VerifyCode: FC<Props> = ({ handleLogin, setFormData }) => {
	const handleFillData = (target: React.ChangeEvent<HTMLInputElement>) => {
		const inputName: string = target.target.name
		const inputValue: string = target.target.value

		setFormData((formEntry: LoginFormDataType) => ({
			...formEntry,
			[inputName]: inputValue,
		}))
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
				تایید رمز عبور یکبار مصرف
			</Typography>
			<Box sx={{ mt: 1 }}>
				<TextField
					margin='normal'
					required
					fullWidth
					id='verify-code'
					label='کد تایید'
					name='verifyCode'
					autoComplete='verify-code'
					autoFocus
					onChange={handleFillData}
				/>
				<Button
					type='button'
					fullWidth
					variant='contained'
					sx={{ mt: 3, mb: 2 }}
					onClick={handleLogin}
				>
					تایید
				</Button>
				<Grid container>
					<Grid item xs>
						<Link href='#' variant='body2'>
							ارسال مجدد کد یکبار مصرف
						</Link>
					</Grid>
				</Grid>
			</Box>
		</Box>
	)
}

export default VerifyCode
