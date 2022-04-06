
import { useContext } from "react";
import { Context } from "./App";


const BackPage = () => {

    const MyContext = useContext(Context);
    return(
        <div>
            <p> Words! </p>
        </div>
    )
}

export default BackPage;