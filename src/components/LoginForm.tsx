import {useState} from "react";


const LoginForm = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSubmit = async () => {
        await fetch('/', {
            method: 'POST',
            body: JSON.stringify({
                username,
                password,
            })
        })
        setIsLoggedIn(true);
    }


    if (isLoggedIn)
        return <div data-testid="login-result">

            {
                isLoggedIn &&
                <div>
                    you are logged in
                </div>
            }
        </div>

    return (<div style={{border: '1px solid red'}}>
            {
                !isLoggedIn && <div>
                    <input type="text" data-testid="username" placeholder="username"
                           onChange={(e) => setUsername(e.target.value)}
                           value={username}/>
                    <input type="text" data-testid="password" placeholder="password"
                           onChange={(e) => setPassword(e.target.value)}
                           value={password}/>

                    <button data-testid="submit-button" onClick={handleSubmit}>submit</button>
                </div>
            }


        </div>
    )
}


export default LoginForm