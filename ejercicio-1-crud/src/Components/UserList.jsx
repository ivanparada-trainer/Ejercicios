import React from 'react';

const UserList = ({ users, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Lista de Usuarios</h2>
      {users.length === 0 ? (
        <p>No hay usuarios.</p>
      ) : (
        <ul>
          {users.map((user, index) => (
            <li key={index} className="user-item">
              <span>{user.email}</span>
              <div>
                <button onClick={() => onEdit(index)}>Editar</button>
                <button onClick={() => onDelete(index)}>Eliminar</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;
