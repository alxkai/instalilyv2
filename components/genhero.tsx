import React, { useEffect } from "react";
import Sketch from "react-p5";
import p5Types from "p5";

interface GenHero {
  // Your component props
}

const YourComponent: React.FC<GenHero> = (props: GenHero) => {
  let x = 50;
  const y = 50;

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(500, 500).parent(canvasParentRef);
  };

  const draw = (p5: p5Types) => {
    p5.background(0);
    p5.ellipse(x, y, 70, 70);
    x++;
  };

  useEffect(() => {
    // This code will only run on the client side
    new p5Types((p5) => {
      p5.setup = () => setup(p5, document.getElementById("sketch-container")!);
      p5.draw = () => draw(p5);
    });
  }, []);

  return <div id="sketch-container"></div>;
};

export default GenHero;
