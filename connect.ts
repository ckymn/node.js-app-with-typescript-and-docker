import mongoose from "mongoose";

// type DBInput = {
//     db: string,
// }

export default (db: String) => {
    const connect = () => {
        mongoose
            .connect(String(db))
            .then(() => {
                return console.info(`Successfully connected to ${db}`);
            })
            .catch((err) => {
                console.error(`Error connnecting to databse : `, err)
                return process.exit(1);
            })
    }

    connect();

    mongoose.connection.on('disconnected', connect);
}