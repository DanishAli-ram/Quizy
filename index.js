const express = require('express');
const app = express();

require('./routes/example')(app);

app.get('/', (req,res) => {
res.send("hello there")
})

const PORT = process.env.PORT || 5000
app.listen(PORT);

