import React from "react";
import styled from "styled-components";

const FadeOutLoader = styled.div`
  opacity: ${props => (props.invisible ? "0" : "1")};
  transition: ${props => (props.invisible ? "opacity .2s ease-in" : "none")};
  width: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
`;

export default function Loader(props) {
  return (
    <FadeOutLoader invisible={props.invisible}>
      <p>loading...</p>
    </FadeOutLoader>
  );
}
