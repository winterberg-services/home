# Winterberg Services - Homepage

Digitale Services für Winterberg und Umgebung. Kostenlos, quelloffen, ohne Tracking.

🌐 **[winterberg.services](https://winterberg.services)**

## Tech Stack

- **Hugo** - Static Site Generator
- **Custom Theme** - Minimalistisch, Monospace, Dark/Light Mode
- **Vanilla CSS** - Kein Framework, ~5KB

## Development

```bash
# Hugo installieren (macOS)
brew install hugo

# Dev-Server starten
hugo server -D -F

# Build für Production
hugo --minify
```

## Struktur

```
content/
├── _index.md           # Homepage
├── services/           # Service-Übersicht
├── neuigkeiten/        # News-Posts
└── impressum.md        # Impressum

themes/minimal/
├── layouts/            # Templates
└── static/css/         # Styles
```

## Features

- Mobile-first & responsive
- Automatischer Dark Mode
- Keine Cookies, kein Tracking
- Restriktive robots.txt

## Services

- 🗑️ [Abfallkalender](https://abfall.winterberg.services) - [GitHub](https://github.com/winterberg-services/abfall-kalender)

## License

MIT
