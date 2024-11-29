import './App.css'
import Counter from "./components/Counter.tsx";
import UserProfile from "./components/UserProfile.tsx";
import useUserInfo from "./hooks/useUserInfo.ts";
import LoginForm from "./components/LoginForm.tsx";

function App() {

    const user = useUserInfo()


    return (
        <>
            <UserProfile user={user}/>
            <Counter/>
            <LoginForm/>
        </>
    )
}

export default App
