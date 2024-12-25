"use client";
import AddNewUser from "./AddNewUser";
import UpdateUser from "./UpdateUser";
const Form = () => {
    const flag = false;
    return (
        <div className="container mx-auto py-5">
            {flag ? <AddNewUser /> : <UpdateUser />}
        </div>
    )
}
export default Form;