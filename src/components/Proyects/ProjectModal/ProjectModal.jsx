import { Dialog, DialogTitle, Typography, styled } from '@mui/material';

function ProjectModal({ open, handleOpen, image, title }) {
	return (
		<StyledProjectModal open={open} onClose={handleOpen} maxWidth={false}>
			<Typography variant='subtitle1' component='h5' align='center'>
				{title}
			</Typography>
			<img src={image} alt='' />
		</StyledProjectModal>
	);
}

const StyledProjectModal = styled(Dialog)`
	z-index: 9999;

	.MuiDialog-paper {
		max-width: 1000px;
		padding: 2rem;
		color: #3a3a3a;
		background-color: #fbfbfb;
	}
`;

export default ProjectModal;
