import { Terminal, Settings, FileText, Shield, UserCheck, ListChecks, Search, Cpu, HelpCircle } from 'lucide-react';
import './Docs.css';

export function Docs() {
  return (
    <div className="docs-layout container fade-in">
      <aside className="docs-sidebar">
        <div className="sidebar-sticky">
          <h3 className="sidebar-title">On this page</h3>
          <nav className="sidebar-nav">
            <a href="#getting-started" className="sidebar-link">
              <Terminal size={14} />
              Getting Started
            </a>
            <a href="#installation" className="sidebar-link">
              <Settings size={14} />
              Installation & OS Guide
            </a>
            <a href="#file-types" className="sidebar-link">
              <FileText size={14} />
              Supported File Types
            </a>
            <a href="#permissions" className="sidebar-link">
              <Shield size={14} />
              Permissions & Errors
            </a>
            <a href="#accounts" className="sidebar-link">
              <UserCheck size={14} />
              Accounts & Authentication
            </a>
            <a href="#management" className="sidebar-link">
              <ListChecks size={14} />
              Prompt Management
            </a>
            <a href="#search" className="sidebar-link">
              <Search size={14} />
              Search & Consumption
            </a>
            <a href="#agents" className="sidebar-link">
              <Cpu size={14} />
              Agent Integration
            </a>
            <a href="#workflow" className="sidebar-link">
              <HelpCircle size={14} />
              Recommended Workflow
            </a>
          </nav>
        </div>
      </aside>

      <div className="docs-content">
        <h1>Documentation</h1>
        <p className="lead">
          Welcome to the official documentation for the <strong>Prompt Integration Toolkit CLI</strong>. 
          Here you will find everything you need to know to use the CLI in your workflow.
        </p>

        <section id="getting-started" className="docs-section">
          <h2>Getting Started</h2>
          <p>
            The official command-line abbreviation for Prompt Integration Toolkit is <code>prompt-it</code>. 
            To view help for any command directly in the terminal, simply run:
          </p>
          <div className="code-block">
            <pre><code>prompt-it help</code></pre>
          </div>
        </section>

        <section id="installation" className="docs-section">
          <h2>Installation & OS Guide</h2>
          <p>Prompt Integration Toolkit CLI requires <strong>Node.js</strong> installed on your system.</p>
          
          <div className="command-card">
            <h4>Global Installation (All OS)</h4>
            <p>Run the following command in your terminal to install the CLI globally:</p>
            <div className="code-block" style={{ marginTop: '1rem', marginBottom: '0', padding: '0.75rem' }}>
              <pre><code>npm install -g prompt-it</code></pre>
            </div>
          </div>

          <h3 style={{ fontSize: '1.25rem', marginTop: '2.5rem', marginBottom: '1rem', fontWeight: 500 }}>Operating Systems</h3>
          <ul className="workflow-steps">
            <li><strong>Linux/Ubuntu:</strong> You may need <code>sudo</code> permissions to install global NPM packages depending on your Node.js setup (e.g., <code>sudo npm install -g prompt-it</code>). If you use NVM (Node Version Manager), <code>sudo</code> is not required.</li>
            <li><strong>macOS:</strong> Similar to Linux, you might need <code>sudo</code> if using the default system Node.js.</li>
            <li><strong>Windows:</strong> Open Command Prompt or PowerShell as Administrator to install global packages without permission errors.</li>
          </ul>
        </section>

        <section id="file-types" className="docs-section">
          <h2>Supported File Types</h2>
          <p>
            When publishing or updating prompts on the platform, the CLI enforces file type validation. 
            Only text-based files with approved extensions are allowed to prevent database corruption and ensure security.
          </p>
          <div className="command-card">
            <h4>Allowed File Extensions</h4>
            <p style={{ marginBottom: '1rem' }}>
              The CLI parses and validates files based on their extension. The only supported formats are:
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem' }}>
              {['.md', '.txt', '.yaml', '.yml', '.json', '.xml', '.docs', '.log'].map(ext => (
                <span key={ext} style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.05)', 
                  border: '1px solid var(--border-color)', 
                  borderRadius: '4px', 
                  padding: '0.25rem 0.6rem', 
                  fontSize: '0.85rem',
                  fontFamily: 'monospace',
                  color: 'var(--text-primary)'
                }}>
                  {ext}
                </span>
              ))}
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <strong>Restriction Rule:</strong> Any attempt to upload binaries, executables, or non-text formats (such as <code>.exe</code>, <code>.png</code>, <code>.jpg</code>, <code>.pdf</code>, <code>.zip</code>) will be immediately blocked by the CLI validator.
            </p>
          </div>
        </section>

        <section id="permissions" className="docs-section">
          <h2>Permissions & Troubleshooting</h2>
          <p>Here are common permission requirements and potential errors you might face:</p>

          <div className="command-card">
            <h4>Filesystem Permissions</h4>
            <p>When running commands like <code>prompt-it get --file</code> or <code>prompt-it init</code>, the CLI needs write access to the current directory. If you receive an <strong>EACCES</strong> error, ensure you have write permissions in the folder.</p>
          </div>

          <div className="command-card">
            <h4>Agent Integration Errors (EACCES / ENOENT)</h4>
            <p>The <code>prompt-it agent add</code> command modifies AI agent configuration files. If the agent's config folder is protected, you might see permission errors. On Linux/macOS, verify the ownership of <code>~/.claude</code> or similar directories.</p>
          </div>

          <div className="command-card">
            <h4>Authentication Issues (401 / 403)</h4>
            <p>If you get "Unauthorized" when running <code>prompt-it publish</code>, your session might have expired. Simply run <code>prompt-it login</code> again.</p>
          </div>
        </section>

        <section id="accounts" className="docs-section">
          <h2>1. Accounts & Authentication</h2>
          <p>To interact with the platform's publishing features, you need to be authenticated.</p>
          
          <div className="command-card">
            <h4><code>prompt-it register</code></h4>
            <p>Creates a new Prompt Integration Toolkit account through an interactive flow.</p>
          </div>
          <div className="command-card">
            <h4><code>prompt-it login</code></h4>
            <p>Logs into your account to authorize the publishing of new prompts.</p>
          </div>
          <div className="command-card">
            <h4><code>prompt-it logout</code></h4>
            <p>Securely ends your current session.</p>
          </div>
          <div className="command-card">
            <h4><code>prompt-it me</code></h4>
            <p>Displays the details of the currently authenticated user.</p>
          </div>
          <div className="command-card">
            <h4><code>prompt-it uses</code></h4>
            <p>Shows statistics for your current platform usage, such as total published posts and versions sent.</p>
          </div>
        </section>

        <section id="management" className="docs-section">
          <h2>2. Prompt Management & Publishing</h2>
          <p>Initialize new prompt projects, publish them, and keep them updated on the Prompt Integration Toolkit cloud.</p>
          
          <div className="command-card">
            <h4><code>prompt-it init</code></h4>
            <p>Generates a template <code>prompt-details.json</code> file in your current directory. This file will be used to store essential metadata for your prompt (title, description, version, and tags).</p>
          </div>
          <div className="command-card">
            <h4><code>prompt-it publish [promptFile]</code></h4>
            <p>Publishes a new prompt to the platform. The command can automatically read the <code>prompt-details.json</code> file in the current directory, or you can pass options via the command line.</p>
            <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <li><strong>Supported File Types:</strong> Only text-based files are allowed (<code>.md</code>, <code>.txt</code>, <code>.yaml</code>, <code>.yml</code>, <code>.json</code>, <code>.xml</code>, <code>.docs</code>, <code>.log</code>). Executables or binaries (like <code>.exe</code>, <code>.png</code>, <code>.pdf</code>) will be rejected to prevent data corruption.</li>
              <li><strong>Options:</strong>
                <ul style={{ paddingLeft: '1.25rem' }}>
                  <li><code>--name &lt;name&gt;</code>: Defines the unique name (slug) of the prompt.</li>
                  <li><code>--title &lt;title&gt;</code>: A user-friendly title for the prompt.</li>
                  <li><code>--description &lt;description&gt;</code>: A detailed description of its purpose.</li>
                  <li><code>--tags &lt;tags&gt;</code>: A comma-separated list of tags for categorization (e.g., <code>code,review,ai</code>).</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="command-card">
            <h4><code>prompt-it update [promptFile]</code></h4>
            <p>Updates the content or metadata of your prompt that is already published on the platform, creating a new version linked to it. Like <code>publish</code>, it only accepts the supported text file types.</p>
            <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <li><strong>Options:</strong>
                <ul style={{ paddingLeft: '1.25rem' }}>
                  <li>All creation options (<code>--name</code>, <code>--title</code>, <code>--description</code>, <code>--tags</code>).</li>
                  <li><code>--message &lt;message&gt;</code>: A commit message briefly indicating what changed in this new version.</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="command-card">
            <h4><code>prompt-it delete &lt;prompt&gt;</code></h4>
            <p>Soft deletes a prompt you own. It will be permanently deleted after 1 day (for an entire prompt and all its versions) or 7 days (for specific versions). You have the flexibility to delete a specific version from the prompt's history using the <code>@version</code> format (e.g., <code>prompt-it delete my-prompt@1.0.1</code>).</p>
          </div>
          <div className="command-card">
            <h4><code>prompt-it revoke &lt;prompt&gt;</code></h4>
            <p>Recovers a prompt or a specific version that is currently in the soft delete state. Like the delete command, you can specify an entire prompt or a specific version to recover using the <code>@version</code> format.</p>
          </div>
          <div className="command-card">
            <h4><code>prompt-it list [target]</code></h4>
            <p>A versatile command to inspect prompts. Its behavior changes depending on the argument provided:</p>
            <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <li><strong>No argument:</strong> Lists all of your own prompts with their descriptions and current versions. Requires login.</li>
              <li><strong>Prompt name:</strong> Shows the full version history of a specific prompt you own, including when each version was created. Requires login.</li>
              <li><strong>Version diff (e.g. <code>my-prompt@1.0.1</code>):</strong> Displays a line-by-line diff comparing the specified version against its previous version, similar to <code>git diff</code>. Requires login.</li>
              <li><strong>User lookup (e.g. <code>@username</code>):</strong> Lists all public prompts published by the specified user. Does <strong>not</strong> require login.</li>
            </ul>
          </div>
        </section>

        <section id="search" className="docs-section">
          <h2>3. Search & Consumption</h2>
          
          <div className="command-card">
            <h4><code>prompt-it search &lt;query&gt;</code></h4>
            <p>Performs a paginated search across all public prompts on the platform using the provided term. The search covers fields like name, title, description, and username.</p>
            <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <li><strong>User search:</strong> Prefix the query with <code>@</code> to search for user profiles instead of prompts (e.g., <code>prompt-it search @username</code>).</li>
            </ul>
          </div>
          <div className="command-card">
            <h4><code>prompt-it get &lt;promptRef&gt; [action]</code></h4>
            <p>Displays, copies, or downloads a community prompt. If executed without options, the CLI will open an interactive menu with actions to take.</p>
            <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <li><strong>Parameters:</strong>
                <ul style={{ paddingLeft: '1.25rem' }}>
                  <li><code>&lt;promptRef&gt;</code>: The prompt reference in the format <code>username/prompt-name</code>. You can specify a desired version by appending <code>@version</code> (e.g., <code>miguel/test@1.0.1</code>).</li>
                  <li><code>[action]</code> (Optional): If set to <code>details</code>, instead of getting the prompt content, the CLI will attempt to create a <code>prompt-details.json</code> based on its information.</li>
                </ul>
              </li>
              <li><strong>Options:</strong>
                <ul style={{ paddingLeft: '1.25rem' }}>
                  <li><code>--copy</code>: Copies the prompt's text content directly to your system's clipboard.</li>
                  <li><code>--file</code>: Saves the entire prompt content inside a local Markdown (<code>.md</code>) file.</li>
                </ul>
              </li>
            </ul>
          </div>
        </section>

        <section id="agents" className="docs-section">
          <h2>4. Agent Integration</h2>
          <p>Install and manage prompts directly in supported AI agents (Claude Code, Codex, and Antigravity IDE).</p>
          
          <div className="command-card">
            <h4><code>prompt-it agent add &lt;promptRef&gt;</code></h4>
            <p>Installs a public prompt globally into an AI agent's configuration directory, making it globally available to that agent as a skill or knowledge item.</p>
            <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <li><strong>Options:</strong>
                <ul style={{ paddingLeft: '1.25rem' }}>
                  <li><code>--claude</code>: Install on Claude Code.</li>
                  <li><code>--codex</code>: Install on Codex.</li>
                  <li><code>--antigravity</code>: Install on Antigravity IDE.</li>
                  <li><code>--force</code>: Overwrite the prompt if it is already installed.</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="command-card">
            <h4><code>prompt-it agent list [promptName]</code></h4>
            <p>Lists all Prompt-It managed prompts currently installed on your AI agents.</p>
            <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <li><strong>Options:</strong> Use agent flags (<code>--claude</code>, <code>--codex</code>, <code>--antigravity</code>) to filter the list to specific agents. If no flags are provided, it lists prompts across all agents.</li>
            </ul>
          </div>
          <div className="command-card">
            <h4><code>prompt-it agent remove [promptName]</code></h4>
            <p>Removes installed prompts from your AI agents.</p>
            <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <li><strong>Options:</strong>
                <ul style={{ paddingLeft: '1.25rem' }}>
                  <li><code>--all</code>: Removes ALL Prompt-It managed prompts from the specified agents.</li>
                  <li>Use agent flags (<code>--claude</code>, <code>--codex</code>, <code>--antigravity</code>) to specify which agents to remove from. If no agent flags are provided when removing a specific prompt, it will be removed from ALL agents where it is installed.</li>
                </ul>
              </li>
            </ul>
          </div>
        </section>

        <section id="workflow" className="docs-section">
          <h2>Recommended Workflow</h2>
          <ol className="workflow-steps">
            <li><strong>Initialize:</strong> Run <code>prompt-it init</code> in a new folder.</li>
            <li><strong>Write:</strong> Create a markdown file and write your AI instructions.</li>
            <li><strong>Configure:</strong> Edit <code>prompt-details.json</code> and link your markdown file.</li>
            <li><strong>Publish:</strong> Run <code>prompt-it publish</code> to send it to the cloud.</li>
            <li><strong>Update:</strong> Refine your content and run <code>prompt-it update</code> to generate a new version.</li>
          </ol>
        </section>
      </div>
    </div>
  );
}
