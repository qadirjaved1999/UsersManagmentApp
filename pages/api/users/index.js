import connectMongo from "@/app/database/dbConnection";
import { getUsers, postUsers } from "@/app/database/controller";

export default function handler(req, res) {
    connectMongo().catch(() => res.status(405).json({error: "Error in the Connection"}));

    //Type of request
    const {method} = req
    switch (method) {
        case 'GET':
            getUsers(req, res)
            break;
        case 'POST':
            postUsers(req, res)
            break;
        case 'PUT':
            res.status(200).json({ method, name: 'PUT Request' });
            break;
        case 'DELETE':
            res.status(200).json({ method, name: 'DELETE Request' });
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
            res.status(405).end(`Method ${method} Not Allowd`)
    }
}