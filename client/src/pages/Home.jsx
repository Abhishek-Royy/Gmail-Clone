import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [openDrawer, setopenDrawer] = useState(true);

  const toogleDrawerHandel = () => {
    setopenDrawer(!openDrawer);
  };

  return (
    <>
      <Header toogleDrawerHandel={toogleDrawerHandel} />
      <Sidebar openDrawer={openDrawer}/>
      <div>Display Messages</div>
    </>
  );
};

export default Home;
