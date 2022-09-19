import React, {useEffect, useState} from "react";
import {createRoot} from "react-dom/client";
import Loader from "./Loader.js"

function App() {
    const [users, setUsers] = useState();
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetch("https://react-tutorial-demo.firebaseio.com/users.json")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data) {
                setUsers(data);
            }
        }).catch(error => {
            console.error(error)
        }).finally(() =>{
            setLoading(false)
        })
    }, []);
        if (isLoading) {
        return <Loader/>;
    }

    return <>
        <h1>Users</h1>
        <ul>
            {users && users.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
    </>;
}

createRoot(document.querySelector("#react-root")).render(<React.StrictMode><App /></React.StrictMode>);