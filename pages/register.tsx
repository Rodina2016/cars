import { useRouter } from 'next/router'
import { useState } from 'react'
import AuthForm from '../components/AuthForm/AuthForm'
import { registerUser } from '../utils/auth'

const Register: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = registerUser(email, password);

    if (result.success) {
      router.push('/login');
      setMessage('Registration successful');
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
      submitButtonText="Register"
    />
  );
};

export default Register;
