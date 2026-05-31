import { Helmet } from "react-helmet-async";
import { Banner } from "../components/elements/Banner";
import { VaccineInfo } from "../components/sections/VaccineInfo";
export const Vaccines = () => {
  return (
    <>
      <Helmet>
        <title>Vaccines - Southland Pharmacy</title>
        <meta
          name="description"
          content="Learn about how you can get safely vaccinated in Taylor, MI."
        />
      </Helmet>
      <Banner text="Vaccines" />
      <VaccineInfo />
    </>
  );
};
