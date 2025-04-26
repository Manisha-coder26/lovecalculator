import { useState } from "react";

function App() {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [result, setResult] = useState(null);

  const calculateLove = () => {
    if (!name1 || !name2) {
      setResult("Please enter both names");
      return;
    }

    const loveScore = Math.floor(Math.random() * 100) + 1;
    setResult(`Love between ${name1} and ${name2} is ${loveScore}%`);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Love Calculator</h1>

      <input
        type="text"
        placeholder="Enter first name"
        value={name1}
        onChange={(e) => setName1(e.target.value)}
        style={{ margin: "10px", padding: "5px" }}
      />
      <br />

      <input
        type="text"
        placeholder="Enter second name"
        value={name2}
        onChange={(e) => setName2(e.target.value)}
        style={{ margin: "10px", padding: "5px" }}
      />
      <br />

      <button onClick={calculateLove} style={{ padding: "10px 20px" }}>
        Calculate
      </button>

      {result && <p style={{ marginTop: "20px", fontSize: "18px" }}>{result}</p>}
    </div>
  );
}

export default App;
