import { getStreamLink } from "@/actions";
import VideoPlayer from "@/components/VideoPlayer";

const VideoPage = async () => {
  const Data = await getStreamLink();

    const {data, success } = Data


  return (
    <div>
      <h1>this is video page</h1>
      {/* <VideoPage/> */}
      <VideoPlayer videoData={data} />
    </div>
  );
};

export default VideoPage;
