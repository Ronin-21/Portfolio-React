import {
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Grid,
	IconButton,
	Typography,
} from '@mui/material';
import TagsContainer from '../TagsContainer/TagsContainer';
import { useState } from 'react';
import ProjectModal from '../ProjectModal/ProjectModal';

const ProjectCard = ({ title, description, imageUrl, tags, links }) => {
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(!open);
	};

	return (
		<>
			<Grid item>
				<Card
					sx={{
						display: 'flex',
						p: 3,
					}}
					elevation={6}>
					<div>
						<CardContent>
							<Typography
								variant='subtitle1'
								component='h4'
								color='secondary'
								sx={{ mb: 2 }}>
								{title}
							</Typography>
							<Typography color='text.secondary' paragraph>
								{description}
							</Typography>
						</CardContent>
						<CardActions>
							<div>
								{links.map((linkItem) => (
									<IconButton
										href={linkItem.href}
										key={linkItem.href}
										color='inherit'
										target='_blank'>
										<linkItem.icon />
									</IconButton>
								))}
							</div>
							<TagsContainer tags={tags} />
						</CardActions>
					</div>
					<CardMedia
						onClick={handleOpen}
						image={imageUrl}
						component='img'
						sx={{
							width: '40%',
							aspectRatio: '16/9',
							objectFit: 'contain',
							cursor: 'pointer',
						}}></CardMedia>
				</Card>
			</Grid>
			<ProjectModal
				open={open}
				handleOpen={handleOpen}
				image={imageUrl}
				title={title}
			/>
		</>
	);
};

export default ProjectCard;
