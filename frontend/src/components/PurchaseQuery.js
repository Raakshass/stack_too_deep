import React from "react";
import axios from "axios";

const PurchaseQuery = ({ account }) => {
  const initiatePurchase = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/data/purchase`,
        { buyer: account }
      );
      alert(`Purchase successful! Transaction Hash: ${response.data.txHash}`);
    } catch (error) {
      console.error("Error during purchase:", error);
      alert("Purchase could not be completed");
    }
  };

  return (
    <div style={{ border: "1px solid #aaa", padding: "1rem", borderRadius: "5px", marginBottom: "1rem" }}>
      <h3>Data Purchase Access</h3>
      <p>Current Account: {account || "Not connected"}</p>
      <button onClick={initiatePurchase} style={{ padding: "0.5rem", cursor: "pointer" }}>
        Buy Access
      </button>
    </div>
  );
};

export default PurchaseQuery;
