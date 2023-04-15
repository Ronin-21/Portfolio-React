import { Box, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import { TECH_SKILLS } from '../../Constants/skills';
import SectionContainer from '../Common/SectionContainer/SectionContainer.styled';
import Title from '../Common/Title/Title';
import TabContent from './TabContent/TabContent';
import TabPanel from './TabPanel/TabPanel';

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
					<Tab label='Tecnologías'></Tab>
					<Tab label='Habilidades Blandas'></Tab>
					<Tab label='Hobbies'></Tab>
				</Tabs>
				<TabPanel value={value} index={0}>
					<TabContent data={TECH_SKILLS} />
				</TabPanel>
				<TabPanel value={value} index={1}>
					Item Two
				</TabPanel>
				<TabPanel value={value} index={2}>
					Item Three
				</TabPanel>
			</SectionContainer>
		</Box>
	);
};

export default Skills;
