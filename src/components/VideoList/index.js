import styles from "./VideloList.module.css";
import Card from "../Card";
function VideoList({ videos, emptyHeading }) {
  const count = videos.length;
  let heading = emptyHeading;
  if (count > 0) {
    const noun = count > 1 ? "Videos" : "Video;";
    heading = `${count} ${noun}`;
  }
  return (
    <>
      <h1>{heading}</h1>
      <section className={styles.videoList}>
        {videos.map((video) => (
          <Card idVideo={video.id} key={video.id} />
        ))}
      </section>
    </>
  );
}
export default VideoList;
