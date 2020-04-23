const express = require('express');
const cors = require('cors');
const passport = require('passport');
const morgan = require('morgan');
const dotenv = require('dotenv');

const { sequelize } = require('./models');
const passportConfig = require('./passport');
const userRouter = require('./routes/user');
const postsRouter = require('./routes/posts');



const app = express();

dotenv.config();

// sequelize.sync({ force: true });
sequelize.sync();
passportConfig();

// EXPRESS SETUP
app.use(morgan('dev'));
app.use(cors({
origin: 'http://localhost:8080',
credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
// app.use(passport.session());

app.get('/', (req, res) => {
  res.status(200).json({ test: 'test' });
});

// ROUTES
app.use('/user', userRouter);
app.use('/posts', postsRouter);
// app.use('/posts', postsRouter);
// app.use('/hashtag', hashtagRouter);


// START
const port = 3031;
app.listen(port, () => {
  console.log(`백엔드 서버 ${port}번 포트에서 작동중.`);
});