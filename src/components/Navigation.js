import { Link } from 'react-router-dom';
import WalletConnector from './WalletConnector';

export default function Navigation() {
  return (
    <nav className="main-nav">
      <Link to="/">Moneyard Staking</Link>
      <div className="nav-links">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/transactions">History</Link>
        <WalletConnector />
      </div>
    </nav>
  );
}
