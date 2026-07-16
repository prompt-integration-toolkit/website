import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import './CopyCommand.css';

interface CopyCommandProps {
  command: string;
}

export function CopyCommand({ command }: CopyCommandProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="copy-command">
      <code>{command}</code>
      <button 
        className="copy-btn" 
        onClick={handleCopy}
        title="Copy to clipboard"
        aria-label="Copy command"
      >
        {copied ? <Check size={16} className="text-green" /> : <Copy size={16} />}
      </button>
    </div>
  );
}
