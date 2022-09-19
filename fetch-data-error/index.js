import React, {useState, useEffect} from "react";
import {createRoot} from "react-dom/client";

function App() {
  const [users, setUsers] = useState();

  useEffect(() => {
    fetch("https://react-tutorial-demo.firebaseio.com/users.json")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        setUsers(data);
    });
  }, []);
  if(!users){
    return <h1>LOADING...</h1>
  }
  return <>
    <h1>Users ({users.length})</h1>
    <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  </>
}

createRoot(document.querySelector("#react-root")).render(<React.StrictMode><App /></React.StrictMode>);