import { useWeb3 } from '../contexts/Web3Context';

export default function WalletConnector() {
  const { connectWallet, user } = useWeb3();

  return (
    <div className="wallet-connector">
      {!user ? (
        <button onClick={connectWallet}>Connect MetaMask</button>
      ) : (
        <span>Connected: {user.address.slice(0,6)}...{user.address.slice(-4)}</span>
      )}
    </div>
  );
}
