
import { UserContext } from "../UserContext"
import { useContext } from "react"

const Header =()=>{

    const mystery=useContext(UserContext)

return(
    <header>
    <h1>Hot off the Press News</h1>
    <p>Logged in as {mystery.user.username}</p>
    </header>
)
}

export default Header;