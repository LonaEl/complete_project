import Axios from "axios";
import { useState } from "react";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = async(e) => {
       e.preventDefault();
       try {
          const url = `http://localhost:5000/api/password-reset`;
          const {data} = await Axios.post()
       } catch (error) {
        console.log(error)
       }
    };

    return (
     <div>
        <form onSubmit={handleSubmit} >
            <h1>Reset your password</h1>
            <Input name="email" label="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} type="email" required />
            <button type="submit" >Reset password</button>
        </form>
     </div>
    )
};

export default ForgotPassword;