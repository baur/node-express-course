const epxress = require('express');

const app = epxress();

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
