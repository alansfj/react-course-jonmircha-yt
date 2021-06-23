import React from "react";

export default function Message({ msg }) {
  let styles = {
    padding: "1rem",
    marginBottom: "1rem",
    textAlign: "center",
    color: "#000",
    fontWeight: "bold",
    backgroudColor: "#dc3545",
  };
  return (
    <div style={styles}>
      <p>{msg}</p>
    </div>
  );
}
