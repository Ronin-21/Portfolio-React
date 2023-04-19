import { TextField, styled } from '@mui/material';
import { theme } from '../../../Theme/theme';

const MyInput = ({ ...props }) => {
	return (
		<StyledInput
			fullWidth
			color='secondary'
			variant='filled'
			required
			InputProps={{ disableUnderline: true }}
			{...props}
		/>
	);
};
export default MyInput;

const StyledInput = styled(TextField)`
	.MuiFilledInput-input {
		border-bottom: 2px solid ${theme.palette.primary.main};
	}
	& :hover {
		border-color: ${theme.palette.primary.light};
	}
	& label {
		color: ${theme.palette.secondary.dark};
	}
`;
