import express from 'express'
import cors from 'cors'
import  expenceRouter from './routes/expense.rout'
import settingsRouter from './routes/settings.routs'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/settings' ,settingsRouter)
app.use('/api/expence' ,expenceRouter)


app.listen(3000 ,() => {
    console.log('server run on port 3000')
})