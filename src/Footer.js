import React from "react";
import Button from "./Button";

const Footer = ({ icon}) => {
  return (
    <div className="row">
      <a href="https://reactjs.org/" target="_blank">
        <Button icon="heart"/>
      </a>
      <a href="https://www.w3schools.com/react/react_props.asp" target="_blank">
        <Button icon="heart-broken" />
      </a>
    </div>
  );
};

export default Footer;
