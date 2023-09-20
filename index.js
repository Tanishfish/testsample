const express = require("express");
const cors = require("cors");
const sliderRouter = require('./Router/slider.route');


// if (process.env.NODE_ENV === "development") {
//     require("dotenv").config();
//   }

const app = express();
const PORT = 4322;

app.use(cors());

app.get('/', (req, res) => {
    res.json({
        msg: 'Api Created Successfully',
    });
});

app.use(express.json());

app.use('/api', sliderRouter);


app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Server Running on http://localhost:${PORT}`);
    }
});
