import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	Divider,
	Typography,
	styled,
} from '@mui/material';
import { theme } from '../../../Theme/theme';
import { MyButton } from '../../Common/MyButton';

const ContactModal = ({ msj, open, handleClose }) => {
	return (
		<StyledContactModal open={open} onClose={handleClose}>
			<Typography variant='h5' align='center' fontWeight='bold'>
				Gracias por comunicarse, en breve recibirá una respuesta!
			</Typography>
			<Divider light={true} />
			<DialogContent>
				<DialogContentText>{msj}</DialogContentText>
			</DialogContent>
			<DialogActions>
				<MyButton variant='contained' onClick={handleClose}>
					Cerrar
				</MyButton>
			</DialogActions>
		</StyledContactModal>
	);
};

export default ContactModal;

const StyledContactModal = styled(Dialog)`
	z-index: 9999;

	.MuiDialog-paper {
		padding: 1rem;
		color: ${theme.palette.background.paper};
		background-color: ${theme.palette.text.primary};
	}
`;
