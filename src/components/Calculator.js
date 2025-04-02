import { useState } from 'react';

export default function Calculator({ balance }) {
  const [amount, setAmount] = useState(15);

  const calculateROI = () => {
    const minAmount = Math.max(amount, 15);
    return (minAmount * 0.2).toFixed(2); // 20% ROI
  };

  return (
    <div className="calculator">
      <h3>Earnings Calculator</h3>
      <input
        type="number"
        min="15"
        value={amount}
        onChange={(e) => setAmount(Math.max(e.target.value, 15))}
      />
      <p>Projected Daily Earnings: ${calculateROI()}</p>
    </div>
  );
}
