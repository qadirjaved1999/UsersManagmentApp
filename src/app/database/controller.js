// Controller
import Users from "../model/User";

// get: http://localhost:3000/api/users
export async function getUsers(req, res){
   try{
    const users = await Users.find({});
    if(!users) return res.status(404).json( {error: "Data not Found"})
    res.status(200).json(users);
   }catch(error){
    res.status(404).json({error: "Error while Fetching data"})
   } 
}

// post: http://localhost:3000/api/users
export async function postUsers(req, res){
   try{
    const formData = req.body;
    if(!formData) return res.status(404).json( {error: "Form Data Not Found...!"})
      Users.create(formData, function(err, data){
      return res.status(200).json(data);
   })
   }catch(error){
    return res.status(404).json({error: "Error while Fetching Form Data"})
   } 
}
