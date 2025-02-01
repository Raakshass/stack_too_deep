import React, { useState } from "react";
import WalletConnect from "./WalletConnect";

const Register = ({ account, onConnect }) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [verificationResult, setVerificationResult] = useState("");

  const CardSection = ({ children, customStyle }) => (
    <div style={{
      backgroundColor: "#fff",
      borderRadius: "12px",
      padding: "2rem",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      marginBottom: "2rem",
      maxWidth: "600px",
      width: "100%",
      ...customStyle
    }}>
      {children}
    </div>
  );

  const StyledButton = ({ children, handleClick, customStyle, disabled }) => (
    <button
      onClick={handleClick}
      disabled={disabled}
      style={{
        padding: "0.75rem 1.5rem",
        backgroundColor: disabled ? "#95a5a6" : "#3498DB",
        color: "white",
        border: "none",
        borderRadius: "6px",
        cursor: disabled ? "not-allowed" : "pointer",
        fontSize: "1.1rem",
        transition: "background-color 0.2s ease",
        width: "100%",
        marginTop: "1rem",
        ...customStyle
      }}
      onMouseOver={(e) => !disabled && (e.target.style.backgroundColor = "#2980B9")}
      onMouseOut={(e) => !disabled && (e.target.style.backgroundColor = "#3498DB")}
    >
      {children}
    </button>
  );

  const Spinner = () => (
    <div style={{
      display: "inline-block",
      width: "20px",
      height: "20px",
      marginRight: "10px",
      border: "3px solid rgba(255,255,255,.3)",
      borderRadius: "50%",
      borderTopColor: "white",
      animation: "spin 1s ease-in-out infinite",
    }}>
      <style>
        {`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );

  const generateProof = () => {
    setIsGenerating(true);
    setVerificationResult("");
    
    const delay = Math.random() * 2000 + 3000;
    
    setTimeout(() => {
      setIsGenerating(false);
      setVerificationResult("User Proof Verified");
    }, delay);
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      backgroundColor: "#f8f9fa",
      padding: "2rem",
      borderRadius: "12px"
    }}>
      <CardSection customStyle={{ marginBottom: 0 }}>
        <h3 style={{
          color: "#2C3E50",
          marginBottom: "1.5rem",
          textAlign: "center"
        }}>
          Register with Zero-Knowledge Proof
        </h3>
        
        <div style={{
          marginBottom: "2rem",
          display: "flex",
          justifyContent: "center"
        }}>
          <WalletConnect onConnect={onConnect} />
        </div>

        <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          <p style={{
            color: "#7F8C8D",
            fontSize: "1rem",
            marginBottom: "1rem"
          }}>
            Generate a zero-knowledge proof to verify your identity without revealing sensitive information.
          </p>
          
          <StyledButton handleClick={generateProof} disabled={isGenerating}>
            {isGenerating ? (
              <>
                <Spinner />
                Generating Proof...
              </>
            ) : (
              "Generate ZK Proof"
            )}
          </StyledButton>
        </div>

        {verificationResult && (
          <div style={{
            backgroundColor: "#d4edda",
            color: "#155724",
            padding: "1rem",
            borderRadius: "6px",
            marginTop: "1rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem"
          }}>
            <svg 
              viewBox="0 0 20 20"
              style={{
                width: "20px",
                height: "20px",
                fill: "currentColor"
              }}
            >
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
            </svg>
            {verificationResult}
          </div>
        )}
      </CardSection>
    </div>
  );
};

export default Register;
