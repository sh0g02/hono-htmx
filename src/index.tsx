import { Hono } from 'hono'
import {array, string, z} from 'zod'
import { zValidator } from '@hono/zod-validator'
import hljs from 'highlight.js'
import {renderer, Show} from './components'

const app = new Hono()

app.get('*', renderer)

// 初期表示
app.get('/', async (c) => {
  return c.render(<Show />)
})

const test =

app.post('/show',
    zValidator(
        'form',
        z.object({
            title: z.string().min(1),
            eventsSave: z.string().optional(),
            eventsShow: z.string().optional(),
        })
    ),
    async (c) => {
    // 1. フォームの値のバリデーション
    // 2. 入力されたフォームから、JSのコードを決定
    // 3. HTMLとしてreturn

        console.log(c.req.valid('form'))

        const { title } = c.req.valid('form')

        const code = `
function greet(name) {
  return 'Hello, ' + name + '!'; // ここをいい感じに修正して
}

document.getElementById("myButton").addEventListener("click", function() {
    alert("${title}と入力されました");
});

[1, 2, 3].forEach(function(element) {
    console.log(element);
});
`;

    const highlightedCode = hljs.highlight(code, { language: 'js' }).value
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

export default app
