import { Carousel } from "antd";
import { createStyles } from "antd-style";
import { useEffect, useRef } from "react";
import landingData from "@/../locales/fa-IR/landing.json";
import VideoItem from "./VideoItem";

const useStyles = createStyles(({ css }) => ({
  container: css`
    max-width: 1000px;
    width: 100%;
    box-shadow: 0 0 12vw -4vw #a092ff;
    border-radius: 16px;
    overflow: hidden;
    border: 1px solid #333;
    @media (max-width: 1000px) {
      width: 90vw;
    }
  `,
  carousel: css`
    width: 100%;
  `,
  videoContainer: css`
    margin: 0 auto;
    width: 100%;
  `,
  video: css`
    width: 100%;
  `,
}));

const VideoCarouselSection = ({
  selectedFeature,
  setSelectedFeature,
}: {
  selectedFeature: string;
  setSelectedFeature: (value: string) => void;
}) => {
  const { styles } = useStyles();
  const ref = useRef(null);

  const findIndex = (key: string) => {
    const keys = Object.keys(landingData.features.showcase);
    return keys.indexOf(key);
  };

  const selectedFeatureIndex = findIndex(selectedFeature);

  useEffect(() => {
    if (ref.current) {
      (ref.current as { goTo: (index: number) => void }).goTo(
        selectedFeatureIndex
      );
    }
  }, [selectedFeature]);

  return (
    <div>
      <div className={styles.container}>
        <Carousel className={styles.carousel} ref={ref}>
          <VideoItem
            video={"0"}
            carouselRef={ref}
            setSelectedFeature={setSelectedFeature}
          />
          <VideoItem
            video={"1"}
            carouselRef={ref}
            setSelectedFeature={setSelectedFeature}
          />
          <VideoItem
            video={"2"}
            carouselRef={ref}
            setSelectedFeature={setSelectedFeature}
          />
          <VideoItem
            video={"3"}
            carouselRef={ref}
            setSelectedFeature={setSelectedFeature}
          />
          <VideoItem
            video={"4"}
            carouselRef={ref}
            setSelectedFeature={setSelectedFeature}
          />
          <VideoItem
            video={"5"}
            carouselRef={ref}
            setSelectedFeature={setSelectedFeature}
          />
        </Carousel>
      </div>
    </div>
  );
};

export default VideoCarouselSection;
