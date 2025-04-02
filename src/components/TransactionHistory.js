import { useEffect, useState } from 'react';
import { useWeb3 } from '../contexts/Web3Context';

export default function TransactionHistory() {
  const { user } = useWeb3();
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    if(user?.address) {
      // Fetch transactions from API
      setTransactions([{type: 'Deposit', amount: 15, status: 'Completed'}]);
    }
  }, [user]);

  return (
    <div className="transaction-history">
      <h3>Recent Transactions</h3>
      <table>
        <tbody>
          {transactions.map((tx, i) => (
            <tr key={i}>
              <td>{tx.type}</td>
              <td>{tx.amount} USDT</td>
              <td>{tx.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
