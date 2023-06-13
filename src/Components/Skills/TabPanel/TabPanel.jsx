import { Box, styled } from '@mui/material';
import { theme } from '../../../Theme/theme';

const TabPanel = ({ children, value, index }) => {
	return <>{value === index && <StyledPanel>{children}</StyledPanel>}</>;
};

export default TabPanel;

const StyledPanel = styled(Box)`
	min-height: 550px;
	padding: ${theme.spacing(3)};
	background-color: ${theme.palette.background.light};

	@media (max-width: 600px) {
		padding: ${theme.spacing(2)};
	}
`;
