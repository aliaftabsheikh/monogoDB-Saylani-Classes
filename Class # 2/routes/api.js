const express = require("express");
const router = express.Router();
const {ObjectId} = require('mongodb')
const { getConnect } = require("../db")

const posts = [{ title: 'My Title', descreption: 'My Description' }];

const getAllPosts = async () => {
    const posts = [];
    const postsConnect = getConnect().db().collection("posts")
    const postsCursor = await postsConnect.find();
    await postsCursor.forEach(post => {
        posts.push(post)
    });
    return posts;
}

router.get('/posts', async (req, res) => {
    const posts = await getAllPosts()
    res.status(200).json(posts)
});

router.post('/post', async (req, res) => {
    const { title, descreption } = req.body;
    const postsConnect = getConnect().db().collection("posts")
    await postsConnect.insertOne({ title, descreption });
    const posts = await getAllPosts()
    res.status(200).json(posts)
})

router.patch('/post/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const { title, descreption } = req.body;
        const postsConnect = getConnect().db().collection("posts")
        await postsConnect.updateOne({ _id : ObjectId(id)}, { $set: { title, descreption }});
        res.status(201).json(posts)
    } catch (e) {
        res.json(e)
    }
})

router.delete('/post/:index', (req, res) => {
    const index = req.params.index;
    posts.splice(index, 1)
    res.status(201).json(posts)
})


module.exports = router;