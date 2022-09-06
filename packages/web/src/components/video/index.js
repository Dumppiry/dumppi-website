import React from "react"
import styled from "styled-components"
import getYouTubeId from "get-youtube-id"
import YouTube from "@u-wave/react-youtube"

const Video = ({ url }) => {
  const id = getYouTubeId(url)
  return (
    <S.Video>
      <S.YouTube
        video={id}
        autoplay={false}
        showCaptions={false}
        controls
        annotations={false}
        modestBranding
        showRelatedVideos={false}
        showInfo={false}
      />
    </S.Video>
  )
}

export default Video
const S = {}

S.Video = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  margin: 2rem 0;
  border-radius: 10px;
  box-shadow: 0 0 25px 0 #dddddd;
  overflow: hidden;
`

S.YouTube = styled(YouTube)`
  position: absolute;
  width: 100%;
  height: 100%;
`
