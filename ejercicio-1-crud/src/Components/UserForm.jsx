import React, { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const UserForm = ({ initialValues, onSubmit, editing }) => {
  const validationSchema = Yup.object({
    email: Yup.string().email('Correo inválido').required('Correo requerido'),
    password: Yup.string().min(6, 'Mínimo 6 caracteres').required('Contraseña requerida'),
  });

  return (
    <div className="form-container">
      <h2>{editing ? 'Editar Usuario' : 'Crear Usuario'}</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {() => (
          <Form>
            <div>
              <Field type="email" name="email" placeholder="Correo" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div>
              <Field type="password" name="password" placeholder="Contraseña" />
              <ErrorMessage name="password" component="div" className="error" />
            </div>
            <button type="submit">{editing ? 'Actualizar' : 'Crear'}</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UserForm;
