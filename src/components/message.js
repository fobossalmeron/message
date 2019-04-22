import React, { useState } from "react";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
import styled from "styled-components";

import {
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

const Container = styled.div`
  width: 100%;
  background-color: ${props => props.background || "#3f51b5"};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const TextArea = styled.textarea`
  width: ${props => (props.emojified ? "85%" : "100%")};
  font-size: 6rem;
  font-weight: bold;
  height: 100%;
  background-color: transparent;
  text-align: center;
  white-space: normal;
  overflow: visible;
  resize: none;
  vertical-align: middle;
  padding: 5% 15%;
  box-sizing: border-box;
  border: 0;
  margin: 0;
  &:focus {
    border: none;
    outline: none;
  }
`;

const Options = styled.div`
  position: absolute;
  bottom: 0;
  min-height: 30px;
  display: flex;
  justify-content: space-around;
  right: 0;
  width: ${props => (props.reduced ? "85%" : "100%")};
`;

const OptionsButton = styled.button`
  cursor: pointer;
  padding: 6px 10px 8px 10px;
  background-color: white;
  color: ${props => props.color || "#3f51b5"};
  border-radius: 10px;
  font-weight: bold;
  transition: 0.4s ease all;
  border: none;
  margin-bottom: 15px;
  outline: none;
  :hover {
    text-decoration: underline;
  }
`;

const EmojiHider = styled.span`
  color: ${props => props.color || "#3f51b5"};
  position: absolute;
  right: ${props => (props.inverted ? "unset" : "-45px")};
  left: ${props => (props.inverted ? "-45px" : "unset")};
  font-size: 23px;
  font-weight: bold;
  background-color: white;
  border-radius: 100%;
  top: 12px;
  width: 31px;
  height: 31px;
  padding: 2px 0 0 1px;
  box-sizing: border-box;
  cursor: pointer;
`;

const EmojiContainer = styled.div`
  .emoji-mart {
    width: 15%;
    left: 0;
    height: 100vh;
    top: 0;
    position: relative;
    border: 0;
    border-radius: 0;
  }
  .emoji-mart-category-label {
    margin-bottom: 4px;
  }
  .emoji-mart-scroll {
    height: 83%;
  }
`;

const ShareContainer = styled.div`
  padding: 20px;
  background-color: white;
  position: relative;
  width: 8%;
  height: 100%;
  box-sizing: border-box;
  right: 0;
`;

const Colors = [
  "#f44336",
  "#e91e63",
  "#9c27b0",
  "#673ab7",
  "#3f51b5",
  "#2196f3",
  "#03a9f4",
  "#00bcd4",
  "#009688",
  "#4caf50",
  "#8bc34a",
  "#cddc39",
  "#ffeb3b",
  "#ffc107",
  "#ff9800",
  "#ff5722",
  "#607d8b"
];

export default function Message(props) {
  const { message } = props.match.params;

  const [inputMessage, setValue] = useState(transformURLToText(message));
  const [inputColor, setColor] = useState(
    Colors[Math.floor(Math.random() * Colors.length)]
  );
  const [showEmoji, setEmoji] = useState(false);
  const [showShare, setShare] = useState(false);

  function handleEmoji(bool) {
    setEmoji(bool);
  }

  function handleShare(bool) {
    setShare(bool);
  }

  function transformURLToText(url) {
    if (message) {
      return url
        .toString()
        .replace(/\+/g, " ")
        .replace(/–/g, "\n")
        .replace(/¿/g, "?")
        .replace(/hashtag-/g, "#")
        .replace(/percent-/g, "%");
    } else {
      var defaultMessage = "Write your message";
      return defaultMessage;
    }
  }

  function transformTextToURL(text) {
    return text
      .toString()
      .replace(/ /g, "+")
      .replace(/\n/g, "–")
      .replace(/\?/g, "¿")
      .replace(/\//g, "")
      .replace(/%/g, "percent-")
      .replace(/#/g, "hashtag-");
  }

  function updateInputMessage(e) {
    setValue(e.target.value);
    props.history.push(transformTextToURL(e.target.value));
  }

  function cleanMessage() {
    if (inputMessage === "Write your message") {
      setValue("");
    }
  }

  function addEmoji(emoji) {
    var oldMessage = inputMessage;
    var editedInputMessage = (oldMessage += emoji.native);
    setValue(editedInputMessage);
    props.history.push(transformTextToURL(editedInputMessage));
  }

  return (
    <Container background={inputColor}>
      {showEmoji ? (
        <div style={{ position: "relative" }}>
          <EmojiHider color={inputColor} onClick={() => handleEmoji(false)}>
            ✗
          </EmojiHider>
          <EmojiContainer>
            <Picker
              onSelect={emoji => addEmoji(emoji)}
              set="apple"
              title="Pick your emoji…"
              emoji="star-struck"
            />
          </EmojiContainer>
        </div>
      ) : null}
      <TextArea
        emojified={showEmoji}
        type="text"
        id="inputArea"
        value={inputMessage}
        onChange={updateInputMessage}
        onClick={cleanMessage}
      />
      {showShare ? (
        <ShareContainer>
          <EmojiHider
            inverted
            color={inputColor}
            onClick={() => handleShare(false)}
          >
            ✗
          </EmojiHider>
          <div className="Demo__some-network">
            <WhatsappShareButton
              url={"localhost:3000/" + transformTextToURL(inputMessage)}
              className="Demo__some-network__share-button"
            >
              <WhatsappIcon size={52} round />
            </WhatsappShareButton>
          </div>
        </ShareContainer>
      ) : null}
      <Options reduced={showEmoji}>
        {showEmoji ? null : (
          <OptionsButton color={inputColor} onClick={() => handleEmoji(true)}>
            add emoji
          </OptionsButton>
        )}
        {showShare ? null : (
          <OptionsButton color={inputColor} onClick={() => handleShare(true)}>
            share
          </OptionsButton>
        )}
      </Options>
    </Container>
  );
}