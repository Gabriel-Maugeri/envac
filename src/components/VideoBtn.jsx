const VideoBtn = ({ video, handleVideo }) => {
  return (
    <button
      onClick={() => handleVideo(video)}
      className='h-[24.125rem] w-[42.875rem] cursor-pointer bg-gray-800'
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
