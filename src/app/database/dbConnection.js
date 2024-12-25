import mongoose from "mongoose"
const connectMongo = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        if (connection.readyState == 1) {
            console.log("Database Connected Successfully");
        }
    } catch (err) {
        console.error("Database Connection Error:", err.message);
        return Promise.reject(err)
    }
}
export default connectMongo;