import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProfileProvider } from "./contexts/ProfileContext";
import Header from "./sections/header/Header";
import Profile from "./sections/profile/Profile";
import TechStack from "./sections/tech-stack/TechStack";
import Projects from "./sections/projects/Projects";
import ProjectDetail from "./sections/project-detail/ProjectDetail";
import Footer from "./sections/footer/Footer";
import Career from "./sections/career/Career";

function HomePage() {
  return (
    <>
      <Profile />
      <TechStack />
      <Projects />
      <Career />
    </>
  );
}

export default function App() {
  return (
    <ProfileProvider>
      <BrowserRouter>
        <div className="app">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/project/:id" element={<ProjectDetail />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ProfileProvider>
  );
}
