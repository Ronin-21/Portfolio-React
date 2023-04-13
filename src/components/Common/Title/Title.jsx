import { Typography, styled } from '@mui/material';

const Title = ({ children }) => {
	return (
		<StyledTitle variant='title' component='h2'>
			{children}
		</StyledTitle>
	);
};

export const StyledTitle = styled(Typography)`
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
		/* background-color: #a7a7a71c; */
		background-color: #10cbd140;
	}
	&::before {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 20%;
		height: 12px;
		background-color: #d11710;
		border-radius: 2px;
		clip-path: polygon(5% 0, 100% 0%, 95% 100%, 0% 100%);
		z-index: 1;
	}
`;

export default Title;
