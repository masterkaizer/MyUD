import React from "react";

function Header() {
  return (
    <header>
    <div style={styles.headerStyle} className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">My Employee Directory</h1>
        <p className="lead">Welcome to your Employee Directory</p>
      </div>
    </div>
    </header>
  );
}

export default Header;

const styles = {
  headerStyle: {
    backgroundColor: "turquoise",
    color: "beige",
    display: "flex",
    textAlign: "center",
    margin: "0",
  },
};