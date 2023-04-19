import { Button, styled } from '@mui/material';
import { theme } from '../../../Theme/theme';

const MyButton = ({ children, ...props }) => {
	return (
		<StyledButton {...props} size='large'>
			{children}
		</StyledButton>
	);
};

export default MyButton;

const StyledButton = styled(Button)`
	color: ${theme.palette.text.primary};
	border-width: 2px;
	width: ${({ width }) => width};

	&:hover {
		border-width: 2px;
	}
`;
