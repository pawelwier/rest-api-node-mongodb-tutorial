const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch(err) {
        res.json({
            message: err
        })
    }
});

router.get('/:postId', async (req, res) => {
    const post = await Post.findById(req.params.postId);
    res.json(post);
})

router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })
    try {
        const savedPost = await post.save();
        res.json(savedPost);
        } catch(err) {
            res.json({
                message: err
            })
        }
});

router.delete('/:postId', async (req, res) => {
    const removedPost = await Post.deleteOne({
        _id: req.params.postId
    });
    res.json(removedPost);
})

router.patch('/:postId', async (req, res) => {
    const updatedPost = await Post.updateOne({
        _id: req.params.postId
    }, {
        $set : {title: req.body.title}
    } )
    res.json(updatedPost);
})

module.exports = router;