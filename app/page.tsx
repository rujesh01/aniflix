import React from "react";
import VideoPage from "../components/VideoPlayer";

// Sample video data (can come from an API or other source)
const videoData = {
  tracks: [
    {
      file: "https://s.megastatics.com/subtitle/9b05cc08756a3ddc698aeee5e2721d45/9b05cc08756a3ddc698aeee5e2721d45.vtt",
      label: "English",
      kind: "captions",
      default: true,
    },
    {
      file: "https://s.megastatics.com/thumbnails/550eec0da792b6ae20b3b906b9376602/thumbnails.vtt",
      label: "Thumbnails",
      kind: "thumbnails",
    },
  ],
  sources: [
    {
      url: "https://mmd.biananset.net/_v7/8fff1b4d38fbbd548c62f805027277d5e22c8ff713adc8f664f68fef8ac13bc3190b864b099c812066149256f438a546b56332b82c6596453f3942fe90b0968542ddbd0f8cd9bdfaceeaad9b4100b6f49ea1c2cf47d336f88fd9f7ad1120774aa0e0e1117932e53ea8a87dbc6c79e255d103efcb6e9a4215b131f65a7ef92f05/master.m3u8",
      type: "application/x-mpegURL",
    },
  ],
};

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <h1>Video Player</h1>
      {/* <VideoPage videoData={videoData} /> */}
    </div>
  );
};

export default HomePage;
