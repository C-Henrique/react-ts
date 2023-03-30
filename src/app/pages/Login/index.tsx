import { useCallback, useMemo, useState } from 'react';

export const Login = () => {
  const [email, setEmail] = useState<any[]>();
  const [passwd, setPasswd] = useState();

  const handleEntrar = useCallback(() => {
    console.log(email);
    console.log(passwd);
  }, [email, passwd]);

  const emailLength = useMemo(() => {
    return email?.length;
  }, [email?.length]);

  return (
    <div>
      <p>Quantidade de caracterer no email: {emailLength}</p>
      <p>Login</p>
      <form action="">
        <label htmlFor="">
          <span>E-mail</span>
          <input
            value={email || ''}
            type="email"
            onChange={(e: any) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="">
          <span>Senha</span>
          <input
            type="password"
            value={passwd || ''}
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
