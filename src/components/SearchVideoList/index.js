import VideoList from "../VideoList";
import styles from "./SearchVideoList.module.css";
import Loader from "../../components/Loader";
import { useEffect, useState } from "react";

function filterVideos(videos, searchText) {
  return videos.filter(
    (video) =>
      video.category.includes(searchText) || video.title.includes(searchText)
  );
}
function SearchVideoList({ videos }) {
  const [searchText, setSearchText] = useState("a");
  const foundVideos = filterVideos(videos, searchText);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <section className={styles.container}>
        <input
          onChange={(e) => setSearchText(e.target.value)}
          type="search"
          placeholder="Pesquisar.."
        />

        {loading ? (
          <Loader />
        ) : (
          <VideoList
            videos={foundVideos}
            emptyHeading={`Sem videos sobre '${searchText}'`}
          />
        )}
      </section>
    </>
  );
}
export default SearchVideoList;
