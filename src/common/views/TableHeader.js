import React from "react";

import HeaderItem from "./HeaderItem";

const TableHeader = ({ headerNames, styleClassName }) => {
  return (
    <thead>
      <tr className={styleClassName}>
        {headerNames.map((elem) => (
          <HeaderItem key={elem.key} item={elem.val} />
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
