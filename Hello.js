import Lab5 from "./Lab5.js"

export default function Hello(app) {
    app.get('/hello', (req, res) => {
      res.send('Life is good!')
    })
    app.get('/', (req, res) => {
      res.send('Welcome to Full Stack Development!')
    })
  }
  