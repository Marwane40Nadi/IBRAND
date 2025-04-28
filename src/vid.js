import "./vid.css";

export default function Video() {
  return (
    <>
      <div id="vidDiv">
        <video controls width="1000">
          <source src="/videos/videoplayback.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
}
