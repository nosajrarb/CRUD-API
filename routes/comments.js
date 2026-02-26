import express from 'express'
import {v4 as cid} from 'uuid'

const router = express.Router();

const comments  = [
    {id: 1, content: "first comment"}
]


router.get('/', (req, res) => {
    res.send(comments)
})

router.post('/', (req, res) => {
    const comment = req.body;
    comments.push({id: cid(), ...comment})
    console.log(`${JSON.stringify(comment)} : ✅`)
})

export default router