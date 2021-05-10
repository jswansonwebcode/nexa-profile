import React from "react";
import home from "../img/home.jpg";
import HSProfilePicInfo from "../components/HSProfilePicInfo";
import HSProfileFillerBox from "../components/HSProfileFillerBox";

export default function HomeScreen() {
  return (
    <div>
      <HSProfilePicInfo></HSProfilePicInfo>
      <div className="hsContainer">
        <img className="large" src={home} alt="home"></img>
        <h1>Get a Great Mortgage Rate</h1>
      </div>
      <HSProfileFillerBox></HSProfileFillerBox>
    </div>
  );
}
