import React, { useState, useEffect, useRef } from "react";
import "emoji-mart/css/emoji-mart.css";
import styled, { css } from "styled-components/macro";
import Clipboard from "react-clipboard.js";

import { ReactComponent as TwitterIcon } from "./../assets/img/twitter.svg";
import { ReactComponent as WhatsappIcon } from "./../assets/img/whatsapp.svg";
import { ReactComponent as FacebookIcon } from "./../assets/img/facebook.svg";
import { ReactComponent as GitHubIcon } from "./../assets/img/github.svg";

import {
  WhatsappShareButton,
  TwitterShareButton,
  FacebookShareButton
} from "react-share";

const Container = styled.div`
  width: 100%;
  background-color: ${props => props.background || "#3f51b5"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 5rem;
    margin: 5% 0 0 0;
  }
`;

const TextArea = styled.textarea`
  width: ${props => (props.emojified ? "85%" : "100%")};
  font-size: 5rem;
  caret-color: white;
  font-weight: bold;
  height: 100%;
  background-color: transparent;
  text-align: center;
  white-space: normal;
  overflow: visible;
  resize: none;
  vertical-align: middle;
  padding: 0 15% 10% 15%;
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
  min-height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  left: 0;
  width: ${props => (props.reduced ? "85%" : "100%")};
`;

const OptionsButton = styled.button`
  cursor: pointer;
  padding: 8px 15px 8px 15px;
  background-color: "white";
  color: ${props => props.color || "#3f51b5"};
  transition: 0.4s ease all;
  border: none;
  outline: none;
  position: relative;
  border-radius: 20px;
  max-width: 100px;
  margin-bottom: 15px;
  :hover {
    text-decoration: underline;
  }
`;

const TopButton = styled(Clipboard)`
  cursor: pointer;
  padding: 6px 13px 7px 10px;
  background-color: "white";
  color: ${props => props.color || "#3f51b5"};
  border-radius: 0 20px 20px 0;
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

const GitHubContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  margin: 20px;
  :hover {
    svg {
      transform: scale(1.1);
    }
  }
  svg {
    width: 30px;
    height: 30px;
    transition: 0.4s ease all;
    path {
      fill: white;
    }
  }
`;

const Linked = styled.div`
  font-size: 1rem;
  position: relative;
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

const ShareContainer = styled.div`
  padding: 20px;
  position: relative;
  width: auto;
  height: auto;
  box-sizing: border-box;
  right: 0;
  display: flex;
  flex-direction: row;
  .SocialMediaShareButton {
    max-width: 50px;
    cursor:pointer;
    :hover {
    svg {
      transform: scale(1.1);
    }
  }
    svg {
      width: 100%;
      height: 100%;
      transition: .4s ease all;
    }
  }
`;

export default function Message(props) {
  const { message } = props.match.params;
  const inputColor = props.color;

  const [inputMessage, setValue] = useState(transformURLToText(message));

  const [showShare, setShare] = useState(false);

  const [copySuccess, setCopySuccess] = useState(false);

  const inputEl = useRef(null);

  useEffect(() => {
    // Update the document title using the browser API
    inputEl.current.focus();

  });

  function copyToClipboard() {
    setCopySuccess(true);
    setTimeout(() => {
      setCopySuccess(false);
    }, 2000);
    console.log("es el long " + isItTooLong());
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
      var defaultMessage = "";
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

  function isItTooLong() {
    var less = transformTextToURL(inputMessage);
    if (less.length >= 30) {
      less = less.substring(0, 30) + "...";
    }
    return less;
  }

  const linkBottom = "http://andjust.fyi/" + isItTooLong();

  return (
    <Container background={inputColor}>
      <h1>And just fyi...</h1>
      <TextArea
        ref={inputEl} 
        autoFocus={true}
        type="text"
        id="inputArea"
        value={inputMessage}
        onChange={updateInputMessage}
        onClick={cleanMessage}
      />
      <Options>
        {showShare ? (
          <ShareContainer>
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
        {showShare ? null : (
          <OptionsButton color={inputColor} onClick={() => handleShare(true)}>
            Share
          </OptionsButton>
        )}
        <Linked>
          <p>{linkBottom}</p>
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
      </Options>
      <GitHubContainer>
        <a href="https://github.com/fobossalmeron/message">
          <GitHubIcon />
        </a>
      </GitHubContainer>
    </Container>
  );
}
