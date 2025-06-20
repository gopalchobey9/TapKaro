export interface SignupUIProps {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  onSignup: () => void;
  onNavigateSignin: () => void;
} 