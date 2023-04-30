import React from "react";
import s from "./style.module.css";

const Logo = ({img,title,subtitle}) => {
  console.log(img,title,subtitle);
  return <>
  <div className={s.container}>
    <img className={s.img} src={img} alt="logo" />
    <div className={s.title}>{title}</div>
  </div>
  <div className={s.subtitle}>{subtitle}</div>
  </>;
};

export { Logo };
