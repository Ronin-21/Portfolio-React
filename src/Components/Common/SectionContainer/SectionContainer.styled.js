import { Container, styled } from '@mui/material';
import { theme } from '../../../Theme/theme';

const SectionContainer = styled(Container)`
	padding-top: ${theme.spacing(15)};
	padding-bottom: ${theme.spacing(18)};
	max-width: ${theme.breakpoints.down('md') ? '90%' : '1200px'};

	@media (max-width: 600px) {
		padding-top: ${theme.spacing(10)};
		padding-bottom: ${theme.spacing(12)};
	}
`;

export default SectionContainer;
