import { createStyles } from "antd-style";
import landingData from "@/../locales/fa-IR/landing.json";
import { memo } from "react";

const useStyles = createStyles(({ css }) => ({
  videoContainer: css`
    margin: 0 auto;
    width: 100%;
  `,
  video: css`
    width: 100%;
  `,
}));

const VideoItem = memo(
  ({
    video,
    carouselRef,
    setSelectedFeature,
  }: {
    video: string;
    carouselRef: React.RefObject<null>;
    setSelectedFeature: (value: string) => void;
  }) => {
    const { styles } = useStyles();

    // Function to get the next showcase item
    const nextShowCase = (index: string) => {
      const values = Object.keys(landingData.features.showcase);
      if (values.length === Number(index) + 1) return values[0]; // If last item, return first
      return values[Number(index) + 1]; // Return next item
    };

    return (
      <div className={styles.videoContainer}>
        <video
          poster={`/images/landing/${video}.webp`}
          controls
          preload="none"
          className={styles.video}
          // Event handler for video end
          onEnded={() => {
            if (carouselRef.current)
              (carouselRef.current as { next: () => void }).next(); // Navigate to next carousel item
            setSelectedFeature(nextShowCase(video)); // Set next showcase item
          }}
        >
          <source src={`/videos/landing/${video}.webm`} />
        </video>
      </div>
    );
  }
);

export default VideoItem;
