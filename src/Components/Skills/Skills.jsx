import { Box, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import { DESIGN, FRAMEWORKS, TECH_SKILLS } from '../../Constants/skills';
import TabContent from './TabContent/TabContent';
import TabPanel from './TabPanel/TabPanel';
import { SectionContainer } from '../Common/SectionContainer';
import { Title } from '../Common/Title';

const Skills = () => {
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ bgcolor: 'background.paper' }} id='habilidades'>
			<SectionContainer>
				<Title>Habilidades</Title>
				<Tabs value={value} onChange={handleChange}>
					<Tab label='Tecnologías Principales'></Tab>
					<Tab label='Tecnologías Complementarias'></Tab>
					<Tab label='Diseño Gráfico'></Tab>
				</Tabs>
				<TabPanel value={value} index={0}>
					<TabContent data={TECH_SKILLS} />
				</TabPanel>
				<TabPanel value={value} index={1}>
					<TabContent data={FRAMEWORKS} />
				</TabPanel>
				<TabPanel value={value} index={2}>
					<TabContent data={DESIGN} />
				</TabPanel>
			</SectionContainer>
		</Box>
	);
};

export default Skills;
