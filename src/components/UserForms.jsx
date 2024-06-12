/* eslint-disable react/prop-types */
const UserForm = ({ data, updateFielHandler }) => {
  return (
    <div className="form-control">
      <label htmlFor="name">Nome:</label>
      <input
        type="text"
        name="text"
        id="name"
        placeholder="Digite seu nome"
        required
        value={data.name || ""}
        onChange={(e) => updateFielHandler("name", e.target.value)}
      />
      <label htmlFor="email">E-mail:</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Digite seu E-mail"
        required
        value={data.email || ""}
        onChange={(e) => updateFielHandler("email", e.target.value)}
      />
    </div>
  );
};

export default UserForm;
