import { Link, NavLink } from "react-router-dom";

function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="navbarDiv">
                <NavLink style={({ isActive }) => {
                        return isActive ? { color: "plum" } : {};
                    }} to={"/"}>Anasayfa</NavLink>
                    <NavLink style={({ isActive }) => {
                        return isActive ? { color: "plum" } : {};
                    }} to={"/watched"}>İzlediklerim</NavLink>
                    <NavLink style={({ isActive }) => {
                        return isActive ? { color: "plum" } : {};
                    }} to={"/watch"}>İzleyeceklerim</NavLink>
                    <NavLink style={({ isActive }) => {
                        return isActive ? { color: "plum" } : {};
                    }} to={"/add"} ><button>+</button></NavLink>
                </div>
            </div>
        </>
    );
}

export default Navbar;