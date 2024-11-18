<<<<<<< HEAD
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello World');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
=======
// app.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

module.exports = app;
>>>>>>> 0cc3de9 (Updated Jenkinsfile)
