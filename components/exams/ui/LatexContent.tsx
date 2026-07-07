import React from 'react';
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';

interface LatexContentProps {
  content: string | null | undefined;
  className?: string;
}

export default function LatexContent({ content, className = '' }: LatexContentProps) {
  if (!content) return null;

  return (
    <div className={`whitespace-pre-wrap ${className}`}>
      <Latex>{content}</Latex>
    </div>
  );
}
