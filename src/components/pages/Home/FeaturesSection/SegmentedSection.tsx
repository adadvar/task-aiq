import { Segmented } from "antd";
import React, { memo, useState } from "react";
import landingData from "@/../locales/fa-IR/landing.json";
import { createStyles } from "antd-style";

const useStyles = createStyles(({ css }) => ({
  container: css`
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid #333333;
    width: 668px;
  `,
}));

const SegmentedSection = memo(
  ({
    selectedFeature,
    setSelectedFeature,
  }: {
    selectedFeature: string;
    setSelectedFeature: (value: string) => void;
  }) => {
    const { styles } = useStyles();

    // Transform showcase data into options for Segmented component
    const showcaseOptions = Object.entries(landingData.features.showcase).map(
      ([value, label]) => ({ label, value })
    );

    return (
      <Segmented<string>
        options={showcaseOptions}
        value={selectedFeature}
        size="large"
        className={styles.container}
        onChange={setSelectedFeature}
      />
    );
  }
);

export default SegmentedSection;
