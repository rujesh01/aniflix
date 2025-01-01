type Props = {
  children: React.ReactNode;
};

const VideoPageLayout = ({ children }: Props) => {
  return (
    <div>
      <h1>this is layout</h1>
      <div>{children}</div>
    </div>
  );
};

export default VideoPageLayout;
