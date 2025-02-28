import { Segmented } from "antd";
import React from "react";
import landingData from "@/../locales/fa-IR/landing.json";

const SegmentedSection = () => {
  const showcaseOptions = Object.entries(landingData.features.showcase).map(
    ([value, label]) => ({ label, value })
  );

  return (
    <Segmented<string> options={showcaseOptions} defaultValue={"overview"} />
  );
};

export default SegmentedSection;
