import {
	AppBar,
	IconButton,
	Toolbar,
	Typography,
	Drawer,
	Container,
	Stack,
	Link,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const navLinks = [
	{ title: 'Inicio', path: '#' },
	{ title: 'Sobre mi', path: '#sobre-mi' },
	{ title: 'Habilidades', path: '#habilidades' },
	{ title: 'Proyectos', path: '#proyectos' },
	{ title: 'Contacto', path: '#contacto' },
];

const Navbar = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<AppBar
				component='nav'
				sx={{ zIndex: 9999, bgcolor: 'transparent', backdropFilter: 'blur(5px)' }}>
				<Container maxWidth='xl'>
					<Toolbar disableGutters>
						<Typography variant='logo' sx={{ flex: 1 }}>
							Ronin <span style={{ color: '#d11710' }}>Web</span>Design)
						</Typography>
						<Stack
							direction='row'
							justifyContent='center'
							alignItems='center'
							spacing={3}
							sx={{ display: { xs: 'none', sm: 'flex' } }}>
							{navLinks.map((item) => (
								<Link
									key={item.title}
									href={item.path}
									color='inherit'
									underline='none'>
									{item.title}
								</Link>
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
