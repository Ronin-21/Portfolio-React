import { CssBaseline, ThemeProvider } from '@mui/material';
import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { theme } from './Theme/theme';
import './index.css';
import { Spinner } from './components/Common/Spinner';

const LazyApp = lazy(() => import('./App'));

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Suspense fallback={<Spinner />}>
				<LazyApp />
			</Suspense>
		</ThemeProvider>
	</React.StrictMode>
);
