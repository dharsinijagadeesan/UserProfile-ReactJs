import React from 'react';
import UserProfile from './UserProfile';

function App() {
  const user = {
    name: 'Dharsini',
    email: 'dharsini@gmail.com',
    phone: '63698891613',
    imgsrc: 'user-male.png'
  };

  return (
    <div>
      <UserProfile 
        name={user.name} 
        email={user.email} 
        phone={user.phone} 
        imgsrc={user.imgsrc} 
      />
    </div>
  );
}

export default App;
