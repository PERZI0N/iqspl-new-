import React from "react";

import ReadTicks from "../../icons/ReadTicks";

const List = ({ children }) => {
  return (
    <>
      <div className={"flex gap-1 text-secondary"}>
        <div className="pt-1">
          <ReadTicks />
        </div>
        <div>{children}</div>
      </div>
    </>
  );
};

export default List;
