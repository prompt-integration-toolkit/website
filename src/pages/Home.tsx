import { Link } from 'react-router-dom';
import { Zap, GitBranch, Globe, BookOpen, Code } from 'lucide-react';
import './Home.css';

export function Home() {
  return (
    <div className="home fade-in">
      <div className="bg-glow top-glow"></div>
      <div className="bg-glow bottom-glow"></div>
      
      <section className="hero container">
        <div className="hero-badge">Introducing v1.0.0</div>
        <h1 className="hero-title">
          The "NPM" for <br />
          <span className="gradient-text">Artificial Intelligence Prompts</span>
        </h1>
        <p className="hero-subtitle">
          Manage, version, and inject contexts into your AI agents with a single command. 
          The ultimate ecosystem to organize your workflow.
        </p>
        <div className="hero-actions flex justify-center gap-4">
          <Link to="/docs" className="btn btn-primary">
            <BookOpen size={18} />
            Read the Documentation
          </Link>
          <a href="https://github.com/prompt-integration-toolkit/prompt-it-cli" target="_blank" rel="noreferrer" className="btn btn-secondary">
            <Code size={18} />
            View CLI on GitHub
          </a>
        </div>
      </section>

      <section className="features container">
        <div className="feature-card">
          <div className="feature-icon">
            <Zap size={28} />
          </div>
          <h3>Fast Injection</h3>
          <p>Apply complex rules to your agents with simple commands like <code>prompt-it get frontend-rules</code>.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">
            <GitBranch size={28} />
          </div>
          <h3>Versioning</h3>
          <p>Keep a history of all your prompts and revert to previous versions instantly.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">
            <Globe size={28} />
          </div>
          <h3>Sharing</h3>
          <p>Synchronize your prompts in the cloud and share the same context with your entire team.</p>
        </div>
      </section>
    </div>
  );
}
