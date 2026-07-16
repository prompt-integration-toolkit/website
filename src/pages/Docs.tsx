import './Docs.css';

export function Docs() {
  return (
    <div className="docs-layout container fade-in">
      <aside className="docs-sidebar">
        <div className="sidebar-sticky">
          <h3 className="sidebar-title">On this page</h3>
          <nav className="sidebar-nav">
            <a href="#getting-started" className="sidebar-link">Getting Started</a>
            <a href="#installation" className="sidebar-link">Installation & OS Guide</a>
            <a href="#permissions" className="sidebar-link">Permissions & Errors</a>
            <a href="#accounts" className="sidebar-link">Accounts & Authentication</a>
            <a href="#management" className="sidebar-link">Prompt Management</a>
            <a href="#search" className="sidebar-link">Search & Consumption</a>
            <a href="#agents" className="sidebar-link">Agent Integration</a>
            <a href="#workflow" className="sidebar-link">Recommended Workflow</a>
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
          <p>Initialize new prompt projects, publish them, and keep them updated on the cloud.</p>
          
          <div className="command-card">
            <h4><code>prompt-it init</code></h4>
            <p>Generates a template <code>prompt-details.json</code> file in your current directory.</p>
          </div>
          <div className="command-card">
            <h4><code>prompt-it publish</code></h4>
            <p>Publishes a new prompt to the platform. Accepts flags like <code>--name</code>, <code>--title</code>, <code>--description</code>, and <code>--tags</code>.</p>
          </div>
          <div className="command-card">
            <h4><code>prompt-it update</code></h4>
            <p>Updates the content or metadata of your prompt, creating a new version. Accepts a <code>--message</code> flag for commits.</p>
          </div>
          <div className="command-card">
            <h4><code>prompt-it delete &lt;prompt&gt;</code></h4>
            <p>Soft deletes a prompt you own (or a specific version like <code>my-prompt@1.0.1</code>).</p>
          </div>
          <div className="command-card">
            <h4><code>prompt-it revoke &lt;prompt&gt;</code></h4>
            <p>Recovers a prompt or a specific version that is currently in the soft delete state.</p>
          </div>
          <div className="command-card">
            <h4><code>prompt-it list [target]</code></h4>
            <p>Inspect prompts. Pass no argument to list yours, a prompt name to see its history, or <code>@username</code> to see public prompts from a user.</p>
          </div>
        </section>

        <section id="search" className="docs-section">
          <h2>3. Search & Consumption</h2>
          
          <div className="command-card">
            <h4><code>prompt-it search &lt;query&gt;</code></h4>
            <p>Performs a paginated search across all public prompts. Prefix with <code>@</code> to search for users.</p>
          </div>
          <div className="command-card">
            <h4><code>prompt-it get &lt;promptRef&gt;</code></h4>
            <p>Displays, copies (<code>--copy</code>), or downloads (<code>--file</code>) a community prompt.</p>
          </div>
        </section>

        <section id="agents" className="docs-section">
          <h2>4. Agent Integration</h2>
          <p>Install and manage prompts directly in supported AI agents (Claude Code, Codex, and Antigravity IDE).</p>
          
          <div className="command-card">
            <h4><code>prompt-it agent add &lt;promptRef&gt;</code></h4>
            <p>Installs a public prompt globally into an AI agent. Use flags like <code>--claude</code>, <code>--codex</code>, or <code>--antigravity</code>.</p>
          </div>
          <div className="command-card">
            <h4><code>prompt-it agent list</code></h4>
            <p>Lists all Prompt-It managed prompts currently installed on your AI agents.</p>
          </div>
          <div className="command-card">
            <h4><code>prompt-it agent remove</code></h4>
            <p>Removes installed prompts from your AI agents. Use <code>--all</code> to remove everything.</p>
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
