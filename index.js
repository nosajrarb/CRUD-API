import express from 'express'

//routes
import userRoutes from './routes/users.js'

const app = express();
const PORT = 2121;

app.use(express.json())

app.get('/', (req, res) => {
    res.send('🏠');
    console.log('🏠');
})

app.use('/users', userRoutes)

app.listen(PORT, () => {console.log('Server: ✅')})