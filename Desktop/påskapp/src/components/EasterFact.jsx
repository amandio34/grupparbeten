// This component displays a fact about Easter and a button to get the next fact. 
export default function EasterFact({ fact, onNext }) {
  // The component takes two props: fact (a string) and onNext (a function). 
    return (
      <div>
        <p style={{
          fontStyle: "italic",
          marginBottom: "0.5rem"
        }}>{fact}</p>
        <button onClick={onNext} style={{ 
          background: "#fff9b1",
          border: "none",
          padding: "0.5rem 1rem",
          borderRadius: "0.5rem",
          cursor: "pointer"
        }}>Nästa faktabubbla 🐣</button>
      </div>
    );
  }
  