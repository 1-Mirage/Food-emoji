import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🍉": "Watermelon",
  "🍌": "Banana",
  "🥭": "Mango",
  "🍓": "Strawberry",
  "🥦": "Broccoli",
  "🥞": "Pancake",
  "🥒": "Cucumber",
  "🍞": "Bread",
  "🍟": "French Fries",
  "🍕": "Pizza"
};

const emojis = Object.keys(emojiDictionary);

export default function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("translation will appear here..");

  function changeHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
    } else {
      setMeaning("failure to recognise this emoji");
    }
  }

  function emojiClickHandler(inputEmoji) {
    setMeaning(emojiDictionary[inputEmoji]);
  }

  return (
    <div className="App">
      <h1>inside outttttt</h1>
      <input
        onChange={changeHandler}
        value={emoji}
        placeholder={"Search your emoji"}
      />
      <h2> {emoji} </h2> {}
      <h3> {meaning} </h3> {}
      {emojis.map((emoji) => (
        <span onClick={() => emojiClickHandler(emoji)}> {emoji} </span>
      ))}
    </div>
  );
}
