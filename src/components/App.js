import React from "react";
import { HashRouter as  Routes, Route } from "react-router-dom";

import Header from "./Header";
import Home from "../Pages/Home";
import Projects from "../Pages/Projects";
import Team from "../Pages/Team";
import Footer from "./Footer";
import "bootstrap-icons/font/bootstrap-icons.css";
import AboutUs from "../Pages/About_Us";

// Import all individual project pages
import BungalowNyari from "../Pages/Subprojects/BungalowNyari";
import ChurchChumvi from "../Pages/Subprojects/ChurchChumvi";
import ExecutiveFlatsCityPark from "../Pages/Subprojects/ExecutiveFlatsCityPark";
import GuestHouseMakutano from "../Pages/Subprojects/GuestHouseMakutano";
import LuxuryBungalowsRunda from "../Pages/Subprojects/LuxuryBungalowsRunda";
import OfficeBlockBabadogo from "../Pages/Subprojects/OfficeBlockBabadogo";
import ResidentialFlatsNakuru from "../Pages/Subprojects/ResidentialFlatsNakuru";
import ResidentialFlatsWanyee from "../Pages/Subprojects/ResidentialFlatsWanyee";
import WarehouseChangamwe from "../Pages/Subprojects/WarehouseChangamwe";
import WarehouseRuaraka from "../Pages/Subprojects/WarehouseRuaraka";
import WarehouseRuarakaSingle from "../Pages/Subprojects/WarehouseRuarakaSingle";
import WaridiHouse from "../Pages/Subprojects/WaridiHouse";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Team />} />
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="/projects/bungalow-nyari" element={<BungalowNyari />} />
        <Route path="/projects/church-chumvi" element={<ChurchChumvi />} />
        <Route path="/projects/executive-flats-city-park" element={<ExecutiveFlatsCityPark />} />
        <Route path="/projects/guest-house-makutano" element={<GuestHouseMakutano />} />
        <Route path="/projects/luxury-bungalows-runda" element={<LuxuryBungalowsRunda />} />
        <Route path="/projects/office-block-babadogo" element={<OfficeBlockBabadogo />} />
        <Route path="/projects/residential-flats-nakuru" element={<ResidentialFlatsNakuru />} />
        <Route path="/projects/residential-flats-wanyee" element={<ResidentialFlatsWanyee />} />
        <Route path="/projects/warehouse-changamwe" element={<WarehouseChangamwe />} />
        <Route path="/projects/warehouse-ruaraka" element={<WarehouseRuaraka />} />
        <Route path="/projects/warehouse-ruaraka-single" element={<WarehouseRuarakaSingle />} />
        <Route path="/projects/waridi-house" element={<WaridiHouse />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
