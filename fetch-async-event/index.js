import React, {useState, useEffect} from "react";
import {createRoot} from "react-dom/client";

function App() {
    const [users, setUsers] = useState();
    const [isLoading, setLoading] = useState(false)
    async function handleClick () {
        setLoading(true)
            try{
            const response = await fetch("https://react-tutorial-demo.firebaseio.com/users.json");
            const data = await response.json();
            setLoading(false);
            setUsers(data);
            } catch(err){
                console.error(err);
                setLoading(false)
            }
    }

    return (<>
        <button onClick={handleClick} disabled={isLoading}>Load users</button>
        <h1>Users</h1>
        <ul>
            {users && users.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
    </>);
}

createRoot(document.querySelector("#react-root")).render(<React.StrictMode><App /></React.StrictMode>);