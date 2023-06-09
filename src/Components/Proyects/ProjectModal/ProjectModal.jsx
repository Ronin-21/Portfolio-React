import { Dialog, Typography, styled } from '@mui/material';
import { theme } from '../../../Theme/theme';
import { MyButton } from '../../Common/MyButton';

function ProjectModal({ open, handleOpen, image, title, links }) {
	return (
		<StyledProjectModal open={open} onClose={handleOpen} maxWidth={false}>
			<Typography
				variant='subtitle1'
				component='h5'
				align='center'
				fontWeight='bold'>
				{title}
			</Typography>
			<img src={image} alt='' />
			<div className='links-container'>
				{links.map((linkItem) => (
					<MyButton
						href={linkItem.href}
						key={linkItem.title}
						target='_blank'
						variant='contained'
						sx={{ minWidth: '130px' }}>
						{linkItem.title}
					</MyButton>
				))}
			</div>
		</StyledProjectModal>
	);
}

const StyledProjectModal = styled(Dialog)`
	z-index: 9999;

	.MuiDialog-paper {
		max-width: 1000px;
		padding: clamp(1rem, 0.5rem, 2rem);
		color: ${theme.palette.background.paper};
		background-color: ${theme.palette.text.primary};
	}

	& .links-container {
		position: absolute;
		left: 50%;
		bottom: 1rem;
		transform: translateX(-50%);
		display: flex;
		gap: 1rem;
	}
`;

export default ProjectModal;
