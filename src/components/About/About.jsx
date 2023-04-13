import {
	Button,
	Container,
	Grid,
	Stack,
	Typography,
	styled,
} from '@mui/material';
import profileImg from '../../assets/Perfil.webp';
import Title from '../Common/Title/Title';

const GridImg = styled(Grid)`
	position: relative;
	& img {
		width: 100%;
		border-radius: 5px;
		box-shadow: 0 0 15px 5px #000000c5;
	}
	&::before {
		content: '';
		position: absolute;
		bottom: 0;
		left: 25px;
		height: 90%;
		width: 90%;
		background-color: #10cad1;
		box-shadow: 0 0 20px 10px #10cbd148;
		border-radius: 3px;
		z-index: -1;
	}
`;

const About = () => {
	return (
		<Container sx={{ pt: 12, pb: 12 }} id='sobre-mi'>
			<Title>Sobre mi</Title>
			<Grid container spacing={5}>
				<GridImg item lg={5}>
					<img src={profileImg} alt='perfil' />
				</GridImg>
				<Grid item lg={7}>
					<Stack height='100%' alignItems='center' justifyContent='space-around'>
						<Typography variant='subtitle2' fontWeight='bold' align='center'>
							Abel Alejandro Acuña
						</Typography>
						<Typography variant='h5' color='secondary'>
							Desarrollador Front-End
						</Typography>
						<Typography align='center' color='text.secondary' paragraph>
							Apasionado por la tecnología, autodidacta, comprometido y responsable.
							Hola! Mi nombre es Abel Acuña y soy de Argentina, desde pequeño fui un
							entusiasta aprendiz del mundo informático, siempre dispuesto a asimilar
							nuevas tecnologías y afrontar desafíos con determinación. Poseo
							conocimientos en manejo de tecnologías Front-End, actualmente
							profundizando en el uso de React JS con Next JS, y participando de
							proyectos grupales en la plataforma No-Country. Mi sueño es poder entrar
							en el Mercado IT y poder desarrollar todo mi potencial
						</Typography>
						<Button variant='outlined' size='large' sx={{ color: '#fbfbfb' }}>
							Descargar CV
						</Button>
					</Stack>
				</Grid>
			</Grid>
		</Container>
	);
};

export default About;
