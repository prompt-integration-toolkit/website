import { useState, useEffect } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { SearchBar } from '../components/SearchBar';
import { PromptCard } from '../components/PromptCard';
import { supabase } from '../lib/supabase';
import type { Prompt } from '../types/database';
import './Explore.css';

export function Explore() {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);
    return () => clearTimeout(timer);
  }, [query]);

  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['prompts', debouncedQuery],
    queryFn: async ({ pageParam = 0 }) => {
      let q = supabase
        .from('prompts')
        // OPTIMIZATION: Only select columns needed for the card, avoiding heavy text content
        .select('id, name, title, description, username, tags, created_at, updated_at, current_version')
        .eq('visibility', 'public')
        .is('deleted_at', null)
        .order('created_at', { ascending: false })
        // OPTIMIZATION: Limit to 15 per page to save resources
        .range(pageParam * 15, (pageParam + 1) * 15 - 1);

      if (debouncedQuery) {
        if (debouncedQuery.startsWith('@')) {
          const username = debouncedQuery.substring(1);
          q = q.ilike('username', `%${username}%`);
        } else {
          q = q.or(`name.ilike.%${debouncedQuery}%,title.ilike.%${debouncedQuery}%,description.ilike.%${debouncedQuery}%`);
        }
      }

      const { data: sbData, error: sbError } = await q;

      if (sbError) {
        throw new Error(sbError.message);
      }

      return sbData as unknown as Prompt[];
    },
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length === 15 ? allPages.length : undefined;
    },
    initialPageParam: 0,
  });

  const prompts = data ? data.pages.flat() : [];

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
          <pre>{error.message}</pre>
        </div>
      )}

      {isLoading ? (
        <div className="loading-state">
          <div className="spinner"></div>
          <p>Loading prompts...</p>
        </div>
      ) : (
        <div className="prompts-grid-container">
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
          
          {hasNextPage && (
            <div className="load-more-container" style={{ textAlign: 'center', marginTop: '2rem' }}>
              <button 
                className="btn-primary" 
                onClick={() => fetchNextPage()}
                disabled={isFetchingNextPage}
              >
                {isFetchingNextPage ? 'Loading...' : 'Load More'}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
