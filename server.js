const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello from Node.js backend!');
});

app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from the Node.js API!' });
  });  

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});