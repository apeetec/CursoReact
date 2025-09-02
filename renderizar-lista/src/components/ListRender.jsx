import React from 'react'
import { useState } from 'react'

const ListRender = () => {
    const [list] = useState(["Gabriel","Marcel","Renato"]);

    const [users,setUsers] = useState([
        {id:1,name:"Gabriel",age:101},
        {id:2,name:"Marcel",age:71},
        {id:3,name:"Renato",age:81},
    ]);
    const deleteRandom = () => {
        const  randomNumber = Math.floor(Math.random() * 4);
        setUsers ((prevUsers) => {
            console.log(prevUsers);
            return prevUsers.filter((user) => randomNumber !== user.id);       
        })      
    };
  return (
    <div>
        <ul>
            {list.map((item,i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name} - {user.age}</li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Deletar usuáriso aleatório</button>
    </div>

  )
}

export default ListRender