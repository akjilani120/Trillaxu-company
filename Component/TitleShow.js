
import { deleteDoc, doc } from 'firebase/firestore';

import { db } from './Firebase/firebase.init';

const TitleShow = ({ todo }) => {
    const { name, email, number, address, id } = todo
    const handleDelete = async (id) =>{
        const docRef = doc(db , "todos", id);
        await deleteDoc(docRef)
        alert(`Are you sure delete ${id}`)
    }
    return (
        <div className='single-todo'>
            <h5>Name:  {name}</h5>
            <h5>Email:  {email}</h5>
            <h5>Number: {number}</h5>
            <h5>Address: {address}</h5>
            <h5><button onClick={()=>handleDelete(id)} className='delete-btn'>Delete</button></h5>
        </div>
    );
};

export default TitleShow;