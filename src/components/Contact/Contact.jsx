import {
	Box,
	Button,
	Container,
	Grid,
	Paper,
	TextField,
	Typography,
	styled,
} from '@mui/material';
import contactImg from '../../assets/Contact.jpg';
import { useForm } from '../../Hooks/useForm';
import Title from '../Common/Title/Title';
import SectionContainer from '../Common/SectionContainer/SectionContainer.styled';
import { theme } from '../../Theme/theme';
import MyButton from '../Common/MyButton/MyButton';
import Input from './Input';
import MyInput from './Input';

const Contact = () => {
	// Hook useForm
	const { name, email, message, onInputChange, onResetForm } = useForm({
		name: '',
		email: '',
		message: '',
	});

	return (
		<StyledContact id='contacto'>
			<SectionContainer>
				<Title>Contacto</Title>
				<Paper sx={{ p: 3, zIndex: 100, bgcolor: '#222' }} elevation={3}>
					<form
						// action='https://formsubmit.co/abelalejandro.dev@gmail.com'
						// method='POST'
						onSubmit={() => alert('funciona')}>
						<Grid container spacing={2}>
							<Grid item xl={6}>
								<MyInput
									label='Ingresa tu nombre'
									name='name'
									value={name}
									onChange={onInputChange}
								/>
							</Grid>
							<Grid item xl={6}>
								<MyInput
									label='Ingresa tu correo'
									type='email'
									name='email'
									value={email}
									onChange={onInputChange}
								/>
							</Grid>
							<Grid item xl={12}>
								<MyInput
									label='Déjame tus comentarios'
									name='message'
									multiline
									rows={5}
									value={message}
									onChange={onInputChange}
								/>
							</Grid>
							<Grid item xl={4}>
								<MyButton type='submit' width='100%' variant='contained'>
									Enviar mensaje
								</MyButton>
							</Grid>
						</Grid>
					</form>
				</Paper>
			</SectionContainer>
		</StyledContact>
	);
};

export default Contact;

const StyledContact = styled(Box)`
	position: relative;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	&::before {
		content: '';
		position: absolute;
		height: 40%;
		width: 100%;
		background-color: ${theme.palette.background.paper};
		z-index: -10;
	}
`;
