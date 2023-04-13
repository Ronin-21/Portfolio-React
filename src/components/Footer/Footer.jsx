import {
	Container,
	Divider,
	Grid,
	IconButton,
	Stack,
	Typography,
} from '@mui/material';
import { FacebookOutlined, GitHub, LinkedIn } from '@mui/icons-material';

const Footer = () => {
	return (
		<Container maxWidth='xl'>
			<Stack paddingBottom={4} spacing={3}>
				<Typography variant='logo' align='center'>
					Ronin <span style={{ color: '#d11710' }}>Web</span>Design)
				</Typography>
				<Stack direction='row' alignItems='center' justifyContent='center'>
					<IconButton href='https://www.facebook.com/abel.acuna.9' target='_blank'>
						<FacebookOutlined fontSize='large' color='primary' />
					</IconButton>
					<IconButton href='https://github.com/Ronin-21' target='_blank'>
						<GitHub fontSize='large' color='primary' />
					</IconButton>
					<IconButton
						href='https://www.linkedin.com/in/abel-alejandro-acu%C3%B1a-lasarte-7040b823b/'
						target='_blank'>
						<LinkedIn fontSize='large' color='primary' />
					</IconButton>
				</Stack>
				<Divider color='#2e2e2e' />
				<Typography variant='body2' align='center'>
					&copy; Copyright 2023 By Abel Alejandro Acuña
				</Typography>
			</Stack>
		</Container>
	);
};

export default Footer;
