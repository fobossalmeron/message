import React, { useState, useRef } from "react";
import "emoji-mart/css/emoji-mart.css";
import data from "emoji-mart/data/apple.json";
import { NimblePicker } from "emoji-mart";
import styled, { css } from "styled-components/macro";
import Clipboard from "react-clipboard.js";

import { ReactComponent as TwitterIcon } from "./../assets/img/twitter.svg";
import { ReactComponent as WhatsappIcon } from "./../assets/img/whatsapp.svg";
import { ReactComponent as FacebookIcon } from "./../assets/img/facebook.svg";

import {
  WhatsappShareButton,
  TwitterShareButton,
  FacebookShareButton
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
  padding: 10% 15%;
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
  left: 0;
  width: ${props => (props.reduced ? "85%" : "100%")};
  height: 60px;
`;

const OptionsButton = styled.button`
  cursor: pointer;
  padding: 6px 10px 8px 10px;
  background-color: "white";
  color: ${props => props.color || "#3f51b5"};
  font-weight: bold;
  transition: 0.4s ease all;
  border: none;
  bottom: 50px;
  padding: 6px 15px 8px 15px;
  outline: none;
  position: absolute;
  border-radius: 20px;
  :hover {
    text-decoration: underline;
  }
`;

const TopButton = styled(Clipboard)`
  cursor: pointer;
  padding: 6px 10px 8px 10px;
  background-color: "white";
  color: ${props => props.color || "#3f51b5"};
  border-radius: 0 20px 20px 0;
  font-weight: bold;
  transition: 0.4s ease all;
  border: none;
  margin-bottom: 0px;
  outline: none;
  margin-left: 15px;

  :hover {
    text-decoration: underline;
  }
  ${props =>
    props.disabled &&
    css`
      background-color: transparent;
      border-left: 1px solid white;
      color: white;
      cursor: default;
      :hover {
        text-decoration: none;
        cursor: default;
      }
    `}
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
  z-index: 3;
`;

const EmojiContainer = styled.div`
  .emoji-mart {
    width: 15%;
    z-index: 3;
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
    height: 100%;
    padding: 5%;
  }
  .emoji-mart-category-label,
  .emoji-mart-bar,
  .emoji-mart-search {
    display: none;
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
  .SocialMediaShareButton {
    max-width: 50px;
  }
`;

const Linked = styled.div`
  font-size: 1rem;
  position: absolute;
  top: 20px;
  margin: 0;
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 0;
  border: 1px solid white;
  border-radius: 20px;
  padding: 0 0 0 20px;
  p {
    margin: 0%;
    text-decoration: underline;
  }
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

  const [showEmoji, setEmoji] = useState(false);
  const [activatedEmoji, setActivatedEmoji] = useState(false);

  const [showShare, setShare] = useState(false);

  const [inputColor, setInputColor] = useState(
    Colors[Math.floor(Math.random() * Colors.length)]
  );

  const [copySuccess, setCopySuccess] = useState(false);
  const textAreaRef = useRef(null);

  function copyToClipboard() {
    setCopySuccess(true);
    setTimeout(() => {
      setCopySuccess(false);
    }, 2000);
  }

  function handleEmoji(bool) {
    setEmoji(bool);
    setActivatedEmoji(true);
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
            x
          </EmojiHider>
          <EmojiContainer>
            <NimblePicker
              onSelect={emoji => addEmoji(emoji)}
              data={data}
              set="apple"
              include={["recent"]}
              title="Pick your emoji…"
              emoji="star-struck"
              perLine="4"
              sheetSize={64}
              showPreview={true}
              showSkinTones={false}
              color={inputColor}
              emojiSize={40}
              recent={[
                "+1",
                "grinning",
                "kissing_heart",
                "kissing_closed_eyes",
                "thinking_face",
                ":smiley:",
                ":scream:",
                ":hugging_face:"
              ]}
            />
          </EmojiContainer>
        </div>
      ) : null}
      {activatedEmoji ? (
        <Linked>
          <p>{"http://andjust.fyi/" + transformTextToURL(inputMessage)}</p>
          <TopButton
            onClick={copyToClipboard}
            data-clipboard-text={
              "http://andjust.fyi/" + transformTextToURL(inputMessage)
            }
            color={inputColor}
            disabled={copySuccess}
          >
            {copySuccess ? "Copied to clipboard!" : "Copy URL"}
          </TopButton>
        </Linked>
      ) : null}
      <TextArea
        emojified={showEmoji}
        ref={textAreaRef}
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
            x
          </EmojiHider>
          <WhatsappShareButton
            url={"http://andjust.fyi/" + transformTextToURL(inputMessage)}
          >
            <WhatsappIcon />
          </WhatsappShareButton>
          <TwitterShareButton
            url={"http://andjust.fyi/" + transformTextToURL(inputMessage)}
          >
            <TwitterIcon />
          </TwitterShareButton>
          <FacebookShareButton
            url={"http://andjust.fyi/" + transformTextToURL(inputMessage)}
          >
            <FacebookIcon />
          </FacebookShareButton>
        </ShareContainer>
      ) : null}
      <Options reduced={showShare}>
        <Linked>
          <p>{"http://andjust.fyi/" + transformTextToURL(inputMessage)}</p>
          <TopButton
            onClick={copyToClipboard}
            data-clipboard-text={
              "http://andjust.fyi/" + transformTextToURL(inputMessage)
            }
            color={inputColor}
            disabled={copySuccess}
          >
            {copySuccess ? "Copied to clipboard!" : "Copy URL"}
          </TopButton>
        </Linked>
        {showShare ? null : (
          <OptionsButton color={inputColor} onClick={() => handleShare(true)}>
            share
          </OptionsButton>
        )}
      </Options>
    </Container>
  );
}
