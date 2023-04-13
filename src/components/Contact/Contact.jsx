import {
	Box,
	Button,
	Grid,
	Paper,
	TextField,
	Typography,
	styled,
} from '@mui/material';
import contactImg from '../../assets/Contact.jpg';
import { useForm } from '../../Hooks/useForm';
import Title from '../Common/Title/Title';

const StyledContact = styled(Box)`
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const StyledInput = styled(TextField)`
	.MuiFilledInput-input {
		border-bottom: 2px solid #d11710;
	}
	& :hover {
		border-color: red;
	}
	& label {
		color: #10cbd199;
	}
`;

const Contact = () => {
	const { name, email, message, onInputChange, onResetForm } = useForm({
		name: '',
		email: '',
		message: '',
	});

	return (
		<StyledContact id='contacto'>
			<Paper
				sx={{
					position: 'absolute',
					height: '40%',
					width: '100%',
					zIndex: 0,
				}}
			/>
			<Title>Contacto</Title>
			<Paper sx={{ p: 3, zIndex: 100, bgcolor: '#222' }} elevation={3}>
				<form
					action='https://formsubmit.co/abelalejandro.dev@gmail.com'
					method='POST'>
					<Grid container spacing={2}>
						<Grid item xl={6}>
							<StyledInput
								fullWidth
								color='secondary'
								label='Ingresa tu nombre'
								variant='filled'
								name='name'
								required
								value={name}
								onChange={onInputChange}
								InputProps={{ disableUnderline: true }}
							/>
						</Grid>
						<Grid item xl={6}>
							<StyledInput
								fullWidth
								color='secondary'
								label='Ingresa tu correo'
								variant='filled'
								name='email'
								required
								type='email'
								value={email}
								onChange={onInputChange}
								InputProps={{ disableUnderline: true }}
							/>
						</Grid>
						<Grid item xl={12}>
							<StyledInput
								fullWidth
								color='secondary'
								label='Déjame tus comentarios'
								variant='filled'
								name='message'
								required
								multiline
								rows={5}
								value={message}
								onChange={onInputChange}
								InputProps={{ disableUnderline: true }}
							/>
						</Grid>
						<Grid item xl={4}>
							<Button
								type='submit'
								variant='contained'
								size='large'
								sx={{ mt: 3, width: '100%' }}>
								Enviar mensaje
							</Button>
						</Grid>
					</Grid>
				</form>
			</Paper>
		</StyledContact>
	);
};

export default Contact;
