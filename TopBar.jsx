import "./topbar.css"
import { Link } from "react-router-dom";


const Topbar = () => {
    const user = false;
    return (
        <div className="top">
           <div className="topLeft">
           <i className="topIcon fab fa-facebook-square"></i>
           <i className="topIcon fab fa-twitter-square"></i>
           <i className="topIcon fab fa-pinterest-square"></i>
           <i className="topIcon fab fa-instagram-square"></i>
           </div>
           <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                    <Link className="link" to="/" >HOME</Link></li>
                    <li className="topListItem"><Link className="link" to="/about" >ABOUT</Link></li>
                    <li className="topListItem"> <Link className="link" to="/contact" >CONTACT</Link></li>
                    <li className="topListItem"> <Link className="link" to="/write" >WRITE</Link></li>
                    <li className="topListItem"> {user && "LOGOUT"}</li>
                </ul>
           </div>
           <div className="topRight">
           {
               user ? (
                <img 
                className="topImg"
                src="https://assets.imgix.net/hp/snowshoe.jpg?auto=compress&w=900&h=600&fit=crop&__hstc=158051173.353c80b5e2d1483b259aca731b8170d6.1631805846163.1631805846163.1631805846163.1&__hssc=158051173.3.1631805846164&__hsfp=751054564"
                alt=""
                />
               ):(
                    <ul className="topList">
                        <li className="topListItem">
                             <Link className="link" to="/login" >LOGIN</Link> 
                        </li>
                        <li className="topListItem">
                              <Link className="link" to="/register" >REGISTER</Link>
                         </li>
                       
                </ul>
                )}
           
                <i className="topSearchIcon fas fa-search"></i>
           </div>

        </div>
    );
}

export default Topbar
