import {createContext, useState,} from 'react';


export const AuthContext = createContext();


export function AuthProvider({children}){
    const [loading,setloading] = useState(true);
    const [user,setuser] = useState(null);


    return (

        <AuthContext.Provider value={{loading,setloading,user,setuser}}>
            {children}
        </AuthContext.Provider>
    )

}