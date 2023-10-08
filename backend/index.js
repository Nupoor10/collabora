const express = require('express');
const dotenv = require('dotenv').config()
const cors = require('cors');
const {mongoose} = require('mongoose');
const cookieParser = require('cookie-parser');
const app = express();  
const authRoutes = require("./routes/authRoutes");
const orgProfileRoutes = require("./routes/organizationProfileRoutes");
const orgProjectRoutes = require("./routes/organizationProjectRoutes");
const userProfileRoutes = require("./routes/userProfileRoutes");
const userProjectsRoutes = require("./routes/userProjectsRoutes");
const userExperienceRoutes = require("./routes/userExperienceRoutes");
const userAchievementsRoutes = require("./routes/userAchievementsRoutes");

// database connection
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("db connected"))
.catch((err) => console.log("db not connected", err))

// app.use(cors())

// middleware
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:false}))


app.use('/', authRoutes);
app.use('/org/profile/', orgProfileRoutes);
app.use('/org/projects/', orgProjectRoutes);
app.use('/user/profile/', userProfileRoutes);
app.use('/user/achievements/', userAchievementsRoutes);
app.use('/user/experience/', userExperienceRoutes);
app.use('/user/projects/', userProjectsRoutes);

const port = 8000;
app.listen(port, () => console.log(`Server is running on port: ${port}`))