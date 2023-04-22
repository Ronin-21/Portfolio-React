import { Typography, styled } from '@mui/material';
import { theme } from '../../../Theme/theme';
import { Fade } from 'react-awesome-reveal';

const Title = ({ children }) => {
	return (
		<Fade direction='down' triggerOnce>
			<StyledTitle variant='title' component='h2'>
				{children}
			</StyledTitle>
		</Fade>
	);
};

export default Title;

const StyledTitle = styled(Typography)`
	margin-bottom: 4rem;
	position: relative;
	&::after {
		content: '';
		position: absolute;
		bottom: 2%;
		left: 5%;
		width: 80%;
		height: 3px;
		border-radius: 2px;
		background-color: ${theme.palette.secondary.opacity};
	}
	&::before {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 20%;
		height: 12px;
		background-color: ${theme.palette.primary.main};
		border-radius: 2px;
		clip-path: polygon(5% 0, 100% 0%, 95% 100%, 0% 100%);
		z-index: 1;
	}
`;
