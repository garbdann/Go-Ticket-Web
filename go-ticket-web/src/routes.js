import { createBrowserRouter, } from "react-router-dom";
import Login from './pages/login/Login';
import SignUp from './pages/signUp/SignUp';
import Home from './pages/home/Home';

const router = createBrowserRouter([
    { 
        path: "/", 
        element: <Login /> 
    },

    { 
        path: "/signUp", 
        element: <SignUp /> 
    },
    
    {
    path: "/home", 
        element: <Home /> 
    },
])

export default router