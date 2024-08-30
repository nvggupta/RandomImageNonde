import express from 'express';

const app = express();

app.get('/api', (req, res) => {
  res.send('Random Image API is running!');
});

app.get('/api/image/random', (req, res) => {
    const randomImageUrl = `https://picsum.photos/200/300?random=${Math.floor(Math.random() * 1000)}`;
    res.json({ imageUrl: randomImageUrl });
  });
  
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
