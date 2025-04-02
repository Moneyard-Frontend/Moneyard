import { useWeb3 } from '../contexts/Web3Context';
import AuthForm from '../components/AuthForm';
import Navigation from '../components/Navigation';

export default function Home() {
  const { user } = useWeb3();

  return (
    <div>
      <Navigation />
      {!user ? <AuthForm /> : <div>Welcome to Moneyard Staking</div>}
    </div>
  );
}
