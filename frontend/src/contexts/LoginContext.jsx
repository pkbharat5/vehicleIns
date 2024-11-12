import { createContext,useState } from "react";
import axios from 'axios';
export const LoginContextObj=createContext()


function LoginContext({ children }) {
     const [currentUser,setCurrentUser]=useState(null);
     const [userLoginStatus,setUserLoginStatus]=useState(false);
     const [loginErr,setLoginErr]=useState(null);

async function login(userCredObj) {
  //make http post req to login
  let res=await axios.post('http://localhost:3000/api/login',userCredObj);
  const data =res.data;
  console.log("data is",data)
  if(data.message==='login success'){
    //save token in local/session storage
    sessionStorage.setItem('token',data.token)
    setCurrentUser(data.payload);
    setLoginErr(null);
    setUserLoginStatus(true);
    //navigate to profile
  }else{
    setCurrentUser(null)
    setUserLoginStatus(false)
    setLoginErr(data)
  }
}

      //logout
     function logout() {
      //remove token from local/session storage
      sessionStorage.removeItem('token')
      //reset the state
      setCurrentUser(null)
      setUserLoginStatus(false)
      setLoginErr(null)
     }

  return (
    <LoginContextObj.Provider
    value={{currentUser,setCurrentUser,userLoginStatus,
    setUserLoginStatus,loginErr,setLoginErr,login,logout}}
    >
     {children}
    </LoginContextObj.Provider>
  );
}

export default LoginContext



// import { createContext, useState } from 'react'
// export const LoginContextObj=createContext();
// import axios from 'axios';

// function LoginContext({children}) {
//   const [currentUser,setCurrentUser]=useState(null)
//   const [userLoginStatus,setUserLoginStatus]=useState(false)
//   const [loginErr,setLoginErr]=useState(null)

//  async function login(userCredObj){
//     let res= await axios.post('http://localhost:3000/api/login',userCredObj);
//     const data=res.data;
//     console.log("data is ,",data)
//     if(data.message==='login success'){
//       setCurrentUser(data.payload)
//       setLoginErr(null);
//       setUserLoginStatus(true);
//       //navigate to profile 
//      } else{
//       setLoginErr(data);
//       setCurrentUser(null);
//       setUserLoginStatus(false);
//      }
//     }
//   function logout(){}
  
//     return (
    
//         <LoginContextObj.Provider value={{
//             currentUser,
//             setCurrentUser,
//             userLoginStatus,
//             setUserLoginStatus,
//             loginErr,
//             setLoginErr,
//             login,
//             logout
//         }} >
//             {children}
//         </LoginContextObj.Provider>
    

//   );
// }

// export default LoginContext;
