import { Grid } from '@mui/material';
import { PROYECTS_DATA } from '../../Constants/proyects';
import SectionContainer from '../Common/SectionContainer/SectionContainer.styled';
import Title from '../Common/Title/Title';
import ProjectCard from './ProjectCard/ProjectCard';

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
