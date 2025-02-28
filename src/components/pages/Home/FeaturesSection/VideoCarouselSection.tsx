import { Carousel } from "antd";
import { createStyles } from "antd-style";

const useStyles = createStyles(({ css }) => ({
  container: css`
    max-width: 1000px;
    width: 100%;
  `,
  innterContainer: css``,
  carousel: css`
    width: 100%;
  `,
  videoContainer: css`
    max-width: 1000px;
    margin: 0 auto;
  `,
  video: css`
    width: 100%;
    display: block;
  `,
}));

const VideoCarouselSection = () => {
  const { styles } = useStyles();

  return (
    <div className={styles.container}>
      <Carousel className={styles.carousel}>
        <div className={styles.videoContainer}>
          <video
            poster="/images/landing/0.webp"
            controls
            preload="none"
            className={styles.video}
          >
            <source src="/videos/landing/0.webm" />
          </video>
        </div>
      </Carousel>
    </div>
  );
};

export default VideoCarouselSection;
