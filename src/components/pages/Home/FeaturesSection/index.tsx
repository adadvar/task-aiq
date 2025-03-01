import { createStyles } from "antd-style";
import { memo, useState } from "react";
import { Center } from "react-layout-kit";
import SegmentedSection from "./SegmentedSection";
import { Flex } from "antd";
import VideoCarouselSection from "./VideoCarouselSection";

const useStyles = createStyles(({ css }) => ({
  container: css`
    position: relative;
    width: 100%;
  `,
  innterContainer: css`
    padding: "24px";
  `,
}));

const FeaturesSection = memo(() => {
  const { styles } = useStyles();
  const [selectedFeature, setSelectedFeature] = useState("overview");

  return (
    <Center className={styles.container} as={"section"} style={{}}>
      <Flex vertical gap={24} align="center" justify="center">
        <SegmentedSection
          selectedFeature={selectedFeature}
          setSelectedFeature={(value: string) => setSelectedFeature(value)}
        />
        <VideoCarouselSection
          selectedFeature={selectedFeature}
          setSelectedFeature={(value: string) => setSelectedFeature(value)}
        />
      </Flex>
      <div style={{ height: "48px" }}></div>
    </Center>
  );
});

export default FeaturesSection;
