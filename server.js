require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const app = express();
app.use(express.json()) // pars the data in json format previously did using body-Parser
app.use(cors())		//support cross platform
app.use(cookieParser())	//parse cookie
app.use(fileUpload({ useTempFiles: true }))

app.use('/', (req, res, next) => {
	res.json({ msg: "Hello Everyone!" })
})

// Connect db
const URI = process.env.MONGODB_URL;
mongoose.connect(URI, {
	useCreateIndex: true,
	useFindAndModify: false,
	useNewUrlParser: true,
	useUnifiedTopology: true
}, err => {
	if (err) throw err;
	console.log("Connected to mongodb");
})



const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log('Server is running on port:', PORT));