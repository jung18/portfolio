import { ProfileProvider } from "./contexts/ProfileContext";
import Header from "./sections/header/Header";
import Profile from "./sections/profile/Profile";
import TechStack from "./sections/tech-stack/TechStack";
import Projects from "./sections/projects/Projects";
import Footer from "./sections/footer/Footer";
import Career from "./sections/career/Career";

export default function App() {
  return (
    <ProfileProvider>
      <div className="app">
        <Header />
        <main>
          <Profile />
          <TechStack />
          <Projects />
          <Career />
        </main>
        <Footer />
      </div>
    </ProfileProvider>
  );
}
