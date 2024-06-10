const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const jobsRouter = require('./routers/jobsRouter')

const app = express()
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())
app.use(express.raw())

app.use('/', jobsRouter)

app.listen(3000, () => {
  console.log('listening on port 3000')
})
