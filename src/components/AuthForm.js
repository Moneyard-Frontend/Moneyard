import { useState } from 'react';
import { useWeb3 } from '../contexts/Web3Context';

export default function AuthForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [referral, setReferral] = useState('');
  const { login } = useWeb3();

  return (
    <div className="auth-form">
      <input 
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="text"
        placeholder="Referral Code (Optional)"
        onChange={(e) => setReferral(e.target.value)}
      />
      <button onClick={() => login(email, password, referral)}>
        Sign In / Register
      </button>
    </div>
  );
          }
