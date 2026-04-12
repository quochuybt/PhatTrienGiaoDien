import React from "react";
import { useRecoilValue } from "recoil";
import { CouterAtom } from "../../recoil/CouterAtom";

const ComponentA = () => {
  const value = useRecoilValue(CouterAtom);
  return (
    <div>
      <h1>ComponentA {value}</h1>
    </div>
  );
};

export default ComponentA;
