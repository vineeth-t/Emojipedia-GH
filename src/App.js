import React, { useState } from "react";
import "./styles.css";

// var userName=prompt("give your Name");

export default function App() {
  var [emojiMeaning, setEmojiMeaning] = useState(" ");
  var emoji = {
    "🥂": "Clinking Glasses",
    "🍵": " Teacup Without Handle",
    "🍶": " Sake",
    "🍾 ": "Bottle with Popping Cork",
    "🍷": " Wine Glass",
    "🍸": "Cocktail Glass",
    "🍹": "Tropical Drink",
    "🍺": "Beer Mug",
    "🍻": "Clinking Beer Mugs",
    "🥃": "Tumbler Glass",
    "🥤": "Cup with Straw",
    "🧃": "Beverage Box",
    "🧉": "Mate",
    "🧊": "Ice",
    "🍼": "Baby Bottle",
    "🥛": "Glass of Milk",
    "☕": "Hot Beverage",
    "💘": "Heart with Arrow",
    "💝": "Heart with Ribbon",
    "💖": "Sparkling Heart",
    "💗": "Growing Heart",
    "💓": "Beating Heart",
    "💞": "Revolving Hearts",
    "💕": "Two Hearts",
    "💟": "Heart Decoration",
    "❣️": "Heart Exclamation",
    "💔": "Broken Heart",
    "❤️": "Red Heart",
    "🧡": "Orange Heart",
    "💛": "Yellow Heart",
    "💚": "Green Heart",
    "💙": "Blue Heart",
    "💜": "Purple Heart",
    "🤎": "Brown Heart",
    "🖤": "Black Heart",
    "🤍": "White Heart"
  };

  var emojiOject = Object.keys(emoji);
  function changeUserInput(event) {
    var inputByUser = event.target.value;

    if (/^[a-zA-Z]+$/.test(inputByUser)) {
      alert("Text not allowed ,only emojis!");
    } else if (/^\d+$/.test(inputByUser)) {
      alert("Numbers not allowed,only emojis!");
    }
    var emojiMeaning = emoji[inputByUser];
    if (emojiMeaning === undefined) {
      emojiMeaning = "Can't read the emoji";
    }
    console.log(emojiMeaning);
    setEmojiMeaning(emojiMeaning);
  }

  function emojiHandler(emojis) {
    var emojiMeaning = emoji[emojis];
    setEmojiMeaning(emojiMeaning);
  }
  return (
    <div className="App">
      <header>
        <nav className="navigation container">
          <div className="nav-brand">Heart And Glasses</div>
        </nav>
      </header>
      <div>
        <h3>Emoji Interpreter</h3>
        <input
          placeholder="Search emoji"
          className="userInput"
          onChange={changeUserInput}
        ></input>
      </div>
      <div className="outputDiv">{emojiMeaning}</div>

      <div>
        {emojiOject.map(function (emoji) {
          return (
            <span
              className="emoji"
              onClick={() => emojiHandler(emoji)}
              key={emoji}
            >
              {emoji}
            </span>
          );
        })}
      </div>
      <footer className="footer">
        <div className="footer-container">
          Heart and Glass have similar properties
        </div>
        <small> © | 2020 | pvr</small>
      </footer>
    </div>
  );
}

/**
 * things to notice
 * class --> className
 * style --> takes an object instead of ""
 */
