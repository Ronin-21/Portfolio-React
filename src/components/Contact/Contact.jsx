import { Box, Grid, styled } from '@mui/material';
import { useForm } from '../../Hooks/useForm';
import { theme } from '../../Theme/theme';
import MyButton from '../Common/MyButton/MyButton';
import SectionContainer from '../Common/SectionContainer/SectionContainer.styled';
import Title from '../Common/Title/Title';
import ContactForm from './ContactForm/ContactForm';
import MyInput from './MyInput/MyInput';

const Contact = () => {
	// Hook useForm
	const { name, email, message, onInputChange, onResetForm } = useForm({
		name: '',
		email: '',
		message: '',
	});

	const onSubmit = (e) => {
		e.preventDefault();
		onResetForm();
		alert('funciona');
	};

	return (
		<StyledContact id='contacto'>
			<SectionContainer>
				<Title>Contacto</Title>
				<ContactForm
					// action='https://formsubmit.co/abelalejandro.dev@gmail.com'
					// method='POST'
					onSubmit={onSubmit}>
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
				</ContactForm>
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
