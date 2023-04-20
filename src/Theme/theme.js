import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
	palette: {
		primary: {
			main: '#d11710',
		},
		secondary: {
			main: '#10cad1',
			opacity: 'rgba(16, 203, 209, 0.3)',
		},
		background: {
			default: '#101010',
			paper: '#191919',
			light: '#222',
		},
		text: {
			primary: '#fbfbfb',
			secondary: '#a7a7a7',
		},
		divider: '#2e2e2e',
	},
	typography: {
		fontSize: 16,
		fontFamily: 'Poppins',
		logo: {
			fontFamily: 'Split On',
			fontSize: '3rem',
			'@media (max-width:600px)': {
				fontSize: '1.5rem',
			},
		},
		title: {
			fontFamily: 'Josefin Sans',
			fontSize: '5rem',
			fontWeight: 700,
			'@media (max-width:600px)': {
				fontSize: '3rem',
			},
		},
		hero_title: {
			fontFamily: 'Josefin Sans',
			fontSize: '8rem',
			fontWeight: 700,
			'@media (max-width:600px)': {
				fontSize: '4rem',
			},
		},
		subtitle1: {
			fontFamily: 'Rubik',
			fontSize: '3rem',
			fontWeight: 500,
			'@media (max-width:600px)': {
				fontSize: '2rem',
			},
		},
		body1: {
			fontSize: '1.2rem',
			'@media (max-width:600px)': {
				fontSize: '0.9rem',
			},
		},
		h5: {
			'@media (max-width:600px)': {
				fontSize: '1.5rem',
			},
		},
	},
});
