import { collection, doc, onSnapshot, orderBy, query,  } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./Firebase/firebase.init";
const TodoData = () => {
    const [todos , setTodos] = useState({})
    useEffect(() =>{
        const collectionRef = collection(db , "todos")
        const q = query(collectionRef , orderBy("number" , "desc"));
        const unsubscrible = onSnapshot(q, (querySnapshot) =>{
            setTodos(querySnapshot.docs.map(doc =>({...doc.data(), id:doc.id })))
        })
        return unsubscrible
    } ,[])
    console.log("todos app" , todos)
    return (
        <div>
            
        </div>
    );
};

export default TodoData;