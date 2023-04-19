import { Box, CircularProgress, styled } from '@mui/material';

const Spinner = () => {
	return (
		<StyledBox>
			<CircularProgress size={100} />
		</StyledBox>
	);
};

export default Spinner;

const StyledBox = styled(Box)`
	position: absolute;
	height: 100%;
	width: 100%;
	display: grid;
	place-items: center;
	z-index: 999;
	background-color: rgba(0, 0, 0, 0.4);
`;
