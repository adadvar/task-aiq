import { Carousel } from "antd";
import { createStyles } from "antd-style";

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

const VideoCarouselSection = () => {
  const { styles } = useStyles();

  return (
    <div>
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
    </div>
  );
};

export default VideoCarouselSection;
