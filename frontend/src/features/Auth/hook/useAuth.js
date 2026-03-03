import { login,logout,register,getme } from "../services/auth.api.js";
import  {useContext, useEffect} from "react"
import { AuthContext } from "../Auth.context";

export const useAuth = ()=>{

    const {loading,setloading,user,setuser} = useContext(AuthContext);

    async function handleLogin({email,password}){
                 
        setloading(true)
         const res = await login({email,password});
           setuser(res);
           setloading(false)
           

    }
      async function handleRegister({username,email,password}){
          
        setloading(true)
         const res = await register({username,email,password});
           setuser(res);
           setloading(false)
           

    }

    async function handleGetme() {
             
        setloading(true)
         const res = await getme();
           setuser(res);
           setloading(false)
    }

    async function handleLogout(){
        setloading(true)
         const res = await logout();
       setuser(null)
           setloading(false)
    }

    useEffect(()=>{
         
        handleGetme()

    },[])

    return({
        user,loading,handleLogin,handleRegister,handleGetme,handleLogout
    })

}