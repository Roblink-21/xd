const dictionary = {
  "auth/email-already-in-use": "El correo electrónico ya está en uso.",
  "auth/weak-password": "La contraseña debe tener al menos 6 caracteres",
  "auth/wrong-password": "Usuario o contraseña incorrectos",
};
const translateMessage = (value) => {
  return dictionary[value] || "Error desconocido: " + value;
};
export default translateMessage;
