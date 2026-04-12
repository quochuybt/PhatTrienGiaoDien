import React from "react";
import "./text.css";
import { useRecoilValue } from "recoil";
import { ThemeAtom } from "../../recoil/ThemeAtom";

const TextComponent = () => {
  const theme = useRecoilValue(ThemeAtom);
  console.log(window.localStorage.getItem("theme"));
  return (
    <p className={theme}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus a
      repudiandae accusamus earum labore, facere voluptas beatae est dolorem
      soluta tempora, neque nemo magnam nostrum totam ad blanditiis possimus
      nulla! Expedita voluptatibus alias minus impedit tempora repellendus.
      Optio dicta, perspiciatis cupiditate atque quidem tempore vero, corrupti
      odio neque sint veritatis! Excepturi aut id, repudiandae nemo incidunt
      itaque pariatur exercitationem natus. Eveniet neque nihil, magni quam
      sequi tempora quo saepe accusamus voluptas repellat cum incidunt facere
      aliquid itaque illum pariatur ad modi! Recusandae atque eligendi, vero
      autem dolore obcaecati optio mollitia. Porro, exercitationem ipsa. Illum,
      quos adipisci molestiae maxime perferendis qui. Vel nobis praesentium ad
      aperiam eveniet necessitatibus tenetur illum ea deleniti accusamus. Quos,
      at accusantium! Velit, earum. Sequi, repellendus fuga. Magnam voluptatibus
      qui alias sed! Veritatis vitae reiciendis quos suscipit fugit dolorum
      similique quae enim optio necessitatibus molestias commodi eveniet eos,
      ducimus officia ipsum harum, amet assumenda reprehenderit. Aliquam,
      blanditiis.
    </p>
  );
};

export default TextComponent;
