import express from 'express';
import 'dotenv/config';
import connectDB from './Config/db.js';
import cors from 'cors';
import router from './Routes/task.route.js';


const app = express();
const PORT = process.env.PORT || 5000;

//Connect to Database
connectDB();

//Configuring cors
const allowedOrigins =[
    'http://localhost:5173'
];
const corsOptions = {
    origin : (origin, callback)=>{
        //Check if the request ing origin is in our list of allowed origins
        if(allowedOrigins.includes(origin) || !origin){
           //Allow acces
            callback(null,true);
        }else{
            //Block access
            callback(new Error('Not allowed to access this backend'))
        }
    }
}

app.use(express.json());
app.use(cors(corsOptions));
app.use("/api",router);



//Define Routes
app.get('/', (req, res)=>{
    res.send("API is running...");
    console.log('API is up and running');
});

app.listen(PORT, ()=>{
    console.log(`Server is running in http://localhost:${PORT}...`);
});

