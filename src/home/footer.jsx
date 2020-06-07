import React from "react";

function footer() {
  return (
    <footer>
    <div style={styles.footerStyle} className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">This User Directory app 
        was made with the hard work of Brandon J Sellam </h1>
      </div>
    </div>
    </footer>
  );
}

export default footer;

const styles = {
  headerStyle: {
    backgroundColor: "green",
    color: "beige",
    display: "flex",
    textAlign: "center",
    margin: "0",
  },
};