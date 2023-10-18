import React from "react";
import { useState  , useEffect} from "react";
import userData from "./UserData";
import UserData from "./UserData";
import classes from "./addUser.module.css";

const AddUser = ({id , setUserId}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState({ error: false, msg: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (name === "" || email === "" || gender === "" || city === "") {
      setMessage({ error: true, msg: "all fields are mandatory" });
      return;
    }

    const newUser = {
      name,
      email,
      age,
      gender,
      city,
    };
    console.log(newUser);

    try {
        if(id!==undefined && id!==""){
            await userData.updateUser(id,newUser)
            setUserId("");
            setMessage({ error: false, msg: "new user added" });
        }
        else{
            await userData.addUser(newUser)
            setMessage({ error: false, msg: "new user added" });
        }
      
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setName("");
    setEmail("");
    setAge("");
    setGender("");
    setCity("");
  };

  const editHandler = async()=>{
        setMessage("");
        try{
            const userSnap = await UserData.getUser(id);
            setName(userSnap.data().name);
            setEmail(userSnap.data().email);
            setAge(userSnap.data().age);
            setGender(userSnap.data().gender);
            setCity(userSnap.data().city);
        }
        catch(err){
            setMessage({error:true,msg:err.message})
        }
  }

  useEffect(()=>{
    console.log(id);
    if(id!==undefined && id!==""){
        editHandler();
    }
  },[id])

  return (
    <div className={classes.div}  >
      <form onSubmit={handleSubmit} className={classes.group} >
        <input className={classes.placeholder}
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input className={classes.placeholder}
          type="mail"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input className={classes.placeholder}
          type="number"
          placeholder="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input className={classes.placeholder}
          type="text"
          placeholder="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
        <input className={classes.placeholder}
          type="text"
          placeholder="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className={classes.button} type="Submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
