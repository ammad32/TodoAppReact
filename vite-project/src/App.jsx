import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { collection, addDoc, setDoc, doc, getDocs, updateDoc, deleteDoc } from "firebase/firestore"; 
import { db } from './firebase';


function App() {
  const [refresh , setrefresh] = useState(false); 
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [userData ,setUserData] = useState([]);


const AddData =async ()=>{
 try {
  const userobj = {
    name: 'ammaad khan',
 }

// auto generated id
  //  const refes = await addDoc(collection(db, "users"), userobj);
  //  console.log(refes,"refes")

  // khd ki banie hoi id
  const ref = await setDoc(doc(db,"Users","abcd"), userobj);
  console.log(ref,"ref")
 } catch (error) {
  console.log (error, "error")
 }

}



useEffect(()=>{
  getData()
},[refresh]);

const getData = async ()=>{
  try { 
    const array = [];
    const docSnap = await getDocs(collection(db, "users"));
  
    docSnap.forEach((doc)=>{
      // console.log("doc", doc.data());
      // console.log("id", doc.id  )
      array.push({
        ...doc.data(),
        id: doc.id , 
      });

     
    });
    // console.log("arr", arr)
    setUserData([...array]);
  } catch (error) {
    console.log (error, "error")
  }
};

console.log("userData" , userData) ;

const handleSubmit = async (ele)=>{
try {
  ele.preventDefault();
  console.log("handleSubmit")

  const userObject = {
    firstName, 
   
  };

  console.log("handlSubmit" , userObject)
  const docRef = await addDoc(collection(db,"users"), userObject) 
console.log("docRef", docRef  )  


setfirstName("");

setrefresh(!refresh);

} catch (error) {
  console.log (error, "error")
}


}


const Editdata = async(id)=>{
  console.log("Editdata", id)
  const editVal  = prompt("enter dirst name")
  const userObj = {
    firstName: editVal,
  };
  await updateDoc(doc(db, "users", id) , userObj);
  setrefresh(!refresh);
 
};


const deletedata = async(id)=>{
  console.log("Editdata");
  const delData = alert("are you sure you want to delete");
  const userObj = {
    firstName: delData,
  };
  await deleteDoc(doc(db, "users", id), userObj);
  setrefresh(!refresh);
}
// console.log("firstname", firstName)
  return (   
    <>
     <h1 className='heading'>Todo Application </h1>
     {/* <button onClick={AddData}>click</button> */}
<div className='form-container'>
      <form onSubmit={handleSubmit} className='form' >
        <input type="text" className='inputF'   value={firstName} placeholder='Your List'  onChange={(e)=>setfirstName(e.target.value)} />
        {/* <input type="text"  placeholder='last Name' onChange={(e)=>setlastName(e.target.value)}/>
        <input type="text"  placeholder=' Email' onChange={(e)=>setemail(e.target.value)}/> */}
        <button className='form-submit-btn'>Add</button>
      </form>

      <div className='todo-list-container'>
  <ul>
    {userData.map((user, index) => (
      <li key={index}>
        {user.firstName}{' '}
        <button className='btn' onClick={() => Editdata(user.id)}>
          Edit
        </button>{' '}
        <button className='btn' onClick={() => deletedata(user.id)}>
          Delete
        </button>
      </li>
    ))}
  </ul> 
</div>
     
  </div>

    </>
  )
}

export default App
