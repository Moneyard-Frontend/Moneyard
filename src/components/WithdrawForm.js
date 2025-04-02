import { useState } from 'react';
import QRCode from 'qrcode.react';
import { useWeb3 } from '../contexts/Web3Context';

export default function WithdrawForm() {
  const [amount, setAmount] = useState('');
  const [twoFACode, setTwoFACode] = useState('');
  const { withdraw } = useWeb3();

  return (
    <div className="withdraw-form">
      <input
        type="number"
        placeholder="USDT Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="text"
        placeholder="2FA Code"
        value={twoFACode}
        onChange={(e) => setTwoFACode(e.target.value)}
      />
      <button onClick={() => withdraw(amount, twoFACode)}>
        Confirm Withdrawal
      </button>
    </div>
  );
}
