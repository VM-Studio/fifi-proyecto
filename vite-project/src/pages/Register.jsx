import React, { useState } from "react";
import AuthContainer from "../components/AuthContainer";
import AuthHeader from "../components/AuthHeader";
import FormInput from "../components/FormInput";
import PasswordInput from "../components/PasswordInput";
import AuthButton from "../components/AuthButton";
import ErrorMessage from "../components/ErrorMessage";
import AuthLink from "../components/AuthLink";

const Register = ({ onRegisterSuccess }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !password || !confirmPassword) {
      setError("Por favor completa todos los campos");
      return;
    }
    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    // Verifica si el usuario ya existe
    const users = JSON.parse(localStorage.getItem("nixedUsers")) || [];
    if (users.find((u) => u.email === email)) {
      setError("El email ya está registrado");
      return;
    }

    // Guarda el nuevo usuario
    const newUser = { name, email, password };
    localStorage.setItem("nixedUsers", JSON.stringify([...users, newUser]));
    localStorage.setItem("nixedCurrentUser", JSON.stringify(newUser));
    onRegisterSuccess && onRegisterSuccess();
  };

  return (
    <AuthContainer>
      <AuthHeader subtitle="Crea tu cuenta para comenzar" />

      <div className="auth-form">
        <FormInput
          label="Nombre Completo"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Tu nombre completo"
        />

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

        <PasswordInput
          label="Confirmar Contraseña"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          showPassword={showConfirmPassword}
          onTogglePassword={() => setShowConfirmPassword((v) => !v)}
          ariaLabel={
            showConfirmPassword ? "Ocultar contraseña" : "Mostrar contraseña"
          }
        />

        <ErrorMessage message={error} />

        <AuthButton onClick={handleSubmit}>Crear Cuenta</AuthButton>

        <AuthLink
          text="¿Ya tienes una cuenta?"
          linkText="Inicia sesión aquí"
          href="/login"
        />
      </div>
    </AuthContainer>
  );
};

export default Register;
