import { createStyles } from "antd-style";
import landingData from "@/../locales/fa-IR/landing.json";

const useStyles = createStyles(({ css }) => ({
  videoContainer: css`
    margin: 0 auto;
    width: 100%;
  `,
  video: css`
    width: 100%;
  `,
}));

const VideoItem = ({
  video,
  carouselRef,
  setSelectedFeature,
}: {
  video: string;
  carouselRef: React.RefObject<null>;
  setSelectedFeature: (value: string) => void;
}) => {
  const { styles } = useStyles();

  const nextShowCase = (index: string) => {
    const values = Object.keys(landingData.features.showcase);
    if (values.length === Number(index) + 1) return values[0];
    return values[Number(index) + 1];
  };

  return (
    <div className={styles.videoContainer}>
      <video
        poster={`/images/landing/${video}.webp`}
        controls
        preload="none"
        className={styles.video}
        onEnded={() => {
          if (carouselRef.current)
            (carouselRef.current as { next: () => void }).next();
          setSelectedFeature(nextShowCase(video));
        }}
      >
        <source src={`/videos/landing/${video}.webm`} />
      </video>
    </div>
  );
};

export default VideoItem;
