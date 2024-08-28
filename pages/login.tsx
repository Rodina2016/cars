import { useRouter } from 'next/router'
import { useState } from 'react'
import AuthForm from '../components/AuthForm/AuthForm'
import { authenticateUser } from '../utils/auth'

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = authenticateUser(email, password);

    if (result.success) {
      router.push('/addCar');
      setMessage('Login successful');
    } else {
      setMessage(result.error || 'Unknown error');
    }
  };

  return (
    <AuthForm
      email={email}
      password={password}
      message={message}
      onEmailChange={(e) => setEmail(e.target.value)}
      onPasswordChange={(e) => setPassword(e.target.value)}
      onSubmit={handleSubmit}
      submitButtonText="Login"
    />
  );
};

export default Login;
