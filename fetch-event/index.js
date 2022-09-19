import React, {useState} from "react";
import {createRoot} from "react-dom/client";

function App() {
    const [users, setUsers] = useState();
    const [isLoading, setLoading] = useState(false)
    function handleClick(){
        setLoading(true)
        fetch("https://react-tutorial-demo.firebaseio.com/users.json").then(response => response.json()).then(data =>{ 
            if(data){
                setUsers(data)
            }
        }).catch(error => {
            console.error(error)}).finally(()=> {
            setLoading(false)
        })
    }
    return (<>
        <button disabled={isLoading} onClick={handleClick}>Load users</button>
        <h1>Users</h1>
        <ul>
            {users && users.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
    </>);
}

createRoot(document.querySelector("#react-root")).render(<React.StrictMode><App /></React.StrictMode>);