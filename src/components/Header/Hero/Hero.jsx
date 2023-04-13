import { Box, Button, Stack, Typography, styled } from '@mui/material';
import bannerImg from '../../../assets/Banner.jpg';

const StyledHero = styled(Box)`
	background-size: cover;
	background-image: url(${bannerImg});
	background-position: center;
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Hero = () => {
	return (
		<StyledHero>
			<Box
				sx={{
					position: 'absolute',
					height: '100%',
					width: '100%',
					zIndex: 2,
					bgcolor: 'rgba(0,0,0,0.4)',
				}}
			/>
			<Stack zIndex={999} alignItems='center'>
				<Typography variant='subtitle2'>Hola soy</Typography>
				<Typography
					variant='subtitle1'
					component='h1'
					sx={{ textShadow: '0 0 15px #000000' }}>
					Abel <span style={{ color: '#d11710' }}>Acuña</span>
				</Typography>
				<Typography variant='subtitle2'>Frontend Developer</Typography>
				<Button variant='contained' size='large' sx={{ mt: 3 }} href='#contacto'>
					Contáctame
				</Button>
			</Stack>
		</StyledHero>
	);
};

export default Hero;
