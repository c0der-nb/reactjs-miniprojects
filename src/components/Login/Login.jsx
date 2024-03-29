import React, { useState } from 'react';
import styles from "./Login.module.css";

export default function Login() {
    const [userState, setUserState] = useState({
        username: "",
        password: "",
        isValidUser: true,
        loggedIn: false,
    });

    const validateForm = () => {
        if (!userState.username || !userState.password)
            return false;
        return true;
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if (validateForm()) {
            if (userState.username === "user" && userState.password === "password") {
                setUserState({...userState, isValidUser: true, loggedIn: true});
            }
            else {
                setUserState({...userState, isValidUser: false, loggedIn: false});
            }
        }
    }

    return (
        <div>
            <h2>Login Page</h2>
            {!userState.isValidUser && <p>Invalid username or password</p>}
            {!userState.loggedIn ? <form onSubmit={submitHandler}>
                <div>
                    <label for="username">Username:</label>
                    <input onChange={(e) => setUserState({...userState, username: e.target.value})} type="text" id="username" name="username" required />
                </div>
                <div>
                    <label for="password">Password:</label>
                    <input onChange={(e) => setUserState({...userState, password: e.target.value})} type="password" id="password" name="password" required />
                </div>
                <button className={styles['btn-submit']} type="submit">Submit</button>
            </form> : <p>Welcome, user!</p>}
        </div>
    )
}