import { Outlet, Link, useLocation } from 'react-router-dom';
import { Compass, BookOpen, GitBranch } from 'lucide-react';
import pitLogo from '../assets/pit-logo.png';
import './Layout.css';

export function Layout() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="layout">
      <header className="header">
        <div className="container flex justify-between items-center header-content">
          <Link to="/" className="logo">
            <img src={pitLogo} alt="Prompt-It Logo" className="logo-img" />
            <span className="logo-text">Prompt Integration Toolkit</span>
          </Link>
          <nav className="nav-links flex gap-8">
            <Link to="/explore" className="nav-link">
              <Compass size={16} />
              Explore
            </Link>
            <Link to="/docs" className="nav-link">
              <BookOpen size={16} />
              Documentation
            </Link>
            <a href="https://github.com/prompt-integration-toolkit" target="_blank" rel="noreferrer" className="nav-link">
              <GitBranch size={16} />
              GitHub
            </a>
          </nav>
        </div>
      </header>

      <main className={`main-content ${isHome ? 'is-home' : ''}`}>
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Prompt-Integration-Toolkit. Open source ecosystem.</p>
        </div>
      </footer>
    </div>
  );
}
