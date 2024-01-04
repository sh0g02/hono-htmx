import { html } from 'hono/html'
import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children }) => {
  return html`
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://unpkg.com/htmx.org@1.9.3"></script>
        <script src="https://unpkg.com/hyperscript.org@0.9.9"></script>
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="stylesheet" href="https://unpkg.com/@highlightjs/cdn-assets@11.9.0/styles/github.min.css">
        <title>Hono + htmx</title>
      </head>
      <body>
        <div class="p-4">
          <h1 class="text-4xl font-bold mb-4"><a href="/">JS Generator</a></h1>
          ${children}
        </div>
      </body>
    </html>
  `
})

export const Download = () => {
    return <button hx-get="/download" hx-trigger="click" hx-swap="outerHTML">JavaScriptを生成する</button>
}
