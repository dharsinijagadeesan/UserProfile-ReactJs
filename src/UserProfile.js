import React from 'react';
import './UserProfile.css';

export default function UserProfile({ name, email, phone, imgsrc }) {
  return (
    <div className="top"> 
      <div className="container">
      <img src={imgsrc} alt="profile" />
        <div className="profile-box">
          <br/>
          <br/>
          <br/>
          <br/>
          <label>{name}</label>
          <label>{email}</label>
          <label>{phone}</label>
          <button>My Account</button>
          <button>Sign Out</button>
        </div>
      </div>
    </div>
  );
}
