import React from 'react'
import styles from './AuthForm.module.scss'

type AuthFormProps = {
  email: string;
  password: string;
  message: string;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  submitButtonText: string;
};

const AuthForm: React.FC<AuthFormProps> = ({
  email,
  password,
  message,
  onEmailChange,
  onPasswordChange,
  onSubmit,
  submitButtonText,
}) => {
  return (
    <form onSubmit={onSubmit} className={styles.formContainer}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={onEmailChange}
        className={styles.input}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={onPasswordChange}
        className={styles.input}
        required
      />
      <button type="submit" className={styles.button}>
        {submitButtonText}
      </button>
      {message && <p className={styles.message}>{message}</p>}
    </form>
  );
};

export default AuthForm;
