import React, { Component } from "react";
import styled, { css } from "styled-components";
import IoniconsIcon from "react-native-vector-icons/dist/Ionicons";
import FeatherIcon from "react-native-vector-icons/dist/Feather";
import MaterialCommunityIconsIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";

function Pomo(props) {
  return (
    <>
      <EllipseStack>
        <svg
          viewBox="0 0 212.02 230.73"
          style={{
            top: 0,
            width: 212,
            height: 231,
            position: "absolute",
            left: 0
          }}
        >
          <ellipse
            strokeWidth={7}
            fill="rgba(230, 230, 230,0)"
            stroke="#19be26"
            cx={106}
            cy={115}
            rx={103}
            ry={112}
          ></ellipse>
        </svg>
        <TextInput placeholder="25:00"></TextInput>
        <Code>CODE</Code>
      </EllipseStack>
      <ResetRow>
        <Reset>RESET</Reset>
        <Reset2>5/25</Reset2>
      </ResetRow>
      <IconRow>
        <IoniconsIcon
          name="ios-add-circle"
          style={{
            color: "rgba(128,128,128,1)",
            fontSize: 32
          }}
        ></IoniconsIcon>
        <FeatherIcon
          name="minus-circle"
          style={{
            color: "rgba(128,128,128,1)",
            fontSize: 30,
            marginLeft: 9
          }}
        ></FeatherIcon>
      </IconRow>
      <Icon2Stack>
        <MaterialCommunityIconsIcon
          name="home"
          style={{
            top: 0,
            left: 5,
            position: "absolute",
            color: "rgba(128,128,128,1)",
            fontSize: 32
          }}
        ></MaterialCommunityIconsIcon>
        <FeatherIcon
          name="minus-circle"
          style={{
            top: 0,
            left: 0,
            position: "absolute",
            color: "rgba(128,128,128,1)",
            fontSize: 32
          }}
        ></FeatherIcon>
      </Icon2Stack>
      <FeatherIcon
        name="play-circle"
        style={{
          color: "rgba(128,128,128,1)",
          fontSize: 45,
          marginTop: 465,
          alignSelf: "center"
        }}
      ></FeatherIcon>
    </>
  );
}

const TextInput = styled.input`
  font-family: Poppins;
  top: 68px;
  left: 26px;
  width: 172px;
  height: 55px;
  color: #121212;
  position: absolute;
  font-size: 64px;
  font-weight: regular;
  font-style: normal;
  border: none;
  background: transparent;
`;

const Code = styled.span`
  font-family: Poppins;
  color: rgba(74,74,74,1);
  position: absolute;
  font-size: 25px;
  font-weight: 400;
  font-style: normal;
  left: 72px;
  top: 148px;
`;

const EllipseStack = styled.div`
  width: 212px;
  height: 231px;
  margin-top: 246px;
  margin-left: 81px;
  position: relative;
`;

const Reset = styled.span`
  font-family: Poppins;
  color: rgba(74,74,74,1);
  font-size: 25px;
  font-weight: 400;
  font-style: normal;
`;

const Reset2 = styled.span`
  font-family: Poppins;
  color: rgba(74,74,74,1);
  font-size: 25px;
  font-weight: 400;
  font-style: normal;
  margin-left: 179px;
`;

const ResetRow = styled.div`
  height: 25px;
  flex-direction: row;
  display: flex;
  margin-top: 138px;
  margin-left: 33px;
  margin-right: 42px;
`;

const IconRow = styled.div`
  height: 32px;
  flex-direction: row;
  display: flex;
  margin-top: -64px;
  margin-left: 37px;
  margin-right: 273px;
`;

const Icon2Stack = styled.div`
  width: 37px;
  height: 32px;
  margin-top: -608px;
  margin-left: 188px;
  position: relative;
`;

export default Pomo;
