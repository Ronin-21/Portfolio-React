import {
	Box,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Grid,
	IconButton,
	Typography,
	styled,
} from '@mui/material';
import TagsContainer from '../TagsContainer/TagsContainer';
import { useState } from 'react';
import ProjectModal from '../ProjectModal/ProjectModal';
import { Fade, Slide } from 'react-awesome-reveal';

const ProjectCard = ({
	title,
	description,
	imageUrl,
	tags,
	links,
	direction,
}) => {
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(!open);
	};

	return (
		<>
			<Grid item>
				<Fade direction={direction} delay={100} duration={1500} triggerOnce>
					<Card
						sx={{
							display: 'flex',
							flexDirection: { xs: 'column', md: 'row' },
							p: 3,
						}}
						elevation={6}>
						<Box>
							<CardContent>
								<Typography
									variant='subtitle1'
									component='h4'
									color='secondary'
									sx={{ mb: 2, textAlign: { xs: 'center', md: 'start' } }}>
									{title}
								</Typography>
								<Typography color='text.secondary' paragraph>
									{description}
								</Typography>
							</CardContent>
							<CardActions
								sx={{
									flexWrap: 'wrap',
									justifyContent: { xs: 'center', md: 'start' },
									gap: '10px',
								}}>
								<div>
									{links.map((linkItem) => (
										<StyledIcon
											href={linkItem.href}
											key={linkItem.href}
											color='inherit'
											target='_blank'>
											<linkItem.icon />
										</StyledIcon>
									))}
								</div>
								<TagsContainer tags={tags} />
							</CardActions>
						</Box>
						<CardMedia
							onClick={handleOpen}
							image={imageUrl}
							component='img'
							alt={title}
							sx={{
								width: { xs: '100%', md: '40%' },
								aspectRatio: '16/9',
								objectFit: 'contain',
								cursor: 'pointer',
							}}></CardMedia>
					</Card>
				</Fade>
			</Grid>
			<ProjectModal
				open={open}
				handleOpen={handleOpen}
				image={imageUrl}
				title={title}
				links={links}
			/>
		</>
	);
};

export default ProjectCard;

const StyledIcon = styled(IconButton)`
	& svg {
		font-size: 2.3rem;
	}
`;
