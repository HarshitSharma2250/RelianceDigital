import React from "react";
import { HomeAppliences } from "../Sublists/SubListHomeAppliences/HomeAppliences";

import { Computers } from "../Sublists/SubListComputers/Computers";
import { Audio } from "../Sublists/SubListAudio/Audio";

import styles from "./List.module.css";
import { IoIosArrowDown } from "react-icons/io";
import { Mobiles } from "../Sublists/SubListMobile/Mobiles";
import { Cameras } from "../Sublists/SubListCameras/Cameras";
import { KitchenAppliences } from "../Sublists/SubListKitchenAppliences/KitchenAppliences";
import { Televisions } from "../Sublists/SubListTelevision/Televisions";
import { PersonalCarse } from "../Sublists/SubListPersonalCare/PersonalCarse";
import { Accesseries } from "../Sublists/SubListAccesseries/Accesseries";
export const List = () => {
  const listMainItem = [
    {
      name: "MOBILE & TABLETS",
      component: <Mobiles />,
    },
    {
      name: "TELEVISION",
      component: <Televisions />,
    },
    {
      name: "AUDIO",
      component: <Audio/>,
    },
    {
      name: "HOME APPLIENCES",
      component: <HomeAppliences/>,
    },
    {
      name: "COMPUTERSS",
      component: <Computers/>,
    },
    {
      name: "CAMERAS",
      component: <Cameras />,
    },
    {
      name: "KITCHEN APPLIENCES",
      component: <KitchenAppliences />,
    },
    {
      name: "PERSONAL CARE",
      component: <PersonalCarse />,
    },
    {
      name: "ACCESSORIES",
      component: <Accesseries/>,
    },
  ];

  return (
    <div className={styles.MainList}>
      {listMainItem.map((ele, index) => (
        <div className={styles.renderListItemsBlock} key={index}>
          <div className={styles.eachRenderitem}>
            <span>{ele.name}</span>
            <IoIosArrowDown className={styles.rendericons} />
          </div>
          <div className={styles.componentRender}>{ele.component}</div>
        </div>
      ))}
    </div>
  );
};
