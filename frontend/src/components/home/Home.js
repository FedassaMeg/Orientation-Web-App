import React from "react";

import Container from "../components/Container";
import HeaderBar from "./HeaderBar";
import DashboardContainer from "./DashboardContainer";

export default function Home() {
  return (
    <Container>
      <HeaderBar />
      <DashboardContainer />
    </Container>
  );
}
