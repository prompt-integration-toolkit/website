import { useState, useEffect } from 'react';
import { SearchBar } from '../components/SearchBar';
import { PromptCard } from '../components/PromptCard';
import { supabase } from '../lib/supabase';
import type { Prompt } from '../types/database';
import './Explore.css';

export function Explore() {
  const [query, setQuery] = useState('');
  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPrompts();
  }, []);

  const fetchPrompts = async (searchQuery = '') => {
    setLoading(true);
    setError(null);
    try {
      let q = supabase
        .from('prompts')
        .select('*')
        .eq('visibility', 'public') // Assumption based on standard schemas, or we can just fetch all if visibility doesn't exist/matter
        .is('deleted_at', null)
        .order('created_at', { ascending: false });

      if (searchQuery) {
        if (searchQuery.startsWith('@')) {
          const username = searchQuery.substring(1);
          q = q.ilike('username', `%${username}%`);
        } else {
          q = q.or(`name.ilike.%${searchQuery}%,title.ilike.%${searchQuery}%,description.ilike.%${searchQuery}%`);
        }
      }

      const { data, error: sbError } = await q;

      if (sbError) {
        throw sbError;
      }

      // Sort versions manually if needed, or rely on db
      setPrompts((data as unknown as Prompt[]) || []);
    } catch (err: any) {
      console.error('Error fetching prompts:', err);
      setError(err.message || 'Failed to load prompts.');
    } finally {
      setLoading(false);
    }
  };

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchPrompts(query);
    }, 500);
    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="explore-page container fade-in">
      <div className="explore-header">
        <h1 className="explore-title">Explore Prompts</h1>
        <p className="explore-subtitle">Discover, share, and integrate AI contexts from the community.</p>
        <SearchBar value={query} onChange={setQuery} />
      </div>

      {error && (
        <div className="error-box">
          <p>We encountered an issue connecting to the database. Make sure your environment variables are configured.</p>
          <pre>{error}</pre>
        </div>
      )}

      {loading ? (
        <div className="loading-state">
          <div className="spinner"></div>
          <p>Loading prompts...</p>
        </div>
      ) : (
        <div className="prompts-grid">
          {prompts.length > 0 ? (
            prompts.map(prompt => (
              <PromptCard key={prompt.id} prompt={prompt} />
            ))
          ) : (
            <div className="empty-state">
              <p>No prompts found matching your criteria.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
