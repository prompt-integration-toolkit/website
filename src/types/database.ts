export interface Profile {
  id: string;
  username: string;
  display_name: string;
  created_at: string;
}

export interface Prompt {
  id: string;
  owner_id: string;
  username: string;
  name: string;
  title: string;
  description: string;
  visibility: string;
  created_at: string;
  updated_at: string;
  current_content: string;
  current_version: string;
  tags: string[];
  status: string;
  deleted_at: string | null;
  
  // Optional Relationships
  profile?: Profile;
  prompt_versions?: PromptVersion[];
}

export interface PromptVersion {
  id: string;
  prompt_id: string;
  version: string;
  base_version: string | null;
  change_type: string;
  diff: string | null;
  snapshot_content: string;
  message: string;
  created_at: string;
  status: string;
  deleted_at: string | null;
}
