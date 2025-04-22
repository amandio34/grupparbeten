// This component is a simple card layout that can be used to display content in a visually appealing way.
import React from 'react';
export function Card({ children }) {
  // This function returns a styled card component that wraps its children.
    return (
      <div style={{
        background: "white",
        borderRadius: "1rem",
        padding: "1rem",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        maxWidth: "400px",
        margin: "1rem auto"
      }}>
        {children} {/* This is where the content of the card will be displayed */}
      </div>
    );
  }
  