import React from 'react';

const Home = ({ users, things })=> {
  return (
    <div>
      <h1>Home</h1>
      <p>
        Here at the Acme Item Tracker Corp we have { users.length } users and { things.length } things!
      </p>
    </div>
  );
};

export default Home;
