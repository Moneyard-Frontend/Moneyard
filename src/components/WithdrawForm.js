// TEMPORARY VERSION - REMOVE ALERT LATER!
export default function WithdrawForm() {
  const [amount, setAmount] = useState('');
  const [twoFACode, setTwoFACode] = useState('');

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
      <button onClick={() => alert('Withdrawal simulation: Success!')}>
        Confirm Withdrawal
      </button>
    </div>
  );
}
