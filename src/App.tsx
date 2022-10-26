import "./App.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useSigner } from "wagmi";

function App() {
  const { data: signer } = useSigner();

  const getBalance = async () => {
    const balance = await signer?.getBalance();
    alert(balance);
  };

  return (
    <div>
      <ConnectButton />
      <button onClick={getBalance}>Get Balance</button>
    </div>
  );
}

export default App;
