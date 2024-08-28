// utils/auth.ts

interface User {
  email: string;
  password: string;
}

export function registerUser(email: string, password: string): { success?: boolean; error?: string } {
  const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
  const userExists = users.some(user => user.email === email);

  if (userExists) {
    return { error: 'User already exists' };
  }

  users.push({ email, password });
  localStorage.setItem('users', JSON.stringify(users));
  return { success: true };
}

export function authenticateUser(email: string, password: string): { success?: boolean; error?: string } {
  const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
  const user = users.find(user => user.email === email && user.password === password);

  if (user) {
    // Save user as logged in
    sessionStorage.setItem('loggedInUser', JSON.stringify(user));
    return { success: true };
  } else {
    return { error: 'Invalid email or password' };
  }
}

export function getCurrentUser(): User | null {
  const user = sessionStorage.getItem('loggedInUser');
  return user ? JSON.parse(user) : null;
}

export function logoutUser(): void {
  sessionStorage.removeItem('loggedInUser');
}
