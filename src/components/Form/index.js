import styles from "./Form.module.css";
import { categories } from "../Category";
import { useState } from "react";

function Form() {
  let [url, setUrl] = useState("");
  const [category, setCategory] = useState("");
  const [videos, setVideos] = useState([]);
  const [errors, setErrors] = useState("");

  function onSave(e) {
    e.preventDefault();
    let id = url.split("=")[1];

    const regex =
      /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9\-_]+)$/;

    //valida url
    if (!regex.test(url) || url.length < 43) {
      setErrors("ERRO: URL inválida!");
      return;
    } else {
      setErrors("");
    }

    //valida categoria
    if (!category || category === "-") {
      setErrors("ERRO: Escolha uma categoria");
      return;
    } else {
      setErrors("");
    }

    const newVideo = { id, category };

    setVideos([...videos, newVideo]);

    //grava local
    localStorage.setItem("videos", JSON.stringify([...videos, newVideo]));

    //limpa
    setUrl("");
    setCategory("-");
  }
  return (
    <>
      <section className={styles.container}>
        <h2>Cadastro de vídeo</h2>
        <form onSubmit={onSave}>
          <div>
            <label>Url do vídeo</label>
            <input
              type="text"
              placeholder="Digite a url do video"
              required="required"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              minLength="43"
              maxLength="43"
            />
          </div>
          <div>
            <label>Categoria</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="-">Selecione uma categoria</option>
              {categories.map((category) => {
                return <option value={category}>{category}</option>;
              })}
            </select>
          </div>
          <div>
            <button>Cadastrar</button>
          </div>
          <div>{errors}</div>
        </form>
      </section>
    </>
  );
}
export default Form;
