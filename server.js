const express = require('express');
const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(PORT, () => {
console.log(`App listening on port: ${PORT}`);
});

module.exports = app;
