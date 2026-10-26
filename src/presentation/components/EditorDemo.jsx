import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import { getEditorView } from '../../application/editor/getEditorView.js';

export default function EditorDemo({ copy }) {
  const [markdown, setMarkdown] = useState(copy.markdown);
  const [view, setView] = useState('split');

  useEffect(() => setMarkdown(copy.markdown), [copy.markdown]);

  return (
    <section className="editor-demo" aria-label={copy.editor.demoLabel}>
      <div className="editor-titlebar">
        <span className="editor-document-name">{copy.editor.documentName}</span>
        <div className="editor-view-controls" role="group" aria-label={copy.editor.viewGroupLabel}>
          {Object.entries(copy.editor.views).map(([id, label]) => (
            <button
              aria-pressed={view === id}
              className={view === id ? 'editor-view-button is-active' : 'editor-view-button'}
              key={id}
              onClick={() => setView(id)}
              type="button"
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className={getEditorView(view)} data-ui="repsel-editor">
        <label className="source-pane">
          <span className="pane-label">{copy.editor.sourceLabel}</span>
          <textarea
            aria-label={copy.editor.editLabel}
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck="false"
            value={markdown}
            onChange={(event) => setMarkdown(event.target.value)}
          />
        </label>

        <div className="preview-pane" role="region" aria-label={copy.editor.previewAriaLabel}>
          <span className="pane-label">{copy.editor.previewLabel}</span>
          <article className="markdown-preview">
            <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]}>
              {markdown}
            </ReactMarkdown>
          </article>
        </div>
      </div>
      <div className="editor-statusbar" aria-live="polite">
        {copy.editor.livePreview}
      </div>
    </section>
  );
}
