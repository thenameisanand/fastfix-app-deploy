import { Button } from "@material-ui/core";
import React, { useState,  } from 'react'

import "./Banner.css";
import Card from "./Card";

function Banner() {

  return (
    <div className="banner">
      <div className="banner__content">
        <h1>Quality Services, On-Demand</h1>
        <Button>Explore Services</Button>
      </div>
      
    </div>
  );
}

export default Banner;