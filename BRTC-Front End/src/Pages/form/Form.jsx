import { useState } from 'react';
import "./form.css"

const MaterialTestingForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    contactNumber: '',
    emailAddress: '',
    materialType: '',
    materialDescription: '',
    testingPurpose: '',
    file: null,
    termsAccepted: false,
    privacyAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="form-container">
      <h1>Material Testing Application Form</h1>
      <p>Please fill out the form to submit materials for testing.</p>

      <form onSubmit={handleSubmit} className="testing-form">
        {/* Full Name */}
        <div className="form-field">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
        </div>

        {/* Company Name */}
        <div className="form-field">
          <label htmlFor="companyName">Company Name</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Enter your company name"
            required
          />
        </div>

        {/* Contact Number */}
        <div className="form-field">
          <label htmlFor="contactNumber">Contact Number</label>
          <input
            type="text"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            placeholder="Enter your contact number"
            required
          />
        </div>

        {/* Email Address */}
        <div className="form-field">
          <label htmlFor="emailAddress">Email Address</label>
          <input
            type="email"
            id="emailAddress"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={handleChange}
            placeholder="Enter your email address"
            required
          />
        </div>

        {/* Material Type */}
        <div className="form-field">
          <label htmlFor="materialType">Material Type</label>
          <select
            id="materialType"
            name="materialType"
            value={formData.materialType}
            onChange={handleChange}
            required
          >
            <option value="">Select material type</option>
            <option value="steel">Steel</option>
            <option value="concrete">Concrete</option>
            <option value="asphalt">Asphalt</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Material Description */}
        <div className="form-field">
          <label htmlFor="materialDescription">Material Description</label>
          <textarea
            id="materialDescription"
            name="materialDescription"
            value={formData.materialDescription}
            onChange={handleChange}
            placeholder="Provide a brief description of the material"
            required
          ></textarea>
        </div>

        {/* Testing Purpose */}
        <div className="form-field">
          <label htmlFor="testingPurpose">Testing Purpose</label>
          <select
            id="testingPurpose"
            name="testingPurpose"
            value={formData.testingPurpose}
            onChange={handleChange}
            required
          >
            <option value="">Select testing purpose</option>
            <option value="strength">Strength Test</option>
            <option value="durability">Durability Test</option>
            <option value="environmental">Environmental Test</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* File Upload */}
        <div className="form-field">
          <label htmlFor="file">Upload Material Sample or Documents</label>
          <input
            type="file"
            id="file"
            name="file"
            onChange={handleFileChange}
            accept=".pdf, .doc, .jpg, .png"
          />
        </div>

        {/* Terms and Conditions */}
        <div className="form-field">
          <label>
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              required
            />
            I agree to the terms and conditions
          </label>
        </div>

        {/* Privacy Policy */}
        <div className="form-field">
          <label>
            <input
              type="checkbox"
              name="privacyAccepted"
              checked={formData.privacyAccepted}
              onChange={handleChange}
              required
            />
            I accept the privacy policy
          </label>
        </div>

        {/* Submit Button */}
        <div className="form-field">
          <button type="submit" className="submit-button">
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default MaterialTestingForm;
