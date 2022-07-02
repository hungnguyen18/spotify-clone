import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import pageRoutes from './routes';

function App() {
    return (
        <Router>
            <div className="App">
                <Sidebar />

                <Routes>
                    {pageRoutes.map((route, index) => {
                        const Page = route.component;

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={<Page />}
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
