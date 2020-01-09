import React from "react";

import HeaderBar from "./HeaderBar";
import DashboardContainer from "./DashboardContainer";

export default function Home() {
  return [
    <HeaderBar key="home-page-header" />,
    <DashboardContainer key="home-page-dashboard" />
  ];
}
