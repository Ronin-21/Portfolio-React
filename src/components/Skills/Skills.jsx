import { useState } from 'react';
import {
	Box,
	Container,
	Paper,
	Stack,
	Tab,
	Tabs,
	Typography,
	styled,
} from '@mui/material';
import { TECH_SKILLS } from '../../Constants/skills';
import Title from '../Common/Title/Title';
import SectionContainer from '../Common/SectionContainer/SectionContainer.styled';

const TabPanel = ({ children, value, index }) => {
	return (
		<>
			{value === index && (
				<Box sx={{ p: 3, bgcolor: '#222', minHeight: '550px' }}>{children}</Box>
			)}
		</>
	);
};

const StyledSvg = styled(Paper)`
	height: 230px;
	width: 170px;
	padding: 0.7em;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	transition: all 0.2s ease-in;

	& img {
		aspect-ratio: 1/1;
		width: 100%;
		object-fit: contain;
		/* filter: grayscale(100); */
		transition: all 0.2s ease-in;
	}
	&:hover {
		transform: scale(1.05);
		& img {
			filter: grayscale(0);
		}
	}
`;

const Skills = () => {
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Paper id='habilidades'>
			<SectionContainer>
				<Title>Habilidades</Title>
				<Tabs value={value} onChange={handleChange}>
					<Tab label='Tecnologías'></Tab>
					<Tab label='Habilidades Blandas'></Tab>
					<Tab label='Hobbies'></Tab>
				</Tabs>
				<TabPanel value={value} index={0}>
					<Stack
						direction='row'
						flexWrap='wrap'
						gap={2}
						alignItems='center'
						justifyContent='center'>
						{TECH_SKILLS.map((item, index) => {
							return (
								<StyledSvg key={index} elevation={3}>
									<img src={item.img} alt={item.alt} />
									<Typography align='center'>{item.description}</Typography>
								</StyledSvg>
							);
						})}
					</Stack>
				</TabPanel>
				<TabPanel value={value} index={1}>
					Item Two
				</TabPanel>
				<TabPanel value={value} index={2}>
					Item Three
				</TabPanel>
			</SectionContainer>
		</Paper>
	);
};

export default Skills;
