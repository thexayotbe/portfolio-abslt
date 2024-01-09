// CursorFollower.js
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const FollowerCursor = styled.div`
  position: fixed;
  width: 6px;
  height: 6px;
  background-color: #222;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: transform 0.2s ease, width 0.2s ease, height 0.2s ease; /* Added animations */
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 30px;
    height: 30px;
    background-color: transparent;
    border: 2px solid #222;
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transform: translate(-50%, -50%);
  }
`;

const Follower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const updateCursorPosition = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    document.addEventListener("mousemove", updateCursorPosition);

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);
  return (
    <FollowerCursor
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)", // Initial position
      }}
    />
  );
};

export default Follower;
