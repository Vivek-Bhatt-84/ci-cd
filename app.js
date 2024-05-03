console.log("app.js file for node ");
console.log(new Date());

console.log("edited in browser");
const express = require('express');
const app = express();

const port = "7000";

app.get('/', (req, res) => {
    res.json({ message: 'Server running retrying again' });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})