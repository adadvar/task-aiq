import { createStyles } from "antd-style";
import React from "react";
import { GotoType } from "./VideoCarouselSection";

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
}: {
  video: string;
  carouselRef: React.RefObject<null | GotoType>;
}) => {
  const { styles } = useStyles();

  return (
    <div className={styles.videoContainer}>
      <video
        poster={`/images/landing/${video}.webp`}
        controls
        preload="none"
        className={styles.video}
        onEnded={() => carouselRef?.current?.next()}
      >
        <source src={`/videos/landing/${video}.webm`} />
      </video>
    </div>
  );
};

export default VideoItem;
