import React from "react";
import './Menu.css';
import MenuTab from "./MenuTab.js";
import SpotHolder from "./SpotHolder";

const MainMenu = () => {
    return(
        <div id="mainmenu">
            <p> Choose a Character</p>
            <MenuTab className="character">
                <SpotHolder imageName="frog_butter" size="150px"></SpotHolder>
                <SpotHolder imageName="panda_pikachu" size="150px"></SpotHolder>
                <SpotHolder imageName="hello_kitty" size="100px"></SpotHolder>
            </MenuTab>
            <MenuTab className="yes">
            </MenuTab>
        </div>
    )
}

export default MainMenu;