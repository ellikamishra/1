import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";


const App = () => (
  <div
    className="App"
    style={{ width: "600px", margin: "auto", padding: "50px" }}
  >
    <Carousel arrows infinite>
      <img src='https://images.unsplash.com/photo-1496857239036-1fb137683000?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max'/>
      <img src='https://images.unsplash.com/photo-1496857239036-1fb137683000?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max' />
      <img src='https://images.unsplash.com/photo-1496857239036-1fb137683000?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max' />
    </Carousel>
  </div>
);

export default App;