import React, { useState } from "react";

const Trafficlight = () => {

    // Declaro cual es el color activo, de forma que solo pueda ser uno.
  const [activeColor, setActiveColor] = useState(null);

    // Realizo una función para cambiar el color de activeColor.
  const pickColor = (color) => {
    setActiveColor(color);
  };

  // Cuando se hace click en cada parte del semáforo, se llama a la función pickColor con un color específico. Manipulamos el background color con un ternario.

  return (
    <div id="trafficlight">
      <div id="trafficlight-head">
        <div
          id="greenlight"
          onClick={() => pickColor("green")}
          style={{
            backgroundColor: activeColor === "green" ? "green" : "gray",
          }}
        ></div>
        <div
          id="yellowlight"
          onClick={() => pickColor("yellow")}
          style={{
            backgroundColor: activeColor === "yellow" ? "yellow" : "gray",
          }}
        ></div>
        <div
          id="redlight"
          onClick={() => pickColor("red")}
          style={{ backgroundColor: activeColor === "red" ? "red" : "gray" }}
        ></div>
      </div>
      <div id="trafficlight-pole"></div>
    </div>
  );
};

export default Trafficlight;
