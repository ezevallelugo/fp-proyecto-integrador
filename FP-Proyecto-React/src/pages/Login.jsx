import "../styles/login/loginDefault.css";
import React, { useState, useEffect } from 'react';

// Utility function for form validation
const useFormValidation = (initialState, validationRules) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedValues = { ...values, [name]: value };
    setValues(updatedValues);

    // Validate each field
    const newErrors = {};
    Object.keys(validationRules).forEach(field => {
      const rule = validationRules[field];
      if (!rule.regex.test(updatedValues[field])) {
        newErrors[field] = rule.message;
      }
    });

    setErrors(newErrors);
    setIsValid(Object.keys(newErrors).length === 0);
  };

  const resetForm = () => {
    setValues(initialState);
    setErrors({});
    setIsValid(false);
  };

  return { values, errors, isValid, handleChange, resetForm };
};

// Login Component
const LoginForm = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validationRules = {
    userEmail: {
      regex: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      message: "El correo solo puede contener letras, números, puntos, guiones y guión bajo."
    },
    userPassword: {
      regex: /^.{4,12}$/,
      message: "La contraseña debe tener entre 4 a 10 dígitos."
    }
  };

  const {
    values,
    errors,
    isValid,
    handleChange,
    resetForm
  } = useFormValidation(
    { userEmail: '', userPassword: '' },
    validationRules
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      // Successful login logic
      setIsSuccess(true);
      setShowAlert(true);
      resetForm();

      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    } else {
      setIsSuccess(false);
      setShowAlert(true);

      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }
  };

  return (
    <form className="sign" onSubmit={handleSubmit}>
      <h1>Iniciar Sesión</h1>
      <p>Ingresa tus credenciales</p>

      <label>
        <i className="fas fa-envelope"></i>
        <input
          type="email"
          name="userEmail"
          placeholder="Email"
          value={values.userEmail}
          onChange={handleChange}
          className={errors.userEmail ? 'error' : ''}
        />
      </label>
      {errors.userEmail && <div className="alerta">{errors.userEmail}</div>}

      <label>
        <i className="fas fa-lock"></i>
        <input
          type="password"
          name="userPassword"
          placeholder="Contraseña"
          value={values.userPassword}
          onChange={handleChange}
          className={errors.userPassword ? 'error' : ''}
        />
      </label>
      {errors.userPassword && <div className="alerta">{errors.userPassword}</div>}

      <input
        type="submit"
        value="Iniciar Sesión"
        className="iniciar-sesion"
      />

      {showAlert && (
        <div className={`alerta-${isSuccess ? 'Exito' : 'Error'}`}>
          {isSuccess ? 'Inicio de sesión exitoso' : 'Por favor, corrige los errores'}
        </div>
      )}

      <a href="#">¿Olvidaste tu contraseña?</a>
    </form>
  );
};

// Registration Component
const RegisterForm = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validationRules = {
    userName: {
      regex: /^[a-zA-Z0-9\_\-]{4,16}$/,
      message: "El usuario debe contener de 4 a 16 dígitos alfanuméricos."
    },
    userEmail: {
      regex: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      message: "El correo solo puede contener letras, números, puntos, guiones y guión bajo."
    },
    userPassword: {
      regex: /^.{4,12}$/,
      message: "La contraseña debe tener entre 4 a 12 dígitos."
    }
  };

  const {
    values,
    errors,
    isValid,
    handleChange,
    resetForm
  } = useFormValidation(
    { userName: '', userEmail: '', userPassword: '' },
    validationRules
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      // Successful registration logic
      setIsSuccess(true);
      setShowAlert(true);
      resetForm();

      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    } else {
      setIsSuccess(false);
      setShowAlert(true);

      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }
  };

  return (
    <form className="register" onSubmit={handleSubmit}>
      <h1>Crear Cuenta</h1>
      <p>Registra tus datos</p>

      <label>
        <i className="fas fa-user"></i>
        <input
          type="text"
          name="userName"
          placeholder="Nombre de usuario"
          value={values.userName}
          onChange={handleChange}
          className={errors.userName ? 'error' : ''}
        />
      </label>
      {errors.userName && <div className="alerta">{errors.userName}</div>}

      <label>
        <i className="fas fa-envelope"></i>
        <input
          type="email"
          name="userEmail"
          placeholder="Email"
          value={values.userEmail}
          onChange={handleChange}
          className={errors.userEmail ? 'error' : ''}
        />
      </label>
      {errors.userEmail && <div className="alerta">{errors.userEmail}</div>}

      <label>
        <i className="fas fa-lock"></i>
        <input
          type="password"
          name="userPassword"
          placeholder="Contraseña"
          value={values.userPassword}
          onChange={handleChange}
          className={errors.userPassword ? 'error' : ''}
        />
      </label>
      {errors.userPassword && <div className="alerta">{errors.userPassword}</div>}

      <input
        type="submit"
        value="Registrarse"
      />

      {showAlert && (
        <div className={`alerta-${isSuccess ? 'exito' : 'error'}`}>
          {isSuccess ? 'Registro exitoso' : 'Por favor, corrige los errores'}
        </div>
      )}
    </form>
  );
};

// Main Container Component
export default function Login() {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Resize handling
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Mobile version
  if (isMobile) {
    return (
      <div className="body login">
        <div className="container-mobile">
          {!isRightPanelActive ? (
            <>

              <LoginForm />
              <div className="toggle-link">
                ¿No tienes cuenta?&nbsp;
                <a href="#" onClick={(e) => {
                  e.preventDefault();
                  setIsRightPanelActive(true);
                }}>Regístrate</a>
              </div>
            </>
          ) : (
            <>

              <RegisterForm />
              <div className="toggle-link">
                ¿Ya tienes cuenta?&nbsp;
                <a href="#" onClick={(e) => {
                  e.preventDefault();
                  setIsRightPanelActive(false);
                }}>Iniciar Sesión</a>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }

  // Desktop version
  return (
    <div className="flex h-screen login">
      <div className="body w-full">
        <div className={`container ${isRightPanelActive ? 'right-panel-active' : ''}`}>
          <div className="sign-up">
            <RegisterForm />
          </div>
          <div className="sign-in">
            <LoginForm />
          </div>

          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-left">
                <h1>¡Bienvenido de vuelta!</h1>
                <p>Para mantenerse conectado con nosotros, inicie sesión con su información personal</p>
                <button
                  id="signIn"
                  onClick={() => setIsRightPanelActive(false)}
                >
                  Iniciar Sesión
                </button>
              </div>

              <div className="overlay-right">
                <h1>¡Hola, Amigo!</h1>
                <p>Regístrese con su información personal para comenzar este viaje con nosotros</p>
                <button
                  id="signUp"
                  onClick={() => setIsRightPanelActive(true)}
                >
                  Registrarse
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
