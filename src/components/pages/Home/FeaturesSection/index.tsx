import { createStyles } from "antd-style";
import { memo } from "react";
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

  return (
    <Center className={styles.container} as={"section"} style={{}}>
      <Flex vertical gap={24} align="center" justify="center">
        <SegmentedSection />
        <VideoCarouselSection />
      </Flex>
    </Center>
  );
});

export default FeaturesSection;
