const mongoose = require("mongoose")

const connectDatabase = async() => { 
        try {
            await mongoose.connect(process.env.DB_URL)
            console.log("Database connected successfully")
        } catch (error) {
            console.log({err:error.message})
        }
}

module.exports =  {connectDatabase}