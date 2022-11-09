import React, { useState } from 'react';
import './index.css';
import styles from './mystyle.module.css';
import axios from "axios";
import * as ReactBootstrap from "react-bootstrap";


const App = () => {
  const [loading, setLoading] = useState(false);


  const [users, setUser] = useState([]);

  const loadUsers = async () => {

    try{
    setLoading(true);
    console.log("before await");
    const response = await fetch('https://api.github.com/users');
    const jsonresponse = await response.json();
    setLoading(false);
    setUser(jsonresponse);
    }

    catch (error)
    {
      setLoading(false);
    }

    
  };

  return (
    <div className={styles.App}>
      <div className={styles.Nav}>
        <div className={styles.Title1}>Events API Fetcher</div>

        <div className={styles.NavLinks}>
          <div className={styles.Titlehome} id="Home">Home</div>
          <div className={styles.Titlecontact}>Contact Us</div>
          
        </div>
      </div>
      <div className={styles.btn}>
        <button onClick={loadUsers} className={styles.bttn}>GET{loading ?<ReactBootstrap.Spinner animation="grow" variant="dark" /> :null }</button>
      </div>
      <h2 className={styles.User}>Users:</h2>
      
      
      <ul>
      
        {users.map(({ id, login, node_id }) => (
          <div>
          <li key={id} className={styles.list}>

            <div className={styles.cont1}>
            <div className={styles.Name}>Name: </div>
            <div className={styles.Nameo}>{login}</div>
            </div>

            <div className={styles.cont2}>
            <div className={styles.Name}>Events Code:</div>
            <div className={styles.Nameo}> {node_id}</div>
            </div>
            <br></br>
            <br></br>
          </li> </div>
        ))}

      </ul>
      
    </div>
  )
}

export default App;