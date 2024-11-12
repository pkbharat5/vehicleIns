
import React from 'react'
import { useContext,useState,useEffect } from 'react'
import { LoginContextObj } from '../contexts/LoginContext'
import axios from 'axios'

function AdminProfile() {
  const {currentUser}=useContext(LoginContextObj)
  const [listOfUsers,setListOfUsers]=useState([])
  const [listOfSellers,setListOfSellers]=useState([])

  async function getUsersAndSellers(){
    let res1=await axios.get("http://localhost:3000/user-api/users")
    setListOfUsers(res1.data.payload);
    let res2=await axios.get("http://localhost:3000/seller-api/sellers")
    setListOfSellers(res2.data.payload);

  }

  useEffect(()=>{
    getUsersAndSellers();
  },[]);
  console.log(listOfUsers,listOfSellers)

  return (
    <div>
    
    <h1 className='text-end text-info'>Admin Profile</h1>
   {/* Display general information */}
   <p className='text-end text-success'>Welcome User : {currentUser?.username}</p>
  
   <h2 className='display-5 text-center text-info'>List of Users</h2>
    <ul className='text-center list-unstyled bg-secondary p-5'>
      {
        listOfUsers.map((user)=><li className="text-warning fs-2">{user.username}
        <button className="btn btn-danger ms-4">Disable</button>
        </li> )
      }
    </ul>
    <h2 className='display-5 text-center text-info'>List of Sellers</h2>
    <ul className='text-center list-unstyled bg-secondary p-5'>
      {
        listOfSellers.map((seller)=><li className='text-warning fs-2'>{seller.username}
        <button className='btn btn-danger ms-4'>Disable</button>
        </li> )
      }
    </ul>
   </div>
   
 )

}

export default AdminProfile



// import React from 'react'
// import { LoginContextObj } from '../contexts/LoginContext'
// import axios from 'axios'
// import { useContext,useState,useEffect } from 'react'

// function AdminProfile() {
//   const {currentUser}=useContext(LoginContextObj)
//     const {listOfUsers,setListOfUsers}=useState([])
//     const[listOfSellers,setListOfSellers]=useState([])
    
//     async function getUsersAndSellers(){
//       let res1=await axios.get('http://localhost:3000/user-api/users')
//       setListOfUsers(res1.data.payload);
      
//       let res2=await axios.get('http://localhost:3000/seller-api/sellers');
//       setListOfSellers(res2.data.payload)
//      }

//      useEffect(()=>{
//       getUsersAndSellers();
//      },[]);

//      console.log(listOfSellers,listOfUsers)
    
//   return (
//     <div>
// <h1 className='text-center text-danger'>Admin Profile</h1>
// <h1 className='text-end text-primary'>Welcome {currentUser?.username}</h1>

// <h2 className='display-3 text-center text-info'>List of Users</h2>
//  {/* list of users & sellers */}
//     <ul className='text-center list-center bg-secondary p-5'>
//       {
//         listOfUsers.map((user)=><li className='text-warning fs-2'>{user.username}
//         <button className='btn btn-danger'>Disable</button>
//         </li>)
        
//       }
//     </ul>
//     <h2 className='display-3 text-center text-info'>List of Sellers</h2>
//  {/* list of users & sellers */}
//     <ul className='text-center list-unstyled bg-info p-5'>
//       {
//         listOfSellers.map((seller)=><li className='text-success fs-1'>{seller.username}</li>)
//       }
//     </ul>
//     </div>
//   )
// }

// export default AdminProfile
