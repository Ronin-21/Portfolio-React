import {
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Chip,
	Container,
	Grid,
	IconButton,
	Stack,
	Typography,
} from '@mui/material';
import { PROYECTS_DATA } from '../../Constants/proyects';
import Title from '../Common/Title/Title';

const TagsContainer = ({ tags }) => {
	return (
		<Stack direction='row' spacing={1}>
			{tags.map((tag) => (
				<Chip label={tag} variant='outlined' key={tag} color='primary'></Chip>
			))}
		</Stack>
	);
};

const Project = ({ title, description, imageUrl, tags, links }) => {
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
						<Typography variant='subtitle2' color='secondary' sx={{ mb: 2 }}>
							{title}
						</Typography>
						<Typography paragraph color='text.secondary'>
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

const Proyects = () => {
	return (
		<Container sx={{ pt: 12, pb: 12 }} id='proyectos'>
			<Title>Proyectos</Title>
			<Grid container direction='column' spacing={6}>
				{PROYECTS_DATA.map((data) => (
					<Project {...data} key={data.title} />
				))}
			</Grid>
		</Container>
	);
};

export default Proyects;
