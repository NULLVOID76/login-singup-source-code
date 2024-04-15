import { createContext, useContext,useId } from "react";
// import { useId } from "react";

export const UserContext=createContext({
    users:[
        {
                name:"Nullvoid",
                email:"nullvoid76@gmail.com",
                password:"12345",
        }
    ],
    LogIn:(email,password)=>{},
    Logout:()=>{},
    signUp:({name,email,password})=>{}

});
 
export const useUser=()=>{
    return useContext(UserContext);
}

export const UserProvider=UserContext.Provider;