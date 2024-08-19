import React, { useState } from "react";

export default function Login({ allowDashboard }) {
    const [userval, setUserValue] = useState('');
    const [passval, setPassValue] = useState('');

    const storeuser = (event) => {
        setUserValue(event.target.value);
    };

    const storepass = (event) => {
        setPassValue(event.target.value);
    };

    const handlelogin = async (e) => {
        e.preventDefault();

        // Create the JSON data
        const loginData = {
            username: userval,
            password: passval
        };

        try {
            const response = await fetch('http://127.0.0.1:8000/gettoken', {  // Use /gettoken endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });

            const data = await response.json();

            if (response.ok) {
                console.log("Login successful:", data);
                console.log("Access Token:", data.access);  // Print the access token
                console.log("Refresh Token:", data.refresh); // Print the refresh token
                allowDashboard(); // Redirect to dashboard
            } else {
                console.log("Login failed:", data);
                // Handle error response here
            }
        } catch (error) {
            console.error("Error during login:", error);
        }
    };

    return (
        <div className="mainlogin">
            <div className="Logincontent">
                <div className="Logincontainer">
                    <h2>Login</h2>
                    <form onSubmit={handlelogin}>
                        <label htmlFor="email">Username:</label>
                        <input
                            type='text'
                            id="email"
                            name="email"
                            value={userval}
                            onChange={storeuser}
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={passval}
                            onChange={storepass}
                        />

                        <button type="submit">Login</button>
                    </form>

                    <div className="signup">
                        <p>First time here?</p>
                        <a href="/">Sign up</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
