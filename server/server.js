// imports
const path = require('path');
const fs = require('fs');
const express = require('express');

// path to json file
const dataPath = path.join(__dirname, './data/state.json');

// creates new express app
const app = express();

// add body parser middleware
app.use(express.json());

// get state endpoint
app.get('/state', async (req, res, next) => {
	try {
		const results = await readState();
		res.json(results);
	} catch (error) {
		next(error);
	}
});

// update state endpoint
app.patch('/state', async (req, res, next) => {
	try {
		const newState = { ...req.body };
		const results = await updateState(newState);
		res.json(results);
	} catch (error) {
		next(error);
	}
});

// 404 handler
app.use((req, res, next) => {
	const error = new Error(`path ${req.originalUrl} not found`);
	error['status'] = 404;
	next(error);
});

// error handler
app.use((error, req, res, next) => {
	res.status(error['status'] || 500);
	res.json({ error: { message: error.message } });
});

// start server
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`listening on port ${port}`));

// utility file system functions
function readState() {
	return new Promise((resolve, reject) => {
		fs.readFile(dataPath, (error, results) => {
			if (error) {
				return reject(error);
			}
			const state = JSON.parse(results);
			return resolve(state);
		});
	});
}

function updateState(newState) {
	return new Promise((resolve, reject) => {
		fs.writeFile(dataPath, JSON.stringify(newState, null, 2), error => {
			if (error) {
				return reject(error);
			}
			return resolve('state saved');
		});
	});
}
