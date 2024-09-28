


import React, { useState } from "react";
import "./BookingForm.css";
import ContactHero from "./Hero";
const BookingForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    orgPhone: "",
    orgEmail: "",
    website: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    country: "Afghanistan",
    eventName: "",
    eventNature: "",
    expectedFromAdeyinka: [],
    eventDate: "",
    eventTime: "",
    eventAddressLine1: "",
    eventAddressLine2: "",
    eventCity: "",
    eventState: "",
    eventPostalCode: "",
    eventCountry: "Afghanistan",
    additionalInfo: "",
    agreement1: false,
    agreement2: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add your submission logic here
  };

  return (
    
    <div className="form-container">
      
      {step === 1 && (
        <>
          <h2>Step 1 of 4</h2>
          <div className="progress-bar">
            <div className="progress" style={{ width: "25%" }}></div>
          </div>
          <form>
            {/* Step 1 Form Fields */}
            <div className="input-group">
              <label htmlFor="firstName">Name <span className="required">*</span></label>
              <div className="input-row">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="email">Email <span className="required">*</span></label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="phone">Phone <span className="required">*</span></label>
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="button-group">
              <button type="button" className="button-next" onClick={nextStep}>Next</button>
            </div>
          </form>
        </>
      )}

       {step === 2 && (
         <>
           <h2>Step 2 of 4</h2>
           <div className="progress-bar">
             <div className="progress" style={{ width: "50%" }}></div>
           </div>
           <form>
             <div className="input-group">
               <label htmlFor="orgPhone">Phone <span className="required">*</span></label>
               <input
                 type="tel"
                name="orgPhone"
                 placeholder="Phone"
                 value={formData.orgPhone}
                 onChange={handleChange}
                 required
               />
             </div>
            <div className="input-group">
               <label htmlFor="orgEmail">Email <span className="required">*</span></label>
               <input
                 type="email"
                 name="orgEmail"
                 placeholder="Email"
                 value={formData.orgEmail}
                 onChange={handleChange}
                 required
               />
             </div>
             <div className="input-group">
               <label htmlFor="website">Website / URL</label>
               <input
                 type="url"
                 name="website"
                 placeholder="Website / URL"
                 value={formData.website}
                onChange={handleChange}
               />
            </div>
             <div className="input-group">
               <label htmlFor="addressLine1">Church/Organization Address <span className="required">*</span></label>
               <input
                 type="text"
                 name="addressLine1"
                 placeholder="Address Line 1"
                 value={formData.addressLine1}
                onChange={handleChange}
                 required
              />
               <input
                 type="text"
                 name="addressLine2"
                 placeholder="Address Line 2"
                 value={formData.addressLine2}
                 onChange={handleChange}
               />
               <div className="input-row">
                 <input
                   type="text"
                   name="city"
                   placeholder="City"
                   value={formData.city}
                   onChange={handleChange}
                 />
                 <input
                   type="text"
                   name="state"
                   placeholder="State / Province / Region"
                   value={formData.state}
                   onChange={handleChange}
                 />
                 <select name="country" value={formData.country} onChange={handleChange}>
                   <option value="Afghanistan">Afghanistan</option>
                   {/* Add other countries */}
                </select>
               </div>
             </div>
             <div className="button-group">
               <button type="button" className="button-back" onClick={prevStep}>Back</button>
               <button type="button" className="button-next" onClick={nextStep}>Next</button>
             </div>
           </form>
         </>
       )}
            {/* Step 3 Form Fields */}
            {step === 3 && (
        <>
          <h2>Step 3 of 4</h2>
          <div className="progress-bar">
            <div className="progress" style={{ width: "75%" }}></div>
          </div>
          <form>
            <div className="input-group">
              <label htmlFor="eventName">Event Name & Theme <span className="required">*</span></label>
              <input
                type="text"
                name="eventName"
                placeholder="Event Name"
                value={formData.eventName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="natureOfEvent">Nature of Event <span className="required">*</span></label>
              <input
                type="text"
                name="natureOfEvent"
                placeholder="Nature of Event"
                value={formData.natureOfEvent}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <label>What is expected from the guest? <span className="required">*</span></label>
              <div>
                <input
                  type="checkbox"
                  name="expectedFrom"
                  value="Music Ministration"
                  onChange={handleChange}
                /> Music Ministration
                <input
                  type="checkbox"
                  name="expectedFrom"
                  value="Public Speaking"
                  onChange={handleChange}
                /> Public Speaking
                <input
                  type="checkbox"
                  name="expectedFrom"
                  value="Public Appearance"
                  onChange={handleChange}
                /> Public Appearance
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="eventDate">Date & Time of Event <span className="required">*</span></label>
              <input
                type="date"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                required
              />
              <input
                type="time"
                name="eventTime"
                value={formData.eventTime}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="eventAddressLine1">Event Address <span className="required">*</span></label>
              <input
                type="text"
                name="eventAddressLine1"
                placeholder="Address Line 1"
                value={formData.eventAddressLine1}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="eventAddressLine2"
                placeholder="Address Line 2"
                value={formData.eventAddressLine2}
                onChange={handleChange}
              />
              <div className="input-row">
                <input
                  type="text"
                  name="eventCity"
                  placeholder="City"
                  value={formData.eventCity}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="eventState"
                  placeholder="State / Province / Region"
                  value={formData.eventState}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="eventPostalCode"
                  placeholder="Postal Code"
                  value={formData.eventPostalCode}
                  onChange={handleChange}
                />
                <select name="eventCountry" value={formData.eventCountry} onChange={handleChange}>
                  <option value="Afghanistan">Afghanistan</option>
                  {/* Add other countries */}
                </select>
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="additionalInfo">Additional Information about the Event</label>
              <textarea
                name="additionalInfo"
                placeholder="Additional Information"
                value={formData.additionalInfo}
                onChange={handleChange}
              />
            </div>
            <div className="button-group">
              <button type="button" className="button-back" onClick={prevStep}>Back</button>
              <button type="button" className="button-next" onClick={nextStep}>Next</button>
            </div>
          </form>
        </>
      )}

      {step === 4 && (
        <>
          <h2>Step 4 of 4</h2>
          <div className="progress-bar">
            <div className="progress" style={{ width: "100%" }}></div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>
                This form is used by the management of Adeyinka Alaseyori for scheduling purposes only and does NOT confirm an event <span className="required">*</span>
              </label>
              <div>
                <input
                  type="checkbox"
                  name="agreement1"
                  checked={formData.agreement1}
                  onChange={handleChange}
                  required
                />
                <label>Agree</label>
              </div>
            </div>
            <div className="input-group">
              <label>
                I/we affirm that the information provided in this form is valid? <span className="required">*</span>
              </label>
              <div>
                <input
                  type="checkbox"
                  name="agreement2"
                  checked={formData.agreement2}
                  onChange={handleChange}
                  required
                />
                <label>Agree</label>
              </div>
            </div>
            <div className="button-group">
              <button type="button" className="button-back" onClick={prevStep}>Back</button>
              <button type="submit" className="button-submit">Submit</button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default BookingForm;
