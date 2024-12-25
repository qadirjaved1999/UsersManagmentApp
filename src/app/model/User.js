import { Schema, model, models } from "mongoose";

// Schema Structure of MongoDB
const userSchema = new Schema({
    name: String,
    avatar: String,
    email: String,
    salary: String,
    date: String,
    status: String
})

// Create new Model inside MongoDB
const Users = models.user || model('user', userSchema);
export default Users;