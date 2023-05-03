import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';

// import from files
import reportRouter from './routes/index.js'
import { mongoDB } from './database/index.js'


//creates a new instance of an Express application
const app = express();

//setting up config.env file so that we can use content of it
config({
    path: "./config.env"
})

//connecting server and database, just call this func^
mongoDB();


// <------------ middlewares ------------> 

//we'll be sending data in json format, that's why it is required to use this middleware
app.use(express.json());

//we'll be using dynamic routes, in order to read the data from url we have to use this
app.use(express.urlencoded({ extended: true }));

//set 'credentials: true' to pass --> headers, cookies, etc to browser/frontend
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}))

// route splitting
app.use("/api/data", reportRouter)

// <-----------------------------------------------------------------------> 


// variables
const PORT = process.env.PORT || 8000


//it is a test route just to see our server is working
app.get("/", (req, res) => {
    return res.send(`<div style = "background:magenta;padding:100px;"><h2>Welcome to Data Virtualization Server</h2>
    <p>Below are the some examples of supported routes...</p>
        <div><ul>
            <li>GET all data from the database - /api/data</li>
            <li>GET data filtered by year - /api/data/year/:year</li>
            <li>GET data filtered by region - /api/data/region/:region</li>
            <li>Much more...</li>
        </ul></div>
    </div>`)
})


//function is used to bind and listen to the connections on the specified host and port
app.listen(PORT, (req, res) => {
    console.log(`Server is active on Port ${PORT}`)
})