// import React from "react";
// import { CSSTransition } from "react-transition-group";
// import ReactDOM from "react-dom/client";

import "./SideDrawer.css";

const SideDrawer = (props) => {
  return <aside className="side-drawer">{props.children}</aside>;
  // return ReactDOM.createPortal(content, document.getElementById("drawer-tool"));
};

export default SideDrawer;
