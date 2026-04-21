import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function SideBar() {
    const currentUser = useContext(CurrentUserContext);

    return <div className="sidebar">{currentUser ? currentUser.name : ""}</div>;
}

export default SideBar;