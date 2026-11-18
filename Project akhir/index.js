const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Halo Warung Kopi!'));
app.listen(3000, '0.0.0.0', () => console.log('Running on 3000'));