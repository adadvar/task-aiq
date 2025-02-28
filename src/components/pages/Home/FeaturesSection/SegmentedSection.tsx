import { Segmented } from "antd";
import React from "react";
import landingData from "@/../locales/fa-IR/landing.json";
import { createStyles } from "antd-style";

const useStyles = createStyles(({ css }) => ({
  container: css`
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid #333333;
    width: 668px;
  `,
}));

const SegmentedSection = () => {
  const { styles } = useStyles();

  const showcaseOptions = Object.entries(landingData.features.showcase).map(
    ([value, label]) => ({ label, value })
  );

  return (
    <Segmented<string>
      options={showcaseOptions}
      defaultValue={"overview"}
      size="large"
      className={styles.container}
    />
  );
};

export default SegmentedSection;
