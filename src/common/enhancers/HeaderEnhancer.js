import React from "react";

const HeaderEnhancer = (headerNames, styleCLassName) => {
  return (Header) => (
    <Header headerNames={headerNames} styleClassName={styleCLassName} />
  );
};

export default HeaderEnhancer;
