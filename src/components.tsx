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

export const Show = () => (
    <form hx-post="/show" hx-swap="outerHTML" class="mb-4">
        <div class="mb-2">
            <div>
                <input type="checkbox" id="eventsSave" name="eventsSave" value='true' />
                <label for="eventsSave">保存したとき</label>
            </div>
            <div>
                <input type="checkbox" id="eventsShow" name="eventsShow" value='true' />
                <label for="eventsShow">表示したとき</label>
            </div>
        </div>
        <div class="mb-2">
            <label for="title" class="form-label">対象となるアプリID</label>
            <input name="title" type="number" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-2.5"/>
        </div>
        <button class="text-white bg-blue-700 hover:bg-blue-800 rounded-lg px-5 py-2 text-center" type="submit">
            JSのコードを生成する
        </button>
    </form>
)
