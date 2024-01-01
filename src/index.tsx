import { Hono } from 'hono'
import { z } from 'zod'
import { zValidator } from '@hono/zod-validator'

import {renderer, AddTodo, Item, Download, TestCode} from './components'


const app = new Hono()

app.get('*', renderer)

app.get('/', async (c) => {
  const todos = [{ id: 1, title: 'ほげ' }]

  return c.render(
    <div>
      <AddTodo />
      <Download />
      {todos.map((todo) => {
        return <Item title={todo.title} id={todo.id} />
      })}
      <div id="todo"></div>
    </div>
  )
})


app.get('/download', async (c) => {
    // 1. フォームの値のバリデーション
    // 2. 入力されたフォームから、JSのコードを決定
    // 3. HTMLとしてreturn

    // const highlightedCode = hljs.highlight(
    //     'console.log(hihidsih)',
    //     { language: 'js' }
    // ).value
    return c.html(<div><TestCode/></div>)
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

// app.delete('/todo/:id', async (c) => {
//   const id = c.req.param('id')
//   c.status(200)
//   return c.body(null)
// })

export default app
