// src/components/UserTable.js
// import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection,getDoc,getDocs,updateDoc,deleteDoc,doc, addDoc } from "firebase/firestore";


// const UserTable = () => {
//   const [users, setUsers] = useState([]);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [age, setAge] = useState("");
//   const [gender, setGender] = useState("");
//   const [city, setCity] = useState("");

      const usersCollection = collection(db,'users');

      class userData{
        addUser = (newUser)=>{
          return addDoc(usersCollection,newUser);
        }

        updateUser = (id,updateUser)=>{
          const user = doc(db,"users",id);
          return updateDoc(user,updateUser)
        }
        
        deletuser= (id)=> {
          const user = doc(db,"users",id);
          return deleteDoc(user);
        }

        getAllUser = ()=>{
          return getDocs(usersCollection);
        }

        getUser = (id)=>{
          const user = doc(db,"users",id);
          return  getDoc(user);
        }
      }


//   // Render the table
//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Age</th>
//             <th>Gender</th>
//             <th>City</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user.id}>
//               <td>{user.name}</td>
//               <td>{user.email}</td>
//               <td>{user.age}</td>
//               <td>{user.gender}</td>
//               <td>{user.city}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

export default new userData;
