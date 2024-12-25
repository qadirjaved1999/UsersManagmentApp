import connectMongo from "@/app/database/dbConnection";
export default function handler(req, res){
    connectMongo();
    res.status(200).json({name: 'Qadir Javed'});
}