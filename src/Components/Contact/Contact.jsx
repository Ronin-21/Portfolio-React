import { Box, Grid, Typography, styled } from '@mui/material';
import { useState } from 'react';
import { useForm } from '../../Hooks/useForm';
import { theme } from '../../Theme/theme';
import { MyButton } from '../Common/MyButton';
import { SectionContainer } from '../Common/SectionContainer';
import { Spinner } from '../Common/Spinner';
import { Title } from '../Common/Title';
import ContactForm from './ContactForm/ContactForm';
import { ContactModal } from './ContactModal';
import MyInput from './MyInput/MyInput';
import ReactWhatsapp from 'react-whatsapp';
import { StyledSpan } from '../Common/StyledSpan';

const Contact = () => {
	// Handle modal of success
	const [open, setOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [messageModal, setMessageModal] = useState('');

	const handleClose = () => {
		setOpen(!open);
	};

	// Hook useForm
	const {
		name,
		email,
		message,
		formState,
		onInputChange,
		onResetForm,
	} = useForm({
		name: '',
		email: '',
		message: '',
	});

	// Handle submit
	const onSubmit = (e) => {
		e.preventDefault();
		setIsLoading(true);

		// Send data to email address
		fetch('https://formsubmit.co/ajax/ale_lasarte@hotmail.com', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify(formState),
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.success) {
					setIsLoading(false);
					setMessageModal(data.message);
					handleClose();
					onResetForm();
				}
			})
			.catch((error) => console.log(error));
	};

	return (
		<StyledContact id='contacto'>
			{/* Set Loader and Modal */}
			{isLoading && <Spinner />}
			<ContactModal msj={messageModal} open={open} handleClose={handleClose} />

			<SectionContainer>
				<Title>Contacto</Title>
				<Typography align='center' variant='h5' paddingBottom={3}>
					Envíame un correo o contáctame por{' '}
					<ReactWhatsapp
						number='+549 3858480489'
						message='Hello World!!!'
						element={StyledSpan}
						style={{ cursor: 'pointer' }}>
						Whatsapp
					</ReactWhatsapp>
				</Typography>
				<ContactForm onSubmit={onSubmit}>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<MyInput
								label='Ingresa tu nombre'
								name='name'
								value={name}
								onChange={onInputChange}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<MyInput
								label='Ingresa tu correo'
								type='email'
								name='email'
								value={email}
								onChange={onInputChange}
							/>
						</Grid>
						<Grid item xs={12} sm={12}>
							<MyInput
								label='Déjame tus comentarios'
								name='message'
								multiline
								rows={5}
								value={message}
								onChange={onInputChange}
							/>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
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
