import { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Compass, BookOpen, GitBranch, Menu, X } from 'lucide-react';
import './Layout.css';

export function Layout() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="layout">
      <header className="header">
        <div className="container flex justify-between items-center header-content">
          <Link to="/" className="logo" onClick={closeMenu}>
            <span className="logo-text">Prompt Integration Toolkit</span>
          </Link>
          
          <button className="mobile-menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav className={`nav-links flex gap-8 ${isMenuOpen ? 'mobile-open' : ''}`}>
            <Link to="/explore" className="nav-link" onClick={closeMenu}>
              <Compass size={16} />
              Explore
            </Link>
            <Link to="/docs" className="nav-link" onClick={closeMenu}>
              <BookOpen size={16} />
              Documentation
            </Link>
            <a href="https://github.com/prompt-integration-toolkit" target="_blank" rel="noreferrer" className="nav-link" onClick={closeMenu}>
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
