const express = require('express');
const db = require('../models');
const { verifyToken } = require('./middlewares');

const router = express.Router();

// POST /
router.post('/', verifyToken, async (req, res) => {
  try {
    // 내용 입력 검사
    const { title, contents } = req.body;
    if (!title) {
      return res.status(400).json({ msg: '게시물 제목을 입력해주세요.' });
    }
      else if (!contents) {
      return res.status(400).json({ msg: '게시물 내용을 입력해주세요.' });
    }
  
    // POST 생성
    const newPost = await db.Post.create({
      title: req.body.title,
      contents: req.body.contents,
      UserId: 1, // TODO: TEST 1 , 쿠키에서 보내는 방식으로 작업 진행
    });
  
    return res.status(201).json(newPost);
  
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: 'Server Error', error });
  }
});


// GET /
router.get('/', async (req, res) => { 
  try {
    const posts = await db.Post.findAll({
      include: [{
        model: db.User,
        attributes: ['id', 'nickname'],
      }]
    });

    return res.status(200).json({ posts: posts });
  
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
});


module.exports = router;
