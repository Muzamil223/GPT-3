import React from "react";
import "./Brand.css";
import { atlassian, dropbox, google, shopify, slack } from "./imports";

const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      <div>
        <img src={google} alt="gppgle" />
      </div>
      <div>
        <img src={slack} alt="gppgle" />
      </div>
      <div>
        <img src={atlassian} alt="gppgle" />
      </div>
      <div>
        <img src={dropbox} alt="gppgle" />
      </div>
      <div>
        <img src={shopify} alt="gppgle" />
      </div>
    </div>
  );
};

export default Brand;
