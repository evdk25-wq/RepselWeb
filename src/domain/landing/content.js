export const landingCopy = {
  fr: {
    pageTitle: 'Repsel : Écrire en Markdown, sans distraction',
    navigationLabel: 'Navigation principale',
    navigation: [
      { label: 'Fonctionnalités', href: '#fonctionnalites' },
      { label: 'Téléchargement', href: '#telechargement' },
    ],
    hero: {
      title: 'Le Markdown, enfin clair.',
      description:
        'Un éditeur de bureau qui garde votre document lisible pendant que vous écrivez.',
      action: 'Télécharger le .deb',
      note: 'Paquet Debian / Ubuntu 64 bits',
    },
    editor: {
      demoLabel: 'Démonstration de l’éditeur Repsel',
      viewGroupLabel: 'Mode d’affichage',
      documentName: 'notes-de-cours.md',
      views: { split: 'Partagé', source: 'Source', preview: 'Aperçu' },
      sourceLabel: 'Source',
      previewLabel: 'Aperçu',
      editLabel: 'Modifier le document Markdown',
      previewAriaLabel: 'Aperçu rendu du document',
      livePreview: 'L’aperçu suit votre saisie',
    },
    featuresHeading: 'Fonctionnalités',
    featuresLead: 'Un éditeur Markdown complet pour le bureau Linux.',
    featureGroups: [
      {
        title: 'Édition',
        items: [
          'Édition Markdown avec CodeMirror 6',
          'Syntaxe masquée visuellement hors de la ligne active',
          'Titres, listes, citations, tâches, tableaux, liens et blocs de code',
          'Palette d’insertion et commandes rapides',
          'Barre d’outils de mise en forme contextuelle',
          'Typographie du document configurable',
          'Compteurs de mots et de caractères',
        ],
      },
      {
        title: 'Aperçu et export',
        items: [
          'Modes source et aperçu rendu synchronisés',
          'Notation mathématique en ligne et en bloc',
          'Images locales intégrées au document Markdown',
          'Export PDF A4 avec pagination et rendu mathématique compatible avec WebKitGTK',
        ],
      },
      {
        title: 'Documents et application',
        items: [
          'Commandes Ouvrir, Enregistrer et Enregistrer sous',
          'Protection contre la perte des modifications non enregistrées',
          'Thèmes clair et sombre mémorisés',
          'Interface disponible en français et en anglais',
          'Barre de fenêtre personnalisée pour le bureau Linux',
        ],
      },
    ],
    download: {
      title: 'Prêt à écrire ?',
      description:
        'Repsel est open source. Le paquet .deb est prévu pour Debian, Ubuntu et leurs dérivés en 64 bits.',
      action: 'Télécharger le .deb',
    },
    footer: 'Repsel, éditeur Markdown open source.',
    repository: 'Code source sur GitHub',
    downloadLabel: 'Télécharger',
    languageLabel: 'English',
    markdown: `# Notes de cours

Repsel garde la **source Markdown** et le document lisible côte à côte.

## Une formule dans le texte

La notation TeX peut s’écrire en ligne, comme $E = mc^2$, ou dans un bloc :

$$
\\int_0^1 x^2 \, dx = \\frac{1}{3}
$$

- Un fichier Markdown standard
- Un aperçu qui suit la saisie
- Un document prêt à exporter en PDF`,
  },
  en: {
    pageTitle: 'Repsel: Markdown writing without distraction',
    navigationLabel: 'Main navigation',
    navigation: [
      { label: 'Features', href: '#fonctionnalites' },
      { label: 'Download', href: '#telechargement' },
    ],
    hero: {
      title: 'Markdown, made clear.',
      description: 'A desktop editor that keeps your document readable as you write.',
      action: 'Download the .deb',
      note: '64-bit Debian / Ubuntu package',
    },
    editor: {
      demoLabel: 'Repsel editor demo',
      viewGroupLabel: 'Editor view',
      documentName: 'course-notes.md',
      views: { split: 'Split', source: 'Source', preview: 'Preview' },
      sourceLabel: 'Source',
      previewLabel: 'Preview',
      editLabel: 'Edit the Markdown document',
      previewAriaLabel: 'Rendered document preview',
      livePreview: 'Preview updates as you type',
    },
    featuresHeading: 'Features',
    featuresLead: 'A full-featured Markdown editor for the Linux desktop.',
    featureGroups: [
      {
        title: 'Editing',
        items: [
          'Markdown editing powered by CodeMirror 6',
          'Visual syntax hiding outside the active line',
          'Headings, lists, blockquotes, tasks, tables, links, and code blocks',
          'Insertion palette and quick commands',
          'Contextual formatting toolbar',
          'Configurable document typography',
          'Word and character counters',
        ],
      },
      {
        title: 'Preview and export',
        items: [
          'Synchronized source and rendered preview modes',
          'Inline and display mathematical notation',
          'Embedded local images stored inside the Markdown document',
          'A4 PDF export with pagination and WebKitGTK-compatible mathematical rendering',
        ],
      },
      {
        title: 'Documents and app',
        items: [
          'Open, Save, and Save As commands',
          'Protection against unsaved changes',
          'Persistent light and dark themes',
          'Interface available in English and French',
          'Custom window chrome designed for the Linux desktop',
        ],
      },
    ],
    download: {
      title: 'Ready to write?',
      description: 'Repsel is open source. The .deb package is for 64-bit Debian, Ubuntu, and their derivatives.',
      action: 'Download the .deb',
    },
    footer: 'Repsel, an open-source Markdown editor.',
    repository: 'Source code on GitHub',
    downloadLabel: 'Download',
    languageLabel: 'Français',
    markdown: `# Course notes

Repsel keeps the **Markdown source** beside a readable document.

## An equation in your text

Write TeX inline, like $E = mc^2$, or on its own line:

$$
\\int_0^1 x^2 \, dx = \\frac{1}{3}
$$

- A standard Markdown file
- A preview that follows your edits
- A document ready to export as PDF`,
  },
};

export function getLandingCopy(locale) {
  return landingCopy[locale] ?? landingCopy.fr;
}
