import mongoose from "mongoose";
import colors from 'colors'

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://jazlinejaz:oRmGcGYZkhU2PGgQ@mariam.92cde5x.mongodb.net/?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log(`MongoDB connected: ${conn.connection.host}`.cyan.bold.bgCyan);
    } catch (error) {
       // Remove the formatting from the error message
       console.error(`${error.message}`.red.underline.bold)
// console.error(error.message);

        process.exit(1);
    }
}



export default connectDB