import { createContext } from "react";

export const UserContext = createContext()

export const UserProvider = ({children}) =>{

    const user ={username: "catherine", user: "guest", avatar_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAdCuUIcb6bwhkW6Tda95H2-m5oLHdcaciAg&s"}

    return <UserContext.Provider value={{user: user}}>{children}</UserContext.Provider>
    }