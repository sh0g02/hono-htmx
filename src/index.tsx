import { Hono } from 'hono'
import { z } from 'zod'
import { zValidator } from '@hono/zod-validator'
import hljs from 'highlight.js'
import { renderer, Download } from './components'

const app = new Hono()

app.get('*', renderer)

app.get('/', async (c) => {
  const todos = [{ id: 1, title: 'ほげ' }]

  return c.render(
    <div>
      <Download />
    </div>
  )
})


app.get('/download', async (c) => {
    // 1. フォームの値のバリデーション
    // 2. 入力されたフォームから、JSのコードを決定
    // 3. HTMLとしてreturn

    const code = `
function greet(name) {
  return 'Hello, ' + name + '!'; // ここをいい感じに修正して
}
`;

    const highlightedCode = hljs.highlight(code, { language: 'js' }).value

    // レンダリングするHTML（JSX）
    const html = (
        <html>
            <body>
                <pre>
                    <code dangerouslySetInnerHTML={{__html: highlightedCode}}/>
                </pre>
            </body>
        </html>
    );

    return c.html(html)
})

app.post(
    '/todo',
    // zValidator(
    //   'form',
  //   z.object({
  //     title: z.string().min(1)
  //   })
  // ),
  async (c) => {
    // const { title } = c.req.valid('form')
    // const id = crypto.randomUUID()
    return c.html(<>わいわい</>)
  }
)

export default app
