const VideoBtn = ({ video, handleVideo }) => {
  return (
    <button
      onClick={() => handleVideo(video)}
      className='h-[16rem] w-[28rem] cursor-pointer bg-gray-800'
      >
      <video 
        src={`assets/videos/${video}`}
        className='h-full w-full object-cover'
        preload="metadata"
        muted
        playsInline
      />
    </button>
  )
}

export default VideoBtn
