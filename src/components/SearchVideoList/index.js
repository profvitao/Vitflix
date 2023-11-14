import VideoList from "../VideoList";
import styles from "./SearchVideoList.module.css";
import { useState } from "react";

function filterVideos(videos, searchText) {
  return videos.filter(
    (video) =>
      video.category.includes(searchText) || video.title.includes(searchText)
  );
}
function SearchVideoList({ videos }) {
  const [searchText, setSearchText] = useState("a");
  const foundVideos = filterVideos(videos, searchText);

  return (
    <>
      <section className={styles.container}>
        <input
          onChange={(e) => setSearchText(e.target.value)}
          type="search"
          placeholder="Pesquisar.."
        />
        <VideoList
          videos={foundVideos}
          emptyHeading={`Sem videos sobre '${searchText}'`}
        />
      </section>
    </>
  );
}
export default SearchVideoList;
