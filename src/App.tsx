// import { Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home } from './pages/Home/Home';
import { Skill } from './pages/Skill/Skill';

function App() {
  // const [mouseX, setMouseX] = useState(0);
  // const [mouseY, setMouseY] = useState(0);

  // console.log(mouseX, mouseY)
  // useEffect(() => {
  //   // @ts-ignore
  //   const mouseMoveListener = (event) => {
  //     setMouseX(event.clientX);
  //     setMouseY(event.clientY);
  //     // const stalker = document.getElementById('stalker')
  //     // stalker!.style.transform = `translate(${event.clientX - 25}px, ${event.clientY - 25}px`;
  //   };

  //   window.addEventListener("mousemove", mouseMoveListener);

  //   return () => {
  //     window.removeEventListener("mousemove", mouseMoveListener);
  //   };
  // }, []);
  return (
    <React.Fragment>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/skill" element={<Skill />} />
    </Routes>
    </React.Fragment>
  );
}

export default App;
