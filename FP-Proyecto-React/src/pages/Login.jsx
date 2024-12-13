import "../styles/login/loginDefault.css";
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGooglePlusG, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';

// Utility function for form validation
const useFormValidation = (initialState, validationRules) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedValues = { ...values, [name]: value };
    setValues(updatedValues);

    // Mark the field as touched
    setTouched(prev => ({ ...prev, [name]: true }));

    // Validate each field
    const newErrors = {};
    Object.keys(validationRules).forEach(field => {
      const rule = validationRules[field];
      if (touched[field] && !rule.regex.test(updatedValues[field])) {
        newErrors[field] = rule.message;
      }
    });

    setErrors(newErrors);
    setIsValid(Object.keys(newErrors).length === 0);
  };

  const resetForm = () => {
    setValues(initialState);
    setErrors({});
    setTouched({});
    setIsValid(false);
  };

  return { values, errors, isValid, handleChange, resetForm, touched };
};

// Login Component
const LoginForm = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const navigate = useNavigate();

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
    resetForm,
    touched
  } = useFormValidation(
    { userEmail: '', userPassword: '' },
    validationRules
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!values.userEmail || !values.userPassword) {
      setIsSuccess(false);
      setShowAlert(true);

      // Modificar el mensaje de error
      errors.userEmail = !values.userEmail ? "Todos los campos son obligatorios" : errors.userEmail;
      errors.userPassword = !values.userPassword ? "Todos los campos son obligatorios" : errors.userPassword;

      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
      return;
    }

    if (isValid) {
      // Successful login logic
      setIsSuccess(true);
      setShowAlert(true);
      resetForm();

      setTimeout(() => {
        setShowAlert(false);
        navigate('/catalog');
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
      <div className="social-container">
        <a href="#" className="social"><FontAwesomeIcon icon={faFacebookF} size={"lg"} /></a>
        <a href="#" className="social"><FontAwesomeIcon icon={faGooglePlusG} size={"lg"} /></a>
        <a href="#" className="social"><FontAwesomeIcon icon={faLinkedinIn} size={"lg"} /></a>
      </div>
      <p>o usa tu cuenta</p>
      <label>
        <FontAwesomeIcon icon={faEnvelope} color="#a7a7a7" />
        <input
          type="email"
          name="userEmail"
          placeholder="Email"
          value={values.userEmail}
          onChange={handleChange}
          className={errors.userEmail 
            ? 'border border-solid border-[#9d2222] text-[#a7a7a7]' 
            : 'text-[#a7a7a7]'
          }
        />
      </label>
      {touched.userEmail && errors.userEmail && (
        <div className="w-[290px] text-center sm:text-left rounded-[7px] mb-[10px] text-[0.8rem] text-red-600">
          {errors.userEmail}
        </div>
      )}

      <label>
        <FontAwesomeIcon icon={faLock} color="#a7a7a7" />
        <input
          type="password"
          name="userPassword"
          placeholder="Contraseña"
          value={values.userPassword}
          onChange={handleChange}
          className={errors.userPassword ? 'error text-[#a7a7a7]' : 'text-[#a7a7a7]'}
        />
      </label>
      {touched.userPassword && errors.userPassword && <div className="alerta text-center sm:text-left">{errors.userPassword}</div>}

      <input
        type="submit"
        value="Iniciar Sesión"
        className="iniciar-sesion"
      />

      {showAlert && (  <div className={`    ${isSuccess ? 'bg-green-600' : 'text-red-600'}  w-full p-[0.5rem]  ${isSuccess ? 'text-white' : ''}  font-medium text-[0.8rem]  ${isSuccess ? 'mt-[10px]' : 'pb-0'} `}>
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
    resetForm,
    touched
  } = useFormValidation(
    { userName: '', userEmail: '', userPassword: '' },
    validationRules
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!values.userName || !values.userEmail || !values.userPassword) {
      setIsSuccess(false);
      setShowAlert(true);

      // Modificar los mensajes de error
      errors.userName = !values.userName ? "Todos los campos son obligatorios" : errors.userName;
      errors.userEmail = !values.userEmail ? "Todos los campos son obligatorios" : errors.userEmail;
      errors.userPassword = !values.userPassword ? "Todos los campos son obligatorios" : errors.userPassword;

      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
      return;
    }

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

      <div className="social-container">
        <a href="#" className="social"><FontAwesomeIcon icon={faFacebookF} size={"lg"} /></a>
        <a href="#" className="social"><FontAwesomeIcon icon={faGooglePlusG} size={"lg"} /></a>
        <a href="#" className="social"><FontAwesomeIcon icon={faLinkedinIn} size={"lg"} /></a>
      </div>

      <label>
        <FontAwesomeIcon icon={faUser} color="#a7a7a7" />
        <input
          type="text"
          name="userName"
          placeholder="Nombre de usuario"
          value={values.userName}
          onChange={handleChange}
          className={errors.userName 
            ? 'border border-solid border-[#9d2222] text-[#a7a7a7]' 
            : 'text-[#a7a7a7]'
          }
        />
      </label>
      {touched.userName && errors.userName && (
  <div className="w-[290px] text-center sm:text-left rounded-[7px] mb-[10px] text-[0.8rem] text-red-600">
    {errors.userName}
  </div>
)}

      <label>
        <FontAwesomeIcon icon={faEnvelope} color="#a7a7a7" />
        <input
          type="email"
          name="userEmail"
          placeholder="Email"
          value={values.userEmail}
          onChange={handleChange}
          className={errors.userEmail ? 'error text-[#a7a7a7]' : 'text-[#a7a7a7]'}
        />
      </label>
      {touched.userEmail && errors.userEmail && <div className="alerta text-center sm:text-left">{errors.userEmail}</div>}

      <label>
        <FontAwesomeIcon icon={faLock} color="#a7a7a7" />
        <input
          type="password"
          name="userPassword"
          placeholder="Contraseña"
          value={values.userPassword}
          onChange={handleChange}
          className={errors.userPassword ? 'error text-[#a7a7a7]' : 'text-[#a7a7a7]'}
        />
      </label>
      {touched.userPassword && errors.userPassword && <div className="alerta text-center sm:text-left">{errors.userPassword}</div>}

      <input
        type="submit"
        value="Registrarse"
      />

{showAlert && (
  <div className={`
    ${isSuccess ? 'bg-green-600' : 'text-red-600'} 
    w-full p-[0.5rem] 
    ${isSuccess ? 'text-white' : ''} 
    font-medium text-[0.8rem] 
    mt-[10px]
  `}>
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
                <h1>¡Bienvenido!</h1>
                <p>Para seguir ayudando a cuidar nuestro ambiente inicie sesion</p>
                <button
                  id="signIn"
                  onClick={() => setIsRightPanelActive(false)}
                >
                  Iniciar Sesión
                </button>
              </div>

              <div className="overlay-right">
                <h1>¡Bienvenido nuevamente!</h1>
                <p>Para seguir ayudando a cuidar nuestro ambiente registrese</p>
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
