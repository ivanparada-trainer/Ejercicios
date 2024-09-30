import React, { useState } from 'react';
import UserForm from './Components/UserForm';
import UserList from './Components/UserList';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [editingIndex, setEditingIndex] = useState(-1);

  const handleAddUser = (values) => {
    if (editingIndex !== -1) {
      const updatedUsers = [...users];
      updatedUsers[editingIndex] = values;
      setUsers(updatedUsers);
      setEditingIndex(-1);
    } else {
      setUsers([...users, values]);
    }
    setEditingUser(null);
  };

  const handleEditUser = (index) => {
    setEditingUser(users[index]);
    setEditingIndex(index);
  };

  const handleDeleteUser = (index) => {
    const filteredUsers = users.filter((_, i) => i !== index);
    setUsers(filteredUsers);
  };

  return (
    <div className="container">
      <GlobalStyles />
      <UserForm
        initialValues={editingUser || { email: '', password: '' }}
        onSubmit={handleAddUser}
        editing={editingIndex !== -1}
      />
      <UserList users={users} onEdit={handleEditUser} onDelete={handleDeleteUser} />
    </div>
  );
};

export default App;
