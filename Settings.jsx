import './settings.css'
import Sidebar from "../../components/sidebar/Sidebar"

function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
               <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
               </div>
               <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                    <img 
                    className="writeImg"
                    src="https://scontent.fabb1-2.fna.fbcdn.net/v/t1.6435-9/p180x540/240655478_2301565683313341_4749110159868147449_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeGj9uTWFvwf-nGBBMFRIGyS0wplmnW3eTfTCmWadbd5N13PlnFv9QmHkznldoUHx4xbCNRzpvwEdupGyJ5J2aeY&_nc_ohc=y-zken7l_e4AX9jmUPf&_nc_ht=scontent.fabb1-2.fna&oh=be2638b3cd7a126045c8abef1b7899e0&oe=61664538"
                    alt=""
                    />
                    <label htmlFor="fileInput"></label>
                    <i className="settingsPPIcon far fa-user-circle"></i>
                    <input type="file" id="fileInput" style={{display: "none"}}/>   
                 </div>
                 <label>Username</label>
                 <input type="text" placeholder="Hero"/>  
                 <label>Email</label>
                 <input type="text" placeholder="Heroboypere@gmail.com"/>  
                 <label>Password</label>
                 <input type="password"/>  
                 <button className="settingsSubmit">Update</button>
               </form>
            </div>
            <Sidebar/>
        </div>
    )
}

export default Settings
