import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
// import AlarmClock from "./mini_apps/AlarmClock/AlarmClock";
// import AnalogClock from "./mini_apps/AnalogClock/AnalogClock";
// import BorderLoading from "./mini_apps/BorderLoading/BorderLoading";
// import Captcha from "./mini_apps/Captcha/Captcha";
import CardFlip from "./mini_apps/CardFlip/CardFlip";
// import DrawingApp from "./mini_apps/Drawing App/DrawingApp";
// import ImageEditor from "./mini_apps/Image Editor/ImageEditor";
// import Piano from "./mini_apps/Piano Project/Piano";
// import SnakeGame from "./mini_apps/Snake Game/SnakeGame";
// import SvgLoading from "./mini_apps/SVG Loading/SvgLoading";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/alarm" element={<AlarmClock />} />
        <Route path="/analog" element={<AnalogClock />} />
        <Route path="/border-loading" element={<BorderLoading />} />
        <Route path="/captcha" element={<Captcha />} />
        <Route path="/drawing-app" element={<DrawingApp />} />
        <Route path="/image-editor" element={<ImageEditor />} />
        <Route path="/piano" element={<Piano />} />
        <Route path="/snake" element={<SnakeGame />} />
        <Route path="/svg-loading" element={<SvgLoading />} /> */}
        <Route path="/card-flip" element={<CardFlip />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
