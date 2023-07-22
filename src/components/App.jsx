import React from "react";
import emojipedia from "../emojipedia";
import Moji from "./Moji";

function createMoji(emojiData) {
  return (
    <Moji
      key={emojiData.id}
      emoji={emojiData.emoji}
      name={emojiData.name}
      meaning={emojiData.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      {emojipedia.map(createMoji)}
    </div>
  );
}

export default App;
