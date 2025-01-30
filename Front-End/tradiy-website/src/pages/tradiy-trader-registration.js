import React, { useState, useEffect } from 'react';
import "../styles/RegForm.css";
import TradiyLogo from "../images/tradiy-navy-seal.png"
import Drilling from "../images/drilling.jpg";
import { FaTimes } from 'react-icons/fa';  // Import the FaTimes icon
import { AiOutlineFileImage, AiOutlineFilePdf, AiOutlineFileText, AiOutlineDelete } from 'react-icons/ai'; 

// Main Registration Form component
const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    // Load saved data from localStorage when the component mounts
    const savedData = JSON.parse(localStorage.getItem('registrationForm'));
    if (savedData) {
      setFormData(savedData);
    } else {
      setFormData({});  // Initialize with empty data if nothing is saved
    }
  }, []);  // This runs once on mount

  // Save data to localStorage
  const saveFormData = (key, value) => {
    const updatedData = { ...formData, [key]: value };
    setFormData(updatedData);
    localStorage.setItem('registrationForm', JSON.stringify(updatedData));
  };

  // Save and Continue for Later button action
  const saveForLater = () => {
    localStorage.setItem('registrationForm', JSON.stringify(formData));
    alert('Your progress has been saved!');
  };

  // Clear form data and reset localStorage
  const clearData = () => {
    localStorage.removeItem('registrationForm');  // Remove saved data from localStorage
    setFormData({});  // Clear form data in state
    alert('Form data has been cleared.');
  };

  // Navigate to the next step
  const goNext = () => {
    setStep((prevStep) => Math.min(prevStep + 1, 11));
  };

  // Navigate to the previous step
  const goBack = () => setStep((prevStep) => Math.max(prevStep - 1, 1));

  return (
    <div className="form-container">
      {/* Form steps */}
      {step === 1 && <Step1 formData={formData} onSave={saveFormData} onNext={goNext} currentStep={1} totalSteps={9} />}
      {step === 2 && <Step2 formData={formData} onSave={saveFormData} onBack={goBack} onNext={goNext} currentStep={2} totalSteps={9} />}
      {step === 3 && <Step3 formData={formData} onSave={saveFormData} onBack={goBack} onNext={goNext} currentStep={3} totalSteps={9} />}
      {step === 4 && <Step4 formData={formData} onSave={saveFormData} onBack={goBack} onNext={goNext} currentStep={4} totalSteps={9} />}
      {step === 5 && <Step5 formData={formData} onSave={saveFormData} onBack={goBack} onNext={goNext} currentStep={5} totalSteps={9} />}
      {step === 6 && <Step6 formData={formData} onSave={saveFormData} onBack={goBack} onNext={goNext} currentStep={6} totalSteps={9} />}
      {step === 7 && <Step7 formData={formData} onSave={saveFormData} onBack={goBack} onNext={goNext} currentStep={7} totalSteps={9} />}
      {step === 8 && <Step8 formData={formData} onSave={saveFormData} onBack={goBack} onNext={goNext} currentStep={8} totalSteps={9} />}
      {step === 9 && <Step9 formData={formData} onSave={saveFormData} onBack={goBack} onNext={goNext} currentStep={9} totalSteps={9} />}
      {step === 10 && <Step10 formData={formData} onNext={goNext} saveForLater={saveForLater} />}
      <button onClick={clearData} className="clear-button">Clear Form Data</button>
    </div>
  );
};

// Step 1
const Step1 = ({ formData, onSave, onNext, saveForLater, currentStep, totalSteps }) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="regForm-step-container">
      <div className="regForm-content">
        {/* Left Side - Form */}
        <div className="regForm-form-container">
          {/* Fixed Header */}
          <div className="regForm-header">
            <img className='regForm-logo' src={TradiyLogo} alt='Tradiy Logo' />
            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: `${progress}%` }}></div>
            </div>
            <h2>Business Details</h2>
          </div>

          {/* Scrollable Form Content */}
          <div className="regForm-input-wrapper">
            <div className="regForm-input-group">
              <label htmlFor="businessName" className="regForm-label">Business Name</label>
              <input
                id="businessName"
                type="text"
                placeholder="e.g., Fisher’s Plumbing Services Ltd"
                value={formData.businessName || ''}
                onChange={(e) => onSave('businessName', e.target.value)}
                className="regForm-input"
                style={{fontFamily : '"Hanken Grotesk", "Arial"', color: "#000839"}}
              />
            </div>

            <div className="regForm-input-group">
              <label htmlFor="businessOwner" className="regForm-label">Business Owner</label>
              <input
                id="businessOwner"
                type="text"
                placeholder="(matching Photo ID) e.g., Edward Fisher"
                value={formData.businessOwner || ''}
                onChange={(e) => onSave('businessOwner', e.target.value)}
                className="regForm-input"
                style={{fontFamily : '"Hanken Grotesk", "Arial"', color: "#000839"}}
              />
            </div>

            <div className="regForm-input-group">
              <label htmlFor="businessAddress" className="regForm-label">Business Address</label>
              <input
                id="businessAddress"
                type="text"
                placeholder="House Number, Street Name, Locality Name, Town, Postcode"
                value={formData.businessAddress || ''}
                onChange={(e) => onSave('businessAddress', e.target.value)}
                className="regForm-input"
                style={{fontFamily : '"Hanken Grotesk", "Arial"', color: "#000839"}}
              />
            </div>

            <div className="regForm-input-group">
              <label htmlFor="businessNumber" className="regForm-label">Business Phone Number</label>
              <input
                id="businessNumber"
                type="text"
                placeholder="Business Phone Number *"
                value={formData.businessNumber || ''}
                onChange={(e) => onSave('businessNumber', e.target.value)}
                className="regForm-input"
                style={{fontFamily : '"Hanken Grotesk", "Arial"', color: "#000839"}}
              />
            </div>

            <div className="regForm-input-group">
              <label htmlFor="traderCategory" className="regForm-label">Trader Category</label>
              <div className="regForm-select-wrapper">
                <select
                  id="traderCategory"
                  value={formData.traderCategory || ''}
                  onChange={(e) => onSave('traderCategory', e.target.value)}
                  className="regForm-select"
                  style={{fontFamily : '"Hanken Grotesk", "Arial"', color: "#000839"}}
                >
                  <option value="" >Choose the main trade your business covers</option>
                  <option value="Option 1">Option 1</option>
                  <option value="Option 2">Option 2</option>
                  <option value="Option 3">Option 3</option>
                  <option value="Option 4">Option 4</option>
                  <option value="Option 5">Option 5</option>
                </select>
              </div>
            </div>
          </div>

          {/* Fixed Footer Buttons */}
          <div className="regForm-button-container">
            <button onClick={saveForLater} className="regForm-button">Save and Continue for Later</button>
            <button onClick={onNext} className="regForm-button">Next</button>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="regForm-image-container">
          <img src={Drilling} alt="Business Registration Illustration" />
        </div>
      </div>
    </div>
  );
};

// Step 2
const Step2 = ({ onNext, onBack, formData, onSave, saveForLater, currentStep, totalSteps }) => {
  const progress = (currentStep / totalSteps) * 100;
  const [isVatRegistered, setIsVatRegistered] = useState(formData.isVatRegistered || false);

  const handleVatChange = (e) => {
    const value = e.target.value === 'yes';
    setIsVatRegistered(value);
    onSave('isVatRegistered', value);
  };

  return (
    <div className="regForm-step-container">
      <div className="regForm-content">
        {/* Left Side - Form */}
        <div className="regForm-form-container">
          {/* Fixed Header */}
          <div className="regForm-header">
            <img className='regForm-logo' src={TradiyLogo} alt='Tradiy Logo' />
            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: `${progress}%` }}></div>
            </div>
            <h2>Business Information</h2>
          </div>

          {/* Scrollable Form Content */}
          <div className="regForm-input-wrapper">
            <div className="regForm-input-group">
              <label htmlFor="companyType" className="regForm-label">Company Type</label>
              <div className="regForm-select-wrapper">
                <select
                  id="companyType"
                  value={formData.companyType || ''}
                  onChange={(e) => onSave('companyType', e.target.value)}
                  className="regForm-select"
                  style={{fontFamily : '"Hanken Grotesk", "Arial"', color: "#000839"}}
                >
                  <option value="">Choose your company type</option>
                  <option value="Option 1">Option 1</option>
                  <option value="Option 2">Option 2</option>
                  <option value="Option 3">Option 3</option>
                  <option value="Option 4">Option 4</option>
                  <option value="Option 5">Option 5</option>
                </select>
              </div>
            </div>

            <div className="regForm-input-group">
              <label htmlFor="websiteURL" className="regForm-label">Website</label>
              <input
                id="websiteURL"
                type="text"
                placeholder="e.g., www.fishersplumbing.com"
                value={formData.websiteURL || ''}
                onChange={(e) => onSave('websiteURL', e.target.value)}
                className="regForm-input"
                style={{fontFamily : '"Hanken Grotesk", "Arial"', color: "#000839"}}
              />
            </div>

            <div className="regForm-input-group">
              <label htmlFor="calloutCharge" className="regForm-label">Callout Charge</label>
              <input
                id="calloutCharge"
                type="text"
                placeholder="e.g., £50"
                value={formData.calloutCharge || ''}
                onChange={(e) => onSave('calloutCharge', e.target.value)}
                className="regForm-input"
                style={{fontFamily : '"Hanken Grotesk", "Arial"', color: "#000839"}}
              />
            </div>

            <div className="regForm-input-group">
              <p className="regForm-label">Are you VAT Registered?</p>
              <div className="regForm-radio-group">
                <label className="regForm-radio-label">
                  <input
                    type="radio"
                    name="vatRegistered"
                    value="yes"
                    checked={isVatRegistered === true}
                    onChange={handleVatChange}
                    className="regForm-radio"
                    style={{fontFamily : '"Hanken Grotesk", "Arial"', color: "#000839"}}
                  />
                  Yes
                </label>
                <label className="regForm-radio-label">
                  <input
                    type="radio"
                    name="vatRegistered"
                    value="no"
                    checked={isVatRegistered === false}
                    onChange={handleVatChange}
                    className="regForm-radio"
                    style={{fontFamily : '"Hanken Grotesk", "Arial"', color: "#000839"}}
                  />
                  No
                </label>
              </div>
            </div>

            {isVatRegistered && (
              <div className="regForm-input-group">
                <label htmlFor="vatNumber" className="regForm-label">VAT Number</label>
                <input
                  id="vatNumber"
                  type="text"
                  placeholder="Enter your VAT Number"
                  value={formData.vatNumber || ''}
                  onChange={(e) => onSave('vatNumber', e.target.value)}
                  className="regForm-input"
                  style={{fontFamily : '"Hanken Grotesk", "Arial"', color: "#000839"}}
                />
              </div>
            )}
          </div>

          {/* Fixed Footer Buttons */}
          <div className="regForm-button-container">
            <button onClick={onBack} className="regForm-button">Back</button>
            <button onClick={saveForLater} className="regForm-button">Save and Continue for Later</button>
            <button onClick={onNext} className="regForm-button">Next</button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="regForm-image-container">
          <img src={Drilling} alt="Business Information Illustration" />
        </div>
      </div>
    </div>
  );
}; 

// Step 3
const Step3 = ({ onNext, onBack, formData, onSave, saveForLater, currentStep, totalSteps }) => {
  // Ensure formData.services is initialized with one empty string if it's empty
  const [services, setServices] = useState(formData?.services?.length > 0 ? formData.services : ['']);
  const maxServices = 10;  // Define the maximum limit for services

  const progress = (currentStep / totalSteps) * 100;

  const handleAddService = () => {
    if (services.length < maxServices) {
      setServices([...services, '']); // Add a new empty input field
    }
  };

  const handleChangeService = (index, value) => {
    const updatedServices = [...services];
    updatedServices[index] = value;
    setServices(updatedServices);
    onSave('services', updatedServices); // Save updated services data
  };

  const handleDeleteService = (index) => {
    const updatedServices = services.filter((_, idx) => idx !== index); // Remove the selected input field
    setServices(updatedServices);
    onSave('services', updatedServices); // Save updated services data after deletion
  };

  return (
    <div className="regForm-step-container">
      <div className="regForm-content">
        {/* Left Side - Form */}
        <div className="regForm-form-container">
          {/* Fixed Header */}
          <div className="regForm-header">
            <img className="regForm-logo" src={TradiyLogo} alt="Tradiy Logo" />
            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: `${progress}%` }}></div>
            </div>
            <div className="h2-skip-wrapper">
              <h2>Business Information</h2>
              <p
                className="skip-text"
                onClick={onNext}
                style={{ cursor: 'pointer', color: '#000839', textDecoration: 'underline' }}
              >
                Skip for now
              </p>
            </div>
          </div>

          {/* Scrollable Form Content */}
          <div className="regForm-input-wrapper">
            <div className="regForm-input-group">
              <p className="regForm-label">Services Provided</p>
              {services.map((service, index) => (
                <div key={index} className="regForm-input-group-services" style={{ position: 'relative' }}>
                  <input
                    type="text"
                    placeholder={`Service ${index + 1}`}
                    value={service}
                    onChange={(e) => handleChangeService(index, e.target.value)}
                    className="regForm-input"
                    style={{fontFamily : '"Hanken Grotesk", "Arial"', color: "#000839"}}
                  />
                  {/* Delete Button (X) with FaTimes icon */}
                  {index > 0 && ( // Hide delete button for the first input
                    <button onClick={() => handleDeleteService(index)} className="regForm-x-button">
                      <FaTimes /> {/* Using FaTimes icon */}
                    </button>
                  )}
                </div>
              ))}

              {/* Add Service Button */}
              {services.length < maxServices ? (
                <button onClick={handleAddService} className="regForm-button-add-service">
                  + Add Service
                </button>
              ) : (
                <p className="max-limit-message" style={{ color: 'red' }}>
                  Maximum input limit reached
                </p>
              )}
            </div>
          </div>

          {/* Fixed Footer Buttons */}
          <div className="regForm-button-container">
            <button onClick={onBack} className="regForm-button">Back</button>
            <button onClick={saveForLater} className="regForm-button">Save and Continue for Later</button>
            <button onClick={onNext} className="regForm-button">Next</button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="regForm-image-container">
          <img src={Drilling} alt="Services Illustration" />
        </div>
      </div>
    </div>
  );
};
  
// Step 4
const Step4 = ({ onNext, onBack, formData, onSave, saveForLater, currentStep, totalSteps }) => {
  const [modalType, setModalType] = React.useState(null);
  const [uploadedFiles, setUploadedFiles] = React.useState({
    "Business Logo": [],
    "Work Images": [],
    "Certifications": [],
  });

  const handleDrop = (event, type) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);
    handleFileUploadLogic(files, type);
  };

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    handleFileUploadLogic(files, modalType);
  };

  const handleFileUploadLogic = (files, type) => {
    const maxSize = 5 * 1024 * 1024; // 5MB
    const validFiles = files.filter(file => file.size <= maxSize);
    
    setUploadedFiles((prev) => {
      if (type === "Business Logo") {
        return { ...prev, [type]: validFiles.slice(0, 1) };
      } else {
        return { ...prev, [type]: [...prev[type], ...validFiles].slice(0, 10) };
      }
    });
  };

  const handleDelete = (fileIndex) => {
    setUploadedFiles((prev) => ({
      ...prev,
      [modalType]: prev[modalType].filter((_, index) => index !== fileIndex),
    }));
  };

  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="regForm-step-container">
      <div className="regForm-content">
        <div className="regForm-form-container">
          <div className="regForm-header">
            <img className="regForm-logo" src={TradiyLogo} alt="Tradiy Logo" />
            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: `${progress}%` }}></div>
            </div>
            
            <div className="h2-skip-wrapper">
              <h2>List Your Business</h2>
              <p
                className="skip-text"
                onClick={onNext}
                style={{ cursor: 'pointer', color: '#000839', textDecoration: 'underline' }}
              >
                Skip for now
              </p>
            </div>
          </div>

          <div className="regForm-file-upload-buttons">
            {Object.keys(uploadedFiles).map((type) => (
              <div key={type} className="regForm-input-group">
                <p className="regForm-label">{type}</p>
                <button onClick={() => setModalType(type)} className="regForm-button">+ Upload</button>

                {/* Display different descriptions for each type */}
                {type === "Business Logo" && (
                  <p className="regForm-description">High-quality image of your logo.</p>
                )}
                {type === "Work Images" && (
                  <p className="regForm-description">Showcase past work. (Up to 10 images, max 5MB each)</p>
                )}
                {type === "Certifications" && (
                  <p className="regForm-description">Proof of qualifications (e.g., Gas Safe, NICEIC).</p>
                )}
              </div>
            ))}
          </div>

          {modalType && (
            <div className="regForm-modal-overlay">
              <div className="regForm-modal-content">
                <div className="regForm-modal-header">
                  <h3 className="regForm-modal-heading">Upload Files</h3>
                  <button onClick={() => setModalType(null)} className="regForm-close-button">&times;</button>
                </div>
                <div
                  className="regForm-drag-and-drop-container"
                  onDrop={(e) => handleDrop(e, modalType)}
                  onDragOver={(e) => e.preventDefault()}
                >
                  <p className="regForm-modal-description">Please upload your {modalType}</p>
                  
                  {/* Custom file input */}
                  <label htmlFor="fileInput" className="regForm-custom-button">
                    Drag & drop to upload<br />
                    <span className="browse-text">or browse</span> {/* Wrapped in a span for styling */}
                  </label>
                  <input
                    id="fileInput"
                    type="file"
                    onChange={handleFileUpload}
                    accept="image/*"
                    multiple={modalType !== "Business Logo"}
                    className="regForm-file-input"
                    style={{ display: 'none' }} // Hide the default file input button
                  />
                  
                </div>
                {uploadedFiles[modalType].length > 0 && (
                  <div className="regForm-uploaded-files">
                    {uploadedFiles[modalType].map((file, index) => {
                      let IconComponent;
                      if (file.name.match(/\.(jpg|jpeg|png|gif)$/i)) {
                        IconComponent = AiOutlineFileImage;
                      } else if (file.name.match(/\.(pdf)$/i)) {
                        IconComponent = AiOutlineFilePdf;
                      } else if (file.name.match(/\.(docx?|txt)$/i)) {
                        IconComponent = AiOutlineFileText;
                      }

                      return (
                        <div key={index} className="regForm-file-item">
                          <div className='icon-file'>
                            <IconComponent size={"2rem"} style={{ color: '#000839' }} />
                            <div className="regForm-file-details">
                              <h2 className="regForm-file-name">{file.name}</h2>
                              <span className="regForm-file-size">{(file.size / 1024).toFixed(2)} KB</span>
                            </div>
                          </div>
                          <button onClick={() => handleDelete(index)} className="regForm-delete-button">
                            <AiOutlineDelete size={24} style={{ color: 'red' }} />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          )}
          
          <div className="regForm-input-wrapper">
            <div className="regForm-input-group">
              <p className="regForm-label">Tell us a bit about your business.</p>
              <textarea
                placeholder="Short description of your experience and team. (e.g., Established in 2010, 5 staff members, specialising in boiler installations.)"
                onChange={(e) => onSave('businessDescription', e.target.value)}
                className="regForm-input-desc"
              ></textarea>
            </div>
          </div>

          <div className="regForm-button-container">
            <button onClick={onBack} className="regForm-button">Back</button>
            <button onClick={saveForLater} className="regForm-button">Save and Continue for Later</button>
            <button onClick={onNext} className="regForm-button">Next</button>
          </div>
        </div>

        <div className="regForm-image-container">
          <img src={Drilling} alt="Business Registration Illustration" />
        </div>
      </div>
    </div>
  );
};

// Step 5
const Step5 = ({ onNext, onBack, formData, onSave, saveForLater, currentStep, totalSteps }) => {
  const progress = (currentStep / totalSteps) * 100;
  return (
    <div className="regForm-step-container">
      <div className="regForm-content">
        {/* Left Side - Form */}
        <div className="regForm-form-container">
          {/* Fixed Header */}
          <div className="regForm-header">
            <img className='regForm-logo' src={TradiyLogo} alt='Tradiy Logo' />
            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: `${progress}%` }}></div>
            </div>
            <div className="h2-skip-wrapper">
              <h2>Add Your Categories</h2>
              <p
                className="skip-text"
                onClick={onNext}
                style={{ cursor: 'pointer', color: '#000839', textDecoration: 'underline' }}
              >
                Skip for now
              </p>
            </div>
          </div>

          {/* Scrollable Form Content */}
          <div className="regForm-input-wrapper">
            <div className="regForm-input-group">
              <label htmlFor="primaryTradeCategory" className="regForm-label">
                Primary Service Category
              </label>
              <input
                id="primaryTradeCategory"
                type="text"
                placeholder="Confirm the main service. (e.g., Plumbing)"
                value={formData.primaryTradeCategory || ''}
                onChange={(e) => onSave('primaryTradeCategory', e.target.value)}
                className="regForm-input"
                style={{fontFamily : '"Hanken Grotesk", "Arial"', color: "#000839"}}
              />
            </div>

            <div className="regForm-input-group">
              <label htmlFor="additionalCategory" className="regForm-label">
                Additional Service Categories
              </label>
              <div className="regForm-select-wrapper">
                <select
                  id="additionalCategory"
                  value={formData.additionalCategory || ''}
                  onChange={(e) => onSave('additionalCategory', e.target.value)}
                  className="regForm-select"
                  style={{fontFamily : '"Hanken Grotesk", "Arial"', color: "#000839"}}
                >
                  <option value="">Select additional categories</option>
                  <option value="Option 1">Option 1</option>
                  <option value="Option 2">Option 2</option>
                  <option value="Option 3">Option 3</option>
                  <option value="Option 4">Option 4</option>
                  <option value="Option 5">Option 5</option>
                </select>
              </div>
            </div>
          </div>

          {/* Fixed Footer Buttons */}
          <div className="regForm-button-container">
            <button onClick={onBack} className="regForm-button">Back</button>
            <button onClick={saveForLater} className="regForm-button">Save and Continue for Later</button>
            <button onClick={onNext} className="regForm-button">Next</button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="regForm-image-container">
          <img src={Drilling} alt="Business Information Illustration" />
        </div>
      </div>
    </div>
  );
};

// Step 6
const Step6 = ({ onNext, onBack, formData, onSave, saveForLater, currentStep, totalSteps }) => {
  const progress = (currentStep / totalSteps) * 100;
  const [availability, setAvailability] = useState({
    Monday: { available: false, startTime: '', endTime: '' },
    Tuesday: { available: false, startTime: '', endTime: '' },
    Wednesday: { available: false, startTime: '', endTime: '' },
    Thursday: { available: false, startTime: '', endTime: '' },
    Friday: { available: false, startTime: '', endTime: '' },
    Saturday: { available: false, startTime: '', endTime: '' },
    Sunday: { available: false, startTime: '', endTime: '' },
    emergencyHours: false, // Tracks whether emergency hours is enabled or not
  });

  const [holidayModalOpen, setHolidayModalOpen] = useState(false);
  const [newHoliday, setNewHoliday] = useState({
    name: '',
    startDate: '',
    endDate: '',
    openTime: '',
    closeTime: '',
  });
  const [holidays, setHolidays] = useState([]);

  const handleCheckboxChange = (day) => {
    setAvailability((prev) => {
      const newAvailability = { ...prev };
      const newDay = { ...newAvailability[day] };
  
      // If unchecked, reset startTime and endTime to empty strings
      if (!newDay.available) {
        newDay.startTime = '';
        newDay.endTime = '';
      }
  
      newDay.available = !newDay.available;
      newAvailability[day] = newDay;
  
      return newAvailability;
    });
  };

  const handleEmergencyChange = () => {
    setAvailability((prev) => ({ ...prev, emergencyHours: !prev.emergencyHours }));
    onSave('emergencyHours', !availability.emergencyHours ? 'Yes' : 'No'); // Save "Yes" or "No"
  };

  const handleTimeChange = (day, field, time) => {
    setAvailability((prev) => ({
      ...prev,
      [day]: { ...prev[day], [field]: time },
    }));
    onSave(`${day}${field}`, time); // Save the time input to parent component
  };

  const handleHolidayInputChange = (e) => {
    const { name, value } = e.target;
    setNewHoliday((prev) => ({ ...prev, [name]: value }));
  };

  const addHoliday = () => {
    if (!newHoliday.name || !newHoliday.startDate || !newHoliday.endDate || !newHoliday.openTime || !newHoliday.closeTime) {
      alert("Please fill in all required fields.");
      return;
    }
  
    setHolidays((prev) => [...prev, newHoliday]);
    setNewHoliday({
      name: '',
      startDate: '',
      endDate: '',
      openTime: '',
      closeTime: '',
    });
    setHolidayModalOpen(false);
  };

  return (
    <div className="regForm-step-container">
      <div className="regForm-content">
        <div className="regForm-form-container">
          <div className="regForm-header">
            <img className="regForm-logo" src={TradiyLogo} alt="Tradiy Logo" />
            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: `${progress}%` }}></div>
            </div>
            <div className="h2-skip-wrapper">
              <h2>Business Opening Hours</h2>
              <p
                className="skip-text"
                onClick={onNext}
                style={{ cursor: "pointer", color: "#000839", textDecoration: "underline" }}
              >
                Skip for now
              </p>
            </div>
          </div>
          <p style={{ fontWeight: "bold", color: "#000839" }}>Select your weekly schedule. Do not select a day if it is your day off.</p>

          <div className="regForm-input-wrapper">
            {/* Day of the Week Checkboxes */}
            {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
              <div key={day} className="regForm-input-group-checkbox">
                <div className='checkbox-input-wrapper'>
                  <div className="regForm-flex-container">
                    {/* Checkbox */}
                    <input
                      type="checkbox"
                      id={day}
                      checked={availability[day].available}
                      onChange={() => handleCheckboxChange(day)}
                      className="regForm-checkbox"
                    />
                    <label htmlFor={day} className="regForm-label">{day}</label>
                  </div>
                    
                    {/* Time Inputs */}
                    <div className="regForm-time-inputs">
                      <input
                        type="time"
                        value={availability[day].startTime}
                        onChange={(e) => handleTimeChange(day, "startTime", e.target.value)}
                        className="regForm-input-time"
                        disabled={!availability[day].available}  // Disable when unchecked
                      />
                      <span>-</span>
                      <input
                        type="time"
                        value={availability[day].endTime}
                        onChange={(e) => handleTimeChange(day, "endTime", e.target.value)}
                        className="regForm-input-time"
                        disabled={!availability[day].available}  // Disable when unchecked
                      />
                    </div>
                </div>
              </div>
            ))}

            {/* Emergency Hours Checkbox */}
            <div className="regForm-input-group-emergency" style={{ marginTop: "15px", marginBottom: "20px" }}>
              <div className='checkbox-input-wrapper'>
                <div className="regForm-flex-container">
                  <input
                    type="checkbox"
                    id="emergencyHours"
                    checked={availability.emergencyHours}
                    onChange={handleEmergencyChange}
                    className="regForm-checkbox"
                  />
                  <label htmlFor="emergencyHours" className="regForm-label">
                    Emergency Hours (Tick if you offer 24/7 services.)
                  </label>
                </div>
              </div>
            </div>

            {/* Add Holiday/Special Hours Button */}
            <p style={{fontSize: "1rem", fontWeight: "600", color: "#000839", marginTop: "0.5rem"}}>Holiday/Special Hours</p>
            <div className="regForm-input-group">
              <button onClick={() => setHolidayModalOpen(true)} className="regForm-button">
                + Add Holiday/Special Hours
              </button>
            </div>

            {/* Modal for adding Holiday/Special Hours */}
            {holidayModalOpen && (
              <div className="regForm-modal-overlay">
                <div className="regForm-modal-content">
                  <div className='header-close-wrapper'>
                    <h3 className="regForm-modal-heading">Holiday/Special Hours</h3>
                    <button onClick={() => setHolidayModalOpen(false)} className="regForm-close-button">&times;</button>
                  </div>
                  <p style={{ display: "flex", fontStyle: "italic", color: "#000839", marginBottom: "20px", marginTop: "20px" }}>
                    You may add your custom dates for holiday hours.
                  </p>

                  {/* Input Fields for Holiday Details */}
                  <div className="regForm-input-group">
                    <label style={{ display: "block", marginBottom: "5px", textAlign: "left", fontWeight: "600", color: "#000839" }}>
                      Holiday/Special Hour Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Holiday/Special Hour Name"
                      value={newHoliday.name}
                      onChange={handleHolidayInputChange}
                      className="regForm-input"
                      maxLength={12}  // Limit input to 15 characters
                      style={{fontFamily : '"Hanken Grotesk", "Arial"', color: "#000839"}}
                      required
                    />
                  </div>

                  <div className="regForm-input-group">
                    <label style={{ display: "block", marginBottom: "5px", textAlign: "left", fontWeight: "600", color: "#000839" }}>Start Date</label>
                    <input
                      type="date"
                      name="startDate"
                      value={newHoliday.startDate}
                      onChange={handleHolidayInputChange}
                      className="regForm-input"
                      style={{fontFamily : '"Hanken Grotesk", "Arial"', color: "#000839"}}
                      required
                    />
                  </div>

                  <div className="regForm-input-group">
                    <label style={{ display: "block", marginBottom: "5px", textAlign: "left", fontWeight: "600", color: "#000839" }}>End Date</label>
                    <input
                      type="date"
                      name="endDate"
                      value={newHoliday.endDate}
                      onChange={handleHolidayInputChange}
                      className="regForm-input"
                      style={{fontFamily : '"Hanken Grotesk", "Arial"', color: "#000839"}}
                      required
                    />
                  </div>

                  {/* Flexbox container for Open Time and Close Time */}
                  <div className="regForm-input-group" style={{ display: "flex", justifyContent: "space-between", gap: "10px", fontWeight: "600", color: "#000839" }}>
                    <div style={{ flex: 1 }}>
                      <label style={{ display: "block", marginBottom: "5px", textAlign: "left" }}>Open Time</label>
                      <input
                        type="time"
                        name="openTime"
                        value={newHoliday.openTime}
                        onChange={handleHolidayInputChange}
                        className="regForm-input"
                        style={{fontFamily : '"Hanken Grotesk", "Arial"', color: "#000839"}}
                        required
                      />
                    </div>
                    <div style={{ flex: 1 }}>
                      <label style={{ display: "block", marginBottom: "5px", textAlign: "left", fontWeight: "600", color: "#000839" }}>Close Time</label>
                      <input
                        type="time"
                        name="closeTime"
                        value={newHoliday.closeTime}
                        onChange={handleHolidayInputChange}
                        className="regForm-input"
                        style={{fontFamily : '"Hanken Grotesk", "Arial"', color: "#000839"}}
                        required
                      />
                    </div>
                  </div>

                  {/* Modal Buttons */}
                  <div className="regForm-modal-buttons">
                    <button onClick={() => setHolidayModalOpen(false)} className="regForm-button">Cancel</button>
                    <button onClick={addHoliday} className="regForm-button">Add Holiday</button>
                  </div>

                  {/* Divider */}
                  <hr style={{ marginTop: "20px", marginBottom: "20px", border: "1px solid #ddd" }} />
                  <p style={{textAlign: 'left', marginBottom: "15px", fontWeight:"bold", color: "#FFBC58"}}>Listed Holiday/Special Hours</p>
                  {/* List of Holidays */}
                  <div className="holidays-list">
                    {holidays.length > 0 ? (
                      <>
                        <div className="holiday-item">
                          <div>Name</div>
                          <div>Start Date</div>
                          <div>End Date</div>
                          <div>Time</div>
                        </div>
                        {holidays.map((holiday, index) => (
                          <div key={index} className="holiday-item">
                            <div>{holiday.name}</div>
                            <div>{holiday.startDate}</div>
                            <div>{holiday.endDate}</div>
                            <div>{`${holiday.openTime}-${holiday.closeTime}`}</div>
                          </div>
                        ))}
                      </>
                    ) : (
                      <p>No holidays added yet.</p>
                    )}
                  </div>

                </div>
              </div>
            )}

          </div>

          <div className="regForm-button-container">
            <button onClick={onBack} className="regForm-button">Back</button>
            <button onClick={saveForLater} className="regForm-button">Save and Continue for Later</button>
            <button onClick={onNext} className="regForm-button">Next</button>
          </div>
        </div>

        <div className="regForm-image-container">
          <img src={Drilling} alt="Business Opening Hours Illustration" />
        </div>
      </div>
    </div>
  )
};

// Step 7
const Step7 = ({ onNext, onBack, formData, onSave, saveForLater, currentStep, totalSteps }) => {
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [profilePicture, setProfilePicture] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);
        onSave('profilePicture', reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="regForm-step-container">
      <div className="regForm-content">
        <div className="regForm-form-container">
          <div className="regForm-header">
            <img className="regForm-logo" src={TradiyLogo} alt="Tradiy Logo" />
            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: `${progress}%` }}></div>
            </div>
            
            <div className="h2-skip-wrapper">
              <h2>Tell Us About Yourself</h2>
              <p
                className="skip-text"
                onClick={onNext}
                style={{ cursor: 'pointer', color: '#000839', textDecoration: 'underline' }}
              >
                Skip for now
              </p>
            </div>
          </div>

          <div className="regForm-file-upload-buttons">
            <div className="regForm-input-group">
              <p className="regForm-label">Profile Picture</p>
              <button onClick={() => setUploadModalOpen(true)} className="regForm-button">+ Upload</button>
              <p className="regForm-description">High-quality image of your logo.</p>
            </div>
          </div>

          {profilePicture && (
            <div className="regForm-uploaded-files">
              <div className="regForm-file-item">
                <img
                  src={profilePicture}
                  alt="Profile"
                  className="regForm-profile-picture"
                  style={{ maxHeight: "100px", maxWidth: "100px", marginTop: "1rem", border: "2px solid #000839", borderRadius: "10px"}}
                />
              </div>
            </div>
          )}

          {uploadModalOpen && (
            <div className="regForm-modal-overlay">
              <div className="regForm-modal-content">
                <div className="regForm-modal-header">
                  <h3 className="regForm-modal-heading">Upload Profile Picture</h3>
                  <button onClick={() => setUploadModalOpen(false)} className="regForm-close-button">&times;</button>
                </div>
                <input type="file" accept="image/*" onChange={handleFileChange} className="regForm-file-input" />
              </div>
            </div>
          )}

          <div className="regForm-input-wrapper">
            <div className="regForm-input-group">
              <p className="regForm-label">Short Bio</p>
              <textarea
                placeholder="Introduce yourself to build trust. (e.g., “Hi, I’m Edward, with 15 years of plumbing experience.”)"
                value={formData.shortBio || ''}
                onChange={(e) => onSave('shortBio', e.target.value)}
                className="regForm-input-desc"
              ></textarea>
            </div>
          </div>

          <div className="regForm-input-wrapper">
            <div className="regForm-input-group">
              <p className="regForm-label">Home Address</p>
              <input
                type="text"
                placeholder="Enter your personal address."
                value={formData.homeAddress || ''}
                onChange={(e) => onSave('homeAddress', e.target.value)}
                className="regForm-input"
                style={{fontFamily : '"Hanken Grotesk", "Arial"', color: "#000839"}}
              />
            </div>
          </div>

          <div className="regForm-input-wrapper">
            <div className="regForm-input-group">
              <p className="regForm-label">Birthday</p>
              <input
                type="date"
                value={formData.birthday || ''}
                onChange={(e) => onSave('birthday', e.target.value)}
                className="regForm-input"
                style={{fontFamily : '"Hanken Grotesk", "Arial"', color: "#000839"}}
              />
            </div>
          </div>

          <div className="regForm-button-container">
            <button onClick={onBack} className="regForm-button">Back</button>
            <button onClick={saveForLater} className="regForm-button">Save and Continue for Later</button>
            <button onClick={onNext} className="regForm-button">Next</button>
          </div>
        </div>

        <div className="regForm-image-container">
          <img src={Drilling} alt="Business Registration Illustration" />
        </div>
      </div>
    </div>
  );
};

const Step8 = ({ onNext, onBack, formData, onSave, saveForLater, currentStep, totalSteps }) => {
  const [uploadModalOpen, setUploadModalOpen] = useState({
    insuranceCertificate: false,
    photoId: false,
    businessAddressProof: false,
  });

  const [uploadedFiles, setUploadedFiles] = useState({
    insuranceCertificate: null,
    photoId: null,
    businessAddressProof: null,
  });

  // Compress Image Function
  const compressImage = (file, maxWidth = 800, maxHeight = 800, quality = 0.7) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      const reader = new FileReader();
      reader.onload = () => {
        img.src = reader.result;
      };
      reader.onerror = (err) => reject(err);

      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        let width = img.width;
        let height = img.height;

        // Resize the image to fit within the max width/height while maintaining aspect ratio
        if (width > height) {
          if (width > maxWidth) {
            height *= maxWidth / width;
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width *= maxHeight / height;
            height = maxHeight;
          }
        }

        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);

        // Compress the image and convert it to base64
        canvas.toDataURL('image/jpeg', quality, (dataUrl) => {
          resolve(dataUrl);
        });
      };

      img.src = file;
    });
  };

  // Handle File Change Event for each file type
  const handleFileChange = async (e, fileType) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const compressedImage = await compressImage(file);
        setUploadedFiles((prev) => ({
          ...prev,
          [fileType]: compressedImage,
        }));
        onSave(fileType, compressedImage); // Save the compressed image base64 to formData
      } catch (err) {
        console.error('Image compression failed:', err);
      }
    }
  };

  const progress = (currentStep / totalSteps) * 100; // Calculate progress percentage

  return (
    <div className="regForm-step-container">
      <div className="regForm-content">
        <div className="regForm-form-container">
          <div className="regForm-header">
            <img className="regForm-logo" src={TradiyLogo} alt="Tradiy Logo" />
            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: `${progress}%` }}></div>
            </div>
            
            <div className="h2-skip-wrapper">
              <h2>Trader Verification</h2>
              <p
                className="skip-text"
                onClick={onNext}
                style={{ cursor: 'pointer', color: '#000839', textDecoration: 'underline' }}
              >
                Skip for now
              </p>
            </div>
          </div>
          
          {/* Upload Buttons */}
          <div className="regForm-file-upload-buttons">
            <div className="regForm-input-group">
              <label></label>
              <button onClick={() => setUploadModalOpen((prev) => ({ ...prev, insuranceCertificate: true }))} className="regForm-button">
                + Upload
              </button>
            </div>
            <div className="regForm-input-group">
              <button onClick={() => setUploadModalOpen((prev) => ({ ...prev, photoId: true }))} className="regForm-button">
                + Upload
              </button>
            </div>
            <div className="regForm-input-group">
              <button onClick={() => setUploadModalOpen((prev) => ({ ...prev, businessAddressProof: true }))} className="regForm-button">
                + Upload
              </button>
            </div>
          </div>

          {/* Display uploaded files if available */}
          <div className="regForm-uploaded-files">
            {uploadedFiles.insuranceCertificate && (
              <div className="regForm-file-item">
                <h4>Insurance Certificate</h4>
                <img src={uploadedFiles.insuranceCertificate} alt="Insurance Certificate" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
              </div>
            )}
            {uploadedFiles.photoId && (
              <div className="regForm-file-item">
                <h4>Photo ID</h4>
                <img src={uploadedFiles.photoId} alt="PhotoID" style={{ maxWidth: '100px', maxHeight: '100px', objectFit: 'cover' }} />
              </div>
            )}
            {uploadedFiles.businessAddressProof && (
              <div className="regForm-file-item">
                <h4>Proof of Business Address</h4>
                <img src={uploadedFiles.businessAddressProof} alt="Proof of Business Address" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
              </div>
            )}
          </div>

          {/* Modals for uploading files */}
          {uploadModalOpen.insuranceCertificate && (
            <div className="regForm-modal-overlay">
              <div className="regForm-modal-content">
                <h3>Upload Insurance Certificate</h3>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, 'insuranceCertificate')}
                  style={{ marginBottom: '10px' }}
                />
                <button onClick={() => setUploadModalOpen((prev) => ({ ...prev, insuranceCertificate: false }))} className="regForm-close-button">&times;</button>
              </div>
            </div>
          )}

          {uploadModalOpen.photoId && (
            <div className="regForm-modal-overlay">
              <div className="regForm-modal-content">
                <h3>Upload Photo ID</h3>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, 'photoId')}
                  style={{ marginBottom: '10px' }}
                />
                <button onClick={() => setUploadModalOpen((prev) => ({ ...prev, photoId: false }))} className="regForm-close-button">&times;</button>
              </div>
            </div>
          )}

          {uploadModalOpen.businessAddressProof && (
            <div className="regForm-modal-overlay">
              <div className="regForm-modal-content">
                <h3>Upload Proof of Business Address</h3>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, 'businessAddressProof')}
                  style={{ marginBottom: '10px' }}
                />
                <button onClick={() => setUploadModalOpen((prev) => ({ ...prev, businessAddressProof: false }))} className="regForm-close-button">&times;</button>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="regForm-button-container">
            <button onClick={onBack} className="regForm-button">Back</button>
            <button onClick={saveForLater} className="regForm-button">Save and Continue for Later</button>
            <button onClick={onNext} className="regForm-button">Next</button>
          </div>
        </div>

        {/* Image on the right side */}
        <div className="regForm-image-container">
          <img src={Drilling} alt="Business Registration Illustration" />
        </div>
      </div>
    </div>
  );
};
  
// Step 9
const Step9 = ({ onNext, onBack, formData, onSave, saveForLater }) => {
    const [socialMediaLinks, setSocialMediaLinks] = useState({
      facebook: '',
      instagram: '',
      linkedin: '',
      tiktok: ''
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setSocialMediaLinks((prev) => ({
        ...prev,
        [name]: value
      }));
      onSave(name, value); // Save each social media input to formData
    };
  
    return (
      <div className="step-container">
        <h2>Social Media</h2>
        <p>Feel free to enter your business’s social media link below. This is optional and helps homeowners connect with you online.</p>
  
        <div style={{ marginBottom: '10px' }}>
          {/* Facebook Input */}
          <label htmlFor="facebook">Facebook</label>
          <input
            type="text"
            id="facebook"
            name="facebook"
            onChange={handleInputChange}
            placeholder="Enter username"
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
  
        <div style={{ marginBottom: '10px' }}>
          {/* Instagram Input */}
          <label htmlFor="instagram">Instagram</label>
          <input
            type="text"
            id="instagram"
            name="instagram"
            onChange={handleInputChange}
            placeholder="Enter username"
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
  
        <div style={{ marginBottom: '10px' }}>
          {/* LinkedIn Input */}
          <label htmlFor="linkedin">LinkedIn</label>
          <input
            type="text"
            id="linkedin"
            name="linkedin"
            onChange={handleInputChange}
            placeholder="Enter username"
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
  
        <div style={{ marginBottom: '10px' }}>
          {/* TikTok Input */}
          <label htmlFor="tiktok">TikTok</label>
          <input
            type="text"
            id="tiktok"
            name="tiktok"
            onChange={handleInputChange}
            placeholder="Enter username"
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
  
        {/* Navigation Buttons */}
        <button onClick={onBack}>Back</button>
        <button onClick={onNext}>Finish</button>
        <button onClick={saveForLater}>Save and Continue for Later</button>
      </div>
    );
};

// Step 10
const Step10 = ({ formData, onNext, saveForLater }) => (
    <div className="step-container">
      <h2>Review Your Details</h2>
  
      {/* Loop through the formData object and display each key-value pair */}
      <div className="form-details">
        {Object.entries(formData).map(([key, value]) => (
          <div key={key} className="form-detail">
            <strong>{key.replace(/([A-Z])/g, ' $1').toUpperCase()}:</strong> {value}
          </div>
        ))}
      </div>
  
      {/* Buttons for submission or saving */}
      <button onClick={onNext}>Submit</button>
      <button onClick={saveForLater}>Save and Continue for Later</button>
    </div>
);

export default RegistrationForm;
