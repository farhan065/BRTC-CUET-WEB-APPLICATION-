import { useState } from 'react';
import './dashmenu.css'
import Userprofile from '../userprofile/Userprofile';
import Password from '../password/Password';
import Order from '../order/Order';
import Report from '../report/Report';


const Dashmenu = () => {

  const [activeSection, setActiveSection] = useState('profile');
  const handleOptionClick = (section) => {
    setActiveSection(section);
  };
  return (
    <>
    
     <div className="deshmenu">
        <div className="inner-container">
        <div className="left-section">
          <h1>BRTC</h1>
          <ul>
            <li onClick={() => handleOptionClick('profile')}>User Profile</li>
            <li onClick={() => handleOptionClick('changePassword')}>Change Password</li>
            <li onClick={() => handleOptionClick('orders')}>List of Orders</li>
            <li  onClick={() => handleOptionClick('report')}>Download Report</li>
            <li >IICT Website</li>
          </ul>
        </div>
        <div className="right-section">
          {activeSection === 'profile' && <Userprofile/>}       {/* Render UserProfile Component */}
                {/* Render ListOrders Component */}
          {activeSection === 'changePassword' && <Password/>}
          {activeSection === 'orders' && <Order/>}
          {activeSection === 'report' && <Report/>}
        </div>
      </div>
      
    </div>
    </>
   
  )
}

export default Dashmenu
