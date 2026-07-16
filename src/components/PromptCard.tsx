import { Link } from 'react-router-dom';
import { Box, User, Tag } from 'lucide-react';
import type { Prompt } from '../types/database';
import './PromptCard.css';

interface PromptCardProps {
  prompt: Prompt;
}

export function PromptCard({ prompt }: PromptCardProps) {
  const username = prompt.username || 'unknown';
  const tagList = Array.isArray(prompt.tags) ? prompt.tags : [];

  const latestVersion = prompt.current_version || 'v1.0.0';

  return (
    <Link to={`/prompt/${username}/${prompt.name}`} className="prompt-card">
      <div className="prompt-card-header">
        <h4 className="prompt-title">
          <Box className="icon" size={18} />
          {prompt.title || prompt.name}
        </h4>
        <span className="prompt-version">{latestVersion}</span>
      </div>

      <p className="prompt-desc">
        {prompt.description || 'No description provided.'}
      </p>

      <div className="prompt-tags">
        {tagList.map(tag => (
          <span key={tag} className="tag-badge">
            <Tag size={12} className="tag-icon" />
            {tag}
          </span>
        ))}
      </div>

      <div className="prompt-footer">
        <div className="prompt-author">
          <User size={14} />
          <span>@{username}</span>
        </div>
      </div>
    </Link>
  );
}
