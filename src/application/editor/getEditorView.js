const viewClasses = {
  split: 'editor-workspace editor-workspace--split',
  source: 'editor-workspace editor-workspace--source',
  preview: 'editor-workspace editor-workspace--preview',
};

export function getEditorView(view) {
  return viewClasses[view] ?? viewClasses.split;
}
