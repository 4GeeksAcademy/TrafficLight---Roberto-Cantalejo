import React from "react";

// Componente Layout que maneja el fondo y actúa como contenedor
const Layout = ({ children }) => {
    const styles = {
      backgroundColor: '#f0f0f0',
      minHeight: '100vh',
      padding: '20px',
    };
  
    return (
      <div style={styles}>
        {children}
      </div>
    );
  };
  
  export default Layout;