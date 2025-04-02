export default function DepositForm() {
  const networks = {
    TRC20: 'TJREgZTuTnvRrw5Fme4DDd6hSwCEwxQV3f',
    BEP20: '0x2837db956aba84eb2670d00aeea5c0d8a9e20a01'
  };

  const [selectedNetwork, setNetwork] = useState('TRC20');

  return (
    <div className="deposit-form">
      <select onChange={(e) => setNetwork(e.target.value)}>
        <option value="TRC20">Tron (TRC20)</option>
        <option value="BEP20">BNB Chain (BEP20)</option>
      </select>
      <div className="address-box">
        {networks[selectedNetwork]}
      </div>
    </div>
  );
}
