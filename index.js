const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const aiRoute = require('./routes/ai');

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/ai', aiRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
