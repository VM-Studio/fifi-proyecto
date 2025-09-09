import React, { useState } from "react";
import AuthContainer from "../components/AuthContainer";
import AuthHeader from "../components/AuthHeader";
import FormInput from "../components/FormInput";
import PasswordInput from "../components/PasswordInput";
import AuthButton from "../components/AuthButton";
import ErrorMessage from "../components/ErrorMessage";
import AuthLink from "../components/AuthLink";

const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Por favor completa todos los campos");
      return;
    }

    // Verifica si el usuario existe en localStorage
    const users = JSON.parse(localStorage.getItem("nixedUsers")) || [];
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      // Guarda la sesión del usuario actual
      localStorage.setItem("nixedCurrentUser", JSON.stringify(user));
      onLoginSuccess();
    } else {
      setError("Credenciales inválidas");
    }
  };

  return (
    <AuthContainer>
      <AuthHeader subtitle="Inicia sesión para acceder a tu cuenta" />

      <div className="auth-form">
        <FormInput
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tu@email.com"
        />

        <PasswordInput
          label="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          showPassword={showPassword}
          onTogglePassword={() => setShowPassword((v) => !v)}
          ariaLabel={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
        />

        <ErrorMessage message={error} />

        <AuthButton onClick={handleSubmit}>Iniciar Sesión</AuthButton>

        <AuthLink
          text="¿No tienes una cuenta?"
          linkText="Regístrate aquí"
          href="/register"
        />
      </div>
    </AuthContainer>
  );
};

export default Login;
