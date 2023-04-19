import { Box, Stack, Typography, styled } from '@mui/material';
import bannerImg from '../../../Assets/Banner.jpg';
import { MyButton } from '../../Common/MyButton';
import StyledSpan from '../../Common/StyledSpan/StyledSpan.styled';
import { Zoom, Fade, Slide } from 'react-awesome-reveal';

const Hero = () => {
	return (
		<StyledHero id='hero'>
			<Stack zIndex={999} alignItems='center'>
				<Slide direction='down'>
					<Typography variant='subtitle1' component='h3'>
						Hola soy
					</Typography>
					<Typography
						variant='hero_title'
						component='h1'
						sx={{ textShadow: '0 0 15px #000000' }}>
						Abel <StyledSpan>Acuña</StyledSpan>
					</Typography>
					<Typography variant='subtitle1' component='h3'>
						Frontend Developer
					</Typography>
				</Slide>
				<MyButton variant='contained' href='#contacto' sx={{ mt: 3 }}>
					Contáctame
				</MyButton>
			</Stack>
		</StyledHero>
	);
};

export default Hero;

const StyledHero = styled(Box)`
	position: relative;
	background-size: cover;
	background-image: url(${bannerImg});
	background-position: center;
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;

	&::before {
		content: '';
		position: absolute;
		height: 100%;
		width: 100%;
		z-index: 2;
		background-color: rgba(0, 0, 0, 0.4);
	}
`;
