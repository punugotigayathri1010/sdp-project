import React, { useEffect, useState } from 'react';
  import "./admin.css"
function ViewUsers() {
  const [users, setUsers] = useState([]);

  useEffect(function () {
    const registrations =
      JSON.parse(localStorage.getItem('customerRegistrations')) || [];

    setUsers(registrations);
  }, []);

  return (
    <div>
      <h2>Registered Users</h2>
      <h3>Total Registered Users: {users.length}</h3>

      {users.length === 0 ? (
        <p>No users registered yet.</p>
      ) : (
        users.map(function (user) {
          return (
            <div key={user.id}>
              <hr />
              <p><strong>ID:</strong> {user.id}</p>
              <p><strong>Name:</strong> {user.fullName}</p>
              <p><strong>Username:</strong> {user.username}</p>
              <p><strong>Currency:</strong> {user.currency}</p>
              <p><strong>Registered At:</strong> {user.registeredAt}</p>
            </div>
          );
        })
      )}
    </div>
  );
}

export default ViewUsers;