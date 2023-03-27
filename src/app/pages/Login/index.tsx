import { useState } from 'react';

export const Login = () => {
  const [email, setEmail] = useState();
  const [passwd, setPasswd] = useState();

  const handleEntrar = () => {};

  return (
    <div>
      <p>Login</p>
      <form action="">
        <label htmlFor="">
          <span>E-mail</span>
          <input
            value={email}
            type="email"
            name=""
            id=""
            onChange={(e: any) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="">
          <span>Senha</span>
          <input
            type="password"
            value={passwd}
            name=""
            id=""
            onChange={(e: any) => setPasswd(e.target.value)}
          />
        </label>
        <button type="button" onClick={handleEntrar}>
          Entrar
        </button>
      </form>
    </div>
  );
};
