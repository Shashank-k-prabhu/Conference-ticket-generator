import React from "react";
import Background from "./Background/Background";

const App = () => {
  return (
    <div>
      <Background />
      <h1 className="text-3xl font-bold underline">Hello World!</h1>
      <p className="text-lg">
        This is a simple React application with Tailwind CSS.
      </p>
      <p className="text-sm">Enjoy building your app!</p>
      <p className="text-xs">Have a great day!</p>
    </div>
  );
};

export default App;
