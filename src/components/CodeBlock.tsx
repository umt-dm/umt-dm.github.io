import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism'; // Dark theme

interface CodeBlockProps {
  language: string;
  value: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language, value }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500); // Reset copied message after 1.5 seconds
  };

  return (
    <div style={{ position: 'relative', marginBottom: '1rem' }}>
      <CopyToClipboard text={value} onCopy={handleCopy}>
        <button style={{
          position: 'absolute',
          top: '8px',
          right: '8px',
          background: copied ? 'green' : '#333',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          padding: '4px 8px',
          cursor: 'pointer'
        }}>
          {copied ? 'Copied' : 'Copy'}
        </button>
      </CopyToClipboard>
      <SyntaxHighlighter language={language} style={darcula} showLineNumbers>
        {value}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
