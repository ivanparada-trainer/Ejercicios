import React, { useState } from 'react';
import UserForm from './Components/UserForm';
import UserList from './Components/UserList';
import Alert from './Components/Alert';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [editingIndex, setEditingIndex] = useState(-1);
  const [alert, setAlert] = useState({ message: '', type: '', visible: false });

  const showAlert = (message, type) => {
    setAlert({ message, type, visible: true });
    setTimeout(() => {
      setAlert({ ...alert, visible: false });
    }, 3000); // Alerta visible por 3 segundos
  };

  const handleAddUser = (values, { resetForm }) => {
    if (editingIndex !== -1) {
      const updatedUsers = [...users];
      updatedUsers[editingIndex] = values; // Actualizar el usuario
      setUsers(updatedUsers);
      showAlert('Usuario actualizado con éxito', 'success');
      setEditingIndex(-1);
    } else {
      setUsers([...users, values]); // Agregar nuevo usuario
      showAlert('Usuario creado con éxito', 'success');
    }

    // Limpiar el formulario después de la operación
    resetForm();
    setEditingUser(null);
  };

  const handleEditUser = (index) => {
    setEditingUser(users[index]); // Establecer el usuario en edición
    setEditingIndex(index);
  };

  const handleDeleteUser = (index) => {
    const filteredUsers = users.filter((_, i) => i !== index);
    setUsers(filteredUsers);
    showAlert('Usuario eliminado con éxito', 'error');
  };

  return (
    <div className="container">
      <GlobalStyles />
      <UserForm
        initialValues={editingUser || { email: '', password: '' }} // Pasar los valores del usuario a editar
        onSubmit={handleAddUser}
        editing={editingIndex !== -1}
      />
      <UserList users={users} onEdit={handleEditUser} onDelete={handleDeleteUser} />
      
      {/* Alert component */}
      <Alert
        message={alert.message}
        type={alert.type}
        visible={alert.visible}
        duration={3000}  // Duración de la alerta en milisegundos
        onClose={() => setAlert({ ...alert, visible: false })}
      />
    </div>
  );
};

export default App;