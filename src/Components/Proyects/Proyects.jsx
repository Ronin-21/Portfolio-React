import { Grid } from '@mui/material';
import { PROYECTS_DATA } from '../../Constants/proyects';
import ProjectCard from './ProjectCard/ProjectCard';
import { SectionContainer } from '../Common/SectionContainer';
import { Title } from '../Common/Title';

const Projects = () => {
	return (
		<SectionContainer id='proyectos'>
			<Title>Proyectos</Title>
			<Grid container direction='column' spacing={6}>
				{PROYECTS_DATA.map((data) => (
					<ProjectCard {...data} key={data.title} />
				))}
			</Grid>
		</SectionContainer>
	);
};

export default Projects;
