import MenuIcon from '@mui/icons-material/Menu';
import {
	AppBar,
	Container,
	Drawer,
	IconButton,
	Link,
	Stack,
	Toolbar,
	Typography,
	styled,
} from '@mui/material';
import { useState } from 'react';
import { navLinks } from '../../../Constants/navlinks';
import { theme } from '../../../Theme/theme';
import StyledSpan from '../../Common/StyledSpan/StyledSpan.styled';
import { Link as scrollLink } from 'react-scroll';

const Navbar = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<AppBar
				component='nav'
				sx={{ zIndex: 9999, bgcolor: 'transparent', backdropFilter: 'blur(5px)' }}>
				<Container maxWidth='xl'>
					<Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
						<Typography variant='logo'>
							Ronin <StyledSpan>Web</StyledSpan>Design)
						</Typography>
						<Stack
							direction='row'
							justifyContent='center'
							alignItems='center'
							spacing={3}
							sx={{ display: { xs: 'none', md: 'flex' } }}>
							{navLinks.map((item) => (
								<StyledLink
									key={item.title}
									to={item.path}
									spy={true}
									smooth={true}
									duration={50}>
									{item.title}
								</StyledLink>
							))}
						</Stack>
						<IconButton
							color='inherit'
							aria-label='menu'
							size='large'
							onClick={() => setOpen(!open)}
							sx={{ display: { xs: 'flex', md: 'none' } }}>
							<MenuIcon fontSize='large' />
						</IconButton>
					</Toolbar>
				</Container>
			</AppBar>
			<Drawer
				anchor='right'
				open={open}
				onClose={() => setOpen(false)}
				sx={{ display: { xs: 'flex', md: 'none' } }}>
				<Stack
					justifyContent='center'
					alignItems='center'
					spacing={5}
					sx={{ height: '100%', width: '100vw' }}>
					{navLinks.map((item) => (
						<StyledLink
							key={item.title}
							to={item.path}
							spy={true}
							smooth={true}
							duration={50}
							onClick={() => setOpen(!open)}>
							{item.title}
						</StyledLink>
					))}
				</Stack>
			</Drawer>
		</>
	);
};

export default Navbar;

const StyledLink = styled(scrollLink)`
	position: relative;
	cursor: pointer;
	transition: all 0.2s ease-in;

	&::before {
		content: '';
		position: absolute;
		bottom: -5px;
		left: 0;
		width: 0;
		height: 3px;
		background-color: ${theme.palette.secondary.main};
		transition: width 0.5s ease;
	}

	&:hover {
		color: ${theme.palette.secondary.dark};
		font-size: 1.3rem;
		font-weight: 700;
	}

	&.active {
		color: ${theme.palette.secondary.main};
		font-size: 1.3rem;
		font-weight: 700;

		&::before {
			width: 100%;
		}
	}
`;
