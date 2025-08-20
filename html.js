export default function html({ title, description, content }) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${description || ''}">
        <title>${title || 'EDS Demo'}</title>
        <link rel="stylesheet" href="/styles/styles.css" />
      </head>
      <body>
        <header>
          <h1>EDS Demo Site</h1>
        </header>
        <main>
          ${content}
        </main>
        <footer>
          <p>© 2025 My EDS Demo</p>
        </footer>
        <script type="module" src="/scripts/scripts.js"></script>
      </body>
    </html>
  `;
}
