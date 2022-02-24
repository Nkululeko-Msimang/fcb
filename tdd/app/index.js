const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();

const standardDev = (values) => {
	return Math.sqrt(values.map(x => Math.pow(x - average(values), 2)).reduce((a, b) => a + b) / values.length);
}

const sum = (values) => {
	return values.reduce(
		(previousValue, currentValue) => previousValue + currentValue
	);
}

const average = (values) => {
	return sum(values)/values.length;
}

const calcValues = [
	{values: [1, 2, 3]}
];

// enhance api security
app.use(helmet())

// body parser to parse json bodies into js objects
app.use(bodyParser.json());

app.use(cors());

app.use(morgan('combined'));

app.post("/calculate", async (req, res) => {
	let sumResult = sum(req.body.values);
	let averageResult = average(req.body.values);
	let standardDevResult = standardDev(req.body.values);
	res.send({"sumResult": sumResult, "averageResult": averageResult, "standardDevResult": standardDevResult});

});

app.listen(3000);
