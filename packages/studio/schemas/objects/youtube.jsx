import React from "react";
import getYouTubeId from "get-youtube-id";
import YouTube from "@u-wave/react-youtube";

const Preview = (props) => {
  const id = getYouTubeId(props.url);
  console.log(props);
  return (
    <div>
      <YouTube style={{ width: "100%", height: "400px" }} video={id} />
    </div>
  );
};

export default {
  name: "youtube",
  type: "object",
  title: "YouTube Embed",
  fields: [
    {
      name: "url",
      type: "url",
      title: "YouTube video URL",
    },
  ],
  components: {
    preview: Preview,
  },
  preview: {
    select: {
      url: "url",
    },
  },
};
