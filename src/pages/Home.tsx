import { Helmet } from "react-helmet-async";
import { AboutUsComp } from "../components/sections/AboutUs";
import { Hero } from "../components/sections/Hero";
import ComingSoon from "../components/elements/ComingSoon";
import { Services } from "../components/sections/Services";

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>Southland Pharmacy</title>
        <meta
          name="description"
          content="Your friendly neighborhood pharmacy in Taylor, Michigan, offering prescription refills, delivery, and personalized health services."
        />
      </Helmet>
      <ComingSoon />
      <Hero />
      <div className="h-16" />

      <Services />
      <div className="h-16" />

      <AboutUsComp />
      <div className="h-16" />
    </>
  );
};
