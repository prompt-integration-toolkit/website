import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import ReactMarkdown from 'react-markdown';
import { ChevronLeft, Clock, User, Tag as TagIcon, Activity } from 'lucide-react';
import { supabase } from '../lib/supabase';
import type { Prompt } from '../types/database';
import { CopyCommand } from '../components/CopyCommand';
import './PromptDetails.css';

export function PromptDetails() {
  const { username, promptName } = useParams<{ username: string; promptName: string }>();
  
  const { data: prompt, isLoading: loading, error } = useQuery({
    queryKey: ['prompt', username, promptName],
    queryFn: async () => {
      if (!username || !promptName) throw new Error('Missing parameters');
      
      const { data, error: fetchError } = await supabase
        .from('prompts')
        // We need all columns here because we need current_content to render the prompt text
        .select('*')
        .eq('username', username)
        .eq('name', promptName)
        .single();

      if (fetchError) throw fetchError;
      return data as unknown as Prompt;
    },
    enabled: !!username && !!promptName, // only run the query if params exist
  });

  if (loading) {
    return (
      <div className="prompt-details-page loading-state">
        <div className="spinner"></div>
        <p>Loading prompt...</p>
      </div>
    );
  }

  if (error || !prompt) {
    return (
      <div className="prompt-details-page error-state container">
        <h2>Oops!</h2>
        <p>{error instanceof Error ? error.message : 'Prompt not found.'}</p>
        <Link to="/explore" className="back-link">
          <ChevronLeft size={16} /> Back to Explore
        </Link>
      </div>
    );
  }

  const tags = Array.isArray(prompt.tags) ? prompt.tags : [];
  const command = `prompt-it get ${username}/${prompt.name}`;

  return (
    <div className="prompt-details-page container fade-in">
      <Link to="/explore" className="back-link">
        <ChevronLeft size={16} /> Back to Explore
      </Link>

      <div className="prompt-layout">
        <div className="prompt-main">
          <div className="prompt-header">
            <h1 className="prompt-title">{prompt.title || prompt.name}</h1>
            <p className="prompt-desc-large">{prompt.description}</p>
          </div>

          <div className="prompt-content-box markdown-body">
            <ReactMarkdown>
              {prompt.current_content || '*No content provided for this prompt.*'}
            </ReactMarkdown>
          </div>
        </div>

        <aside className="prompt-sidebar">
          <div className="sidebar-sticky">
            <div className="install-box">
              <h3>Get this prompt</h3>
              <CopyCommand command={command} />
            </div>

            <div className="metadata-box">
              <h3>Details</h3>
              
              <div className="meta-item">
                <User size={16} />
                <span>
                  Author: <strong>@{prompt.username}</strong>
                </span>
              </div>
              
              <div className="meta-item">
                <Activity size={16} />
                <span>
                  Version: <strong>{prompt.current_version || 'v1.0.0'}</strong>
                </span>
              </div>
              
              <div className="meta-item">
                <Clock size={16} />
                <span>
                  Updated: {new Date(prompt.updated_at || prompt.created_at).toLocaleDateString()}
                </span>
              </div>
            </div>

            {tags.length > 0 && (
              <div className="tags-box">
                <h3>Tags</h3>
                <div className="tags-list">
                  {tags.map(tag => (
                    <span key={tag} className="tag-badge">
                      <TagIcon size={12} className="tag-icon" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}
