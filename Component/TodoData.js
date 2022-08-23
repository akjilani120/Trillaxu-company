import { collection, doc, onSnapshot, orderBy, query, } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth, { db } from "./Firebase/firebase.init";
import TitleShow from "./TitleShow";
const TodoData = () => {
    const [todos, setTodos] = useState([])
    const [user] = useAuthState(auth)    
    useEffect(() => {
        const collectionRef = collection(db, "todos")
        const q = query(collectionRef, orderBy("email", "desc"));
        const unsubscrible = onSnapshot(q, (querySnapshot) => {
            setTodos(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
        })
        return unsubscrible
    }, [])   
    return (
        <div>
            <div className="todo-show">
                {
                    todos.map(todo => <TitleShow todo={todo} key={todo.id}/>)
                }
            </div>
        </div>
    );
};

export default TodoData;