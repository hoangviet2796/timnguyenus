import videoHomecls from "./videoHome.module.css";

export default function videoHome() {
  return (
    <div className="w-full relative">
      <video
        className={`${videoHomecls.video}`}
        autoPlay
        muted
        loop
        controls={false}
        preload="none"
        playsInline
      >
        <source src="/images/SITETIMNGUYEN/2.mp4" type="video/mp4" />
        <track
          src="/path/to/captions.vtt"
          kind="subtitles"
          srcLang="en"
          label="English"
        />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-1/3 w-full text-center text-white">
        <h1 className="sm:text-7xl xl:text-8xl font-semibold mb-5">
          Luôn có Tim đồng hành
        </h1>
        <h2 className="sm:text-4xl xl:text-5xl italic">
          Tạo gắn kết - Trao giá trị - Gửi lòng tin{" "}
        </h2>
      </div>
    </div>
  );
}
