import { render } from 'react-dom';
import App from './app/App';

import './shared/config/i18n/i18n';
import { ErrorBoundary } from './app/providers/ErrorBoundary';

render(
    <App />,
    document.getElementById('root'),
);
