export interface SigninUIProps {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  onSignin: () => void;
  onNavigateSignup: () => void;
} 