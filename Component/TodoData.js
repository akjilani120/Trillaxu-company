import { collection, doc, onSnapshot, orderBy, query, } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./Firebase/firebase.init";
import TitleShow from "./TitleShow";
const TodoData = () => {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        const collectionRef = collection(db, "todos")
        const q = query(collectionRef, orderBy("email", "desc"));
        const unsubscrible = onSnapshot(q, (querySnapshot) => {
            setTodos(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
        })
        return unsubscrible
    }, [])
    console.log("todos app", todos)
    return (
        <div>
            <table>
                <tr>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Country</th>
                </tr>
                 
                <tbody>
                    {
                        todos.map(todo => <TitleShow todo={todo} key={todo.id}/>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default TodoData;