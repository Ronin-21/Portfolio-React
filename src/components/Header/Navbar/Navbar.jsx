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

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const [active, setActive] = useState(0);

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
							sx={{ display: { xs: 'none', sm: 'flex' } }}>
							{navLinks.map((item, index) => (
								<StyledLink
									key={item.title}
									href={item.path}
									color='inherit'
									underline='none'
									onClick={() => setActive(index)}
									className={`${active == index && 'active'}`}>
									{item.title}
								</StyledLink>
							))}
						</Stack>
						<IconButton
							color='inherit'
							aria-label='menu'
							size='large'
							onClick={() => setOpen(!open)}
							sx={{ display: { xs: 'flex', sm: 'none' } }}>
							<MenuIcon fontSize='large' />
						</IconButton>
					</Toolbar>
				</Container>
			</AppBar>
			<Drawer
				anchor='right'
				open={open}
				onClose={() => setOpen(false)}
				sx={{ display: { xs: 'flex', sm: 'none' } }}>
				<Stack
					justifyContent='center'
					alignItems='center'
					spacing={5}
					sx={{ height: '100%', width: '100vw' }}>
					{navLinks.map((item) => (
						<Link
							key={item.title}
							href={item.path}
							color='inherit'
							underline='none'
							onClick={() => setOpen(!open)}>
							{item.title}
						</Link>
					))}
				</Stack>
			</Drawer>
		</>
	);
};

export default Navbar;

const StyledLink = styled(Link)`
	position: relative;
	transition: all 0.2s ease-in;

	&:hover {
		color: ${theme.palette.secondary.dark};
		font-weight: 700;
	}

	&.active {
		color: ${theme.palette.secondary.main};
		font-weight: 700;

		&::before {
			content: '';
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 2px;
			background-color: ${theme.palette.secondary.main};
		}
	}
`;
