import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
	palette: {
		primary: {
			main: '#d11710',
		},
		secondary: {
			main: '#10cad1',
			opacity: 'rgba(16, 203, 209, 0.5)',
		},
		background: {
			default: '#101010',
			paper: '#191919',
		},
		text: {
			primary: '#fbfbfb',
			secondary: '#a7a7a7',
			hint: '#101010',
		},
	},
	typography: {
		fontSize: 16,
		fontFamily: 'Poppins',
		logo: {
			fontFamily: 'Split On',
			fontSize: '3rem',
		},
		title: {
			fontFamily: 'Josefin Sans',
			fontSize: '5rem',
			fontWeight: 700,
		},
		subtitle1: {
			fontFamily: 'Josefin Sans',
			fontSize: '8rem',
			fontWeight: 700,
		},
		subtitle2: {
			fontFamily: 'Rubik',
			fontSize: '3rem',
			fontWeight: 500,
		},
		body1: {
			fontSize: '1.2rem',
		},
	},
});
