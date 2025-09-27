import React from "react";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <nav className="relative h-[88px]">
      <div className="fixed top-0 z-30 w-full">
        <div className="mx-auto w-5/6 flex-between">
        <h1>nav</h1></div>
      </div>
    </nav>
  );
};

export default NavBar;
