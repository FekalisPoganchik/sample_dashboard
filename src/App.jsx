import "./style/main.scss";
import AuthorizationPage from "./Pages/AuthorizationPage/AuthorizationPage";
import MainPage from "./Pages/MainPage/MainPage";
import { Routes, Route } from "react-router";
import Layout from "./component/Layout/Layout";
import Development from "./Pages/Development/Development";

function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/auth" element={<AuthorizationPage />} />

                <Route path="/" element={<Layout />}>
                    <Route index element={<MainPage />} />
                    <Route path="kpi" element={<Development />} />
                    <Route path="progress_tyuiu" element={<Development />} />
                    <Route
                        path="educational_activities"
                        element={<Development />}
                    />
                    <Route
                        path="scientific_activity"
                        element={<Development />}
                    />
                    <Route path="economic_activity" element={<Development />} />
                    <Route
                        path="complex_management"
                        element={<Development />}
                    />
                    <Route
                        path="personal_management"
                        element={<Development />}
                    />
                    <Route path="document" element={<Development />} />
                    <Route path="settings" element={<Development />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
