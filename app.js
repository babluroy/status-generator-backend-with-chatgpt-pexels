require("dotenv").config();
const express = require('express');
const app = express();
const port = process.env.PORT || 2000;
const bodyParser = require("body-parser");
const cors = require('cors');

// middlewares
app.use(express.json()); 
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
   origin: process.env.ALLOWED_DOMAIN
}));

const generateWhatsappStatus = require("./routes/openai")
const getImages = require("./routes/pexels")

// routes
app.use('/api', generateWhatsappStatus)
app.use('/api', getImages)

app.listen(port, () => {
   console.log(`Server listening on port ${port}`);
});
  