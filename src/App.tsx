import { IntlProvider } from 'react-intl';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import en from './context/Locale/en';
import NotFound from './page/NotFound';
import Home from './page/Home';

const App = (): JSX.Element => {
    const locale = navigator.language;
    return (
            <IntlProvider locale={locale} defaultLocale="en" messages={en}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/notfound" element={<NotFound />} />
                        <Route path="/*" element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </IntlProvider>
            );
};
export default App;