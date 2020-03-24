const epxress = require('express');

const app = epxress();
const bodyParser = require('body-parser');

app.use(bodyParser.json);

app.listen(3000, () => {
  console.log('server is running');
});

const mockUserData = [
  { name: 'Mark' },
  { name: 'Jill' },
];

app.get('/users', (req, res) => {
  res.json({
    success: true,
    message: 'sucessfully got users. Nice!',
    users: mockUserData,
  });
});

app.get('/users/:id', (req, res) => {
  console.log(req.params.id);
  res.json({
    success: true,
    message: 'got one user',
    user: req.params.id,
  });
});

app.post('/login', (req, res) => {
  const { username } = req.body;
  const { password } = req.body;

  const mockUsername = 'billyTheKid';
  const mockPassword = 'superSecret';

  if (username === mockUsername && password === mockPassword) {
    res.json({
      success: true,
      message: 'password and username match!',
      token: 'encrypted token goes here',
    });
  } else {
    res.json({
      success: false,
      message: 'password and username not match!',
    });
  }
});
