import { useContext } from "react";
import { Context } from "./App";


const FrontPage = () => {

    const MyContext = useContext(Context);
    console.log(Context)

    return(
        <div>
            <p> Words!</p>
        </div>
    )
}

export default FrontPage;