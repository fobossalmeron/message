import React, { useState } from "react";
import { CirclePicker } from "react-color";

export default function Message(props) {
    //const {color, message} = match.params
  const {
    match: { params }
  } = props;

  const [inputMessage, setValue] = useState(transformURLToText(params.message));
  const [inputColor, setColor] = useState(
    transformNumberToHex(params.color.toString())
  );
  const [showColorWheel, setColorWheel] = useState(false);

  function doShowColorWheel() {
    setColorWheel(true);
  }
  function doHideColorWheel() {
    setColorWheel(false);
  }

  function transformURLToText(message) {
    if (params.message) {
      return message
        .toString()
        .replace(/\+/g, " ")
        .replace(/-/g, "\n");
    } else {
      var defaultMessage = "Escribe tu mensaje";
      return defaultMessage;
    }
  }
  function transformTextToURL(message) {
    return message
      .toString()
      .replace(/ /g, "+")
      .replace(/\n/g, "-");
  }

  function transformHexToNumber(hex) {
    return hex.toString().replace(/#/g, "");
  }

  function transformNumberToHex(color) {
    var newColor = "#" + color;
    return newColor;
  }

  function updateInputMessage(e) {
    setValue(e.target.value);
    props.history.push(transformTextToURL(e.target.value));
  }

  function updateInputColor(color) {
    setColor(color.hex);
    props.history.replace(
      "/" +
        transformHexToNumber(color.hex) +
        "/" +
        transformTextToURL(inputMessage)
    );
  }

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: inputColor,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <textarea
        type="text"
        value={inputMessage}
        onChange={updateInputMessage}
      />
      {showColorWheel ? (
          <div> <span style={{fontSize:"20px", bottom:"20px", position:"relative", cursor: "pointer"}}onClick={() => doHideColorWheel()}>✗</span>
        <CirclePicker color={inputColor} onChangeComplete={updateInputColor} /></div>
      ) : (
        <p onClick={() => doShowColorWheel()} style={{cursor:"pointer"}}>change background color</p>
      )}
    </div>
  );
}
