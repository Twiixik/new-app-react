import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import ContactPage from "./pages/ContactPage";

function App() {
    return (
        <>
            <Nav />
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/create" element={<CreatePage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </main>
        </>
    );
}

export default App;
