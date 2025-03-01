import VideoItem from "./VideoItem";

const VideoList = ({
  videos,
  carouselRef,
}: {
  videos: string[];
  carouselRef: React.RefObject<null>;
}) => {
  return (
    <>
      {videos.map((video) => (
        <VideoItem key={video} video={video} carouselRef={carouselRef} />
      ))}
    </>
  );
};

export default VideoList;
