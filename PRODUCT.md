# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

delegated: React with Vite, Tailwind CSS, and DaisyUI for the public website; the repository does not yet contain a scaffold.

## Users

Inferred from the product README: people who write and maintain Markdown documents, especially Linux desktop users who want a focused local editor.

## Product Purpose

Repsel is an open-source desktop Markdown editor for focused writing. Success for this website means helping visitors understand the editor and download a compatible Linux build.

## Positioning

Repsel edits standard Markdown files locally, without an account or online service. It combines plain-text editing with immediate visual feedback in a native-feeling desktop application.

## Operating Context

The desktop app currently targets 64-bit Linux systems and is built with Tauri. Apple Silicon support is listed as coming soon in the README.

## Capabilities and Constraints

Confirmed capabilities include Markdown editing, synchronized source and preview modes, mathematical notation, local document open/save, embedded local images, persistent light and dark themes, and A4 PDF export. The website is a separate React web project. Product version, current release links, and platform availability should be checked against the upstream repository before launch.

## Brand Commitments

The product name is Repsel. The user requested a clean architecture with logic kept separate from presentation, and React with DaisyUI for the website. The website must be available in English and French with a language switch. The user approved an interface-first landing page and will provide real application screenshots later.

## Evidence on Hand

The upstream repository README and release information are the source of truth for product features, platform support, and downloads: https://github.com/evdk25-wq/Repsel. No application screenshots, testimonials, customer logos, or usage statistics were supplied locally. The current live editor preview is a temporary demonstration, not a screenshot of the shipped application.

## Product Principles

- Keep writing focused on the document.
- Preserve Markdown as a standard local file format.
- Explain capabilities with truthful product demonstrations.
- Keep the website distinct from the desktop editor's implementation.
