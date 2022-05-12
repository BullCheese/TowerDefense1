import React from "react";
import './MenuTab.css';

const MenuTab = (props) => {
    const classes = 'menutab' + props.className;
    return (
        <div className={classes}>{props.children}</div>
    )
}

export default MenuTab;