import "./password.css"

const Password = () => {
    return(
    <div className="set-password-container">
    {/* Page Title */}
    <h2 className="page-title">Set Password</h2>
    <div className="breadcrumb">
      <span>Users</span> &gt; <span>Set Password</span>
    </div>

    {/* Form Container */}
    <div className="set-password-card">
      <h3 className="form-header">Set Password</h3>

      {/* Changing Password For */}
      <div className="form-row">
        <label>Changing Password For</label>
        <span>Farhan</span>
      </div>

      {/* New Password */}
      <div className="form-row">
        <label>New password</label>
        <input
          type="password"
          placeholder="Enter new password"
          className="input-field"
        />
      </div>

      {/* Confirm New Password */}
      <div className="form-row">
        <label>Confirm new password</label>
        <input
          type="password"
          placeholder="Confirm new password"
          className="input-field"
        />
      </div>

      {/* Buttons */}
      <div className="form-buttons">
        <button className="btn btn-change">Change</button>
        <button className="btn btn-cancel">Cancel</button>
      </div>
    </div>
  </div>
    )
}

export default Password
