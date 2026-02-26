import express from 'express';
import {v4 as uuidv4} from 'uuid';
const router = express.Router();

const users = [
    {name: 'nosajrarb', id: 1},
    {name: 'irapbrar', id: 2}
]

router.get('/', (req, res) => {
    res.send(users)
})

router.post('/', (req, res) => {
    const user = req.body;
    users.push({...user, id: uuidv4()})
    console.log(`${JSON.stringify(user)} : ✅`)
})

export default router;