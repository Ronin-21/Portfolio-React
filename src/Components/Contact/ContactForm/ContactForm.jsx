import { Paper, styled } from '@mui/material';
import { theme } from '../../../Theme/theme';

const ContactForm = ({ children, ...props }) => {
	return (
		<StyledContactForm elevation={3} component='form' {...props}>
			{children}
		</StyledContactForm>
	);
};

const StyledContactForm = styled(Paper)`
	max-width: 1000px;
	margin: auto;
	padding: ${theme.spacing(4)};
	background-color: ${theme.palette.background.light};
`;

export default ContactForm;
