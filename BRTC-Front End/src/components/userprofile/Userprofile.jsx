
import './userprofile.css';

const UserProfile = () => {
  return (
    <div className="user-profile-container">
      <h2 className="user-profile-header">User Info</h2>
      <div className="user-profile-content">
        {/* Left Section */}
        <div className="user-profile-card">
          <h3 className="card-title">User Info</h3>
          <div className="user-info-item">
            <strong>Fullname</strong>
            <p>farhan karim</p>
          </div>
          <div className="user-info-item">
            <strong>Organization/Department</strong>
            <p>cuet</p>
          </div>
          <div className="user-info-item">
            <strong>Designation</strong>
            <p>student</p>
          </div>
          <div className="user-info-item">
            <strong>Contact Address/Billing Address</strong>
            <p>01939677373</p>
          </div>
          <div className="user-info-edit">
            <p>Edit</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="user-profile-card">
          <h3 className="card-title">UserName</h3>
          <div className="user-info-item">
            <strong>Email</strong>
            <p>sfkr@gmail.com</p>
          </div>
          <div className="user-info-item">
            <strong>PhoneNumber</strong>
            <p>01534111896</p>
          </div>
          <div className="user-info-item">
            <strong>Password</strong>
            <p>**********</p>
          </div>
          <div className="user-info-edit">
            <p>Change Password</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
