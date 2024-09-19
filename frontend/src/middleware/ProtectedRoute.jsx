import { Login } from "../components/Login";
import Cookies from 'js-cookie';
export const ProtectedRoute=({children})=>
{
    const token=Cookies.get("client-token")
    
    
    return (
        <>
            {
                token==="empty"?<Login/>:children
            }
        </>
    )
}