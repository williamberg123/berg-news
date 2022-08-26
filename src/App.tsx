import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import AppProvider from './contexts/AppProvider';
import { AuthProvider } from './contexts/AuthProvider';
import { AppRoutes } from './routes';
import GlobalStyles from './styles/globalStyles';
import { theme } from './styles/theme';

export default function App() {
	return (
		<AuthProvider>
			<AppProvider>
				<ThemeProvider theme={theme}>
					<GlobalStyles />
					<BrowserRouter>
						<AppRoutes />
					</BrowserRouter>
				</ThemeProvider>
			</AppProvider>
		</AuthProvider>
	);
}
