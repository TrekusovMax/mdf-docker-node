import express from 'express'
import fetch from 'node-fetch'

const app = express()

const DATE_SERVER_HOST = process.env.DATE_SERVER_HOST || 'http://localhost:3005'

app.get('/', (req, res) => {
  fetch(DATE_SERVER_HOST)
    .then((res) => res.json())
    .then((date) =>
      res.send(
        `Текущая дата: <b> ${new Date(date).toLocaleDateString(
          'ru-RU',
        )}\n </b>`,
      ),
    )
})

app.listen(3000, () => {
  console.log('Ready')
})
