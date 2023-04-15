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

const ProjectCard = ({ title, description, imageUrl, tags, links }) => {
	return (
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
					image={imageUrl}
					component='img'
					sx={{
						width: '40%',
						aspectRatio: '16/9',
						objectFit: 'contain',
					}}></CardMedia>
			</Card>
		</Grid>
	);
};

export default ProjectCard;
