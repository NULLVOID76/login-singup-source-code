import { useState, useEffect } from "react";
import { Home, SignIn, SignUp, Admin,LoggedIn } from "./components";
import {
  Route,
  HashRouter,
  RouterProvider,
  createBrowserRouter,
  createHashRouter,
  createRoutesFromElements,
  BrowserRouter,
} from "react-router-dom";
import { UserProvider } from "./context/userContext";

const router = createHashRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="admin" element={<Admin />} />
      <Route path="in" element={<LoggedIn />} />
    </>
  )
);
function App() {
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState(false);
  
  const logIn = (email, password) => {
    users.map((user) =>
      user.email === email && user.password === password
        ? setStatus(true)
        : setStatus(false)
    );
  };
  const logOut = () => {
    setStatus(false);
  };
  const signUp = (newUser) => {
    setUsers((pervUsers) => [newUser, ...pervUsers]);
    setStatus(false);    
  };

  // useEffect(()=>{
  // //   if(status)
  // //   console.log("loggedIN");
  // // else
  // // console.log("not logged in");
  // },[status])
 
    useEffect(() => {
      const userLocal = JSON.parse(localStorage.getItem("users"));
      if (userLocal && userLocal.length > 0) {
        setUsers(userLocal);
      }
    }, []);
    useEffect(() => {
 
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);
  
  return (
    <UserProvider value={{ users, logIn, logOut, signUp }}>
      <RouterProvider router={router} />
    </UserProvider>
  );
}

export default App;
