import React from "react";
import { useRecoilValue } from "recoil";
import { area } from "../../recoil/AreaAtom";

const Area = () => {
  const a = useRecoilValue(area);
  return <div>Area = {a}</div>;
};

export default Area;
