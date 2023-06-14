import { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import { getTags } from "./service";
import "./NewAdvertPage.css"

const NewAdvertPage = (props) => {
  const [options, setOptions] = useState();
  useEffect(() => {
    getTags().then((options) => setOptions(options));
  }, []);

  return (
    <Layout title="Sube tu anuncio" {...props}>
      <form>
        <div className="newAdvertPage ">
          <div>
            <label>Nombre</label> 
            <input name="name" type="text" required></input>
          </div>
          <div>
            <label>Tipo</label>
            <select name="sale">
              <option>Venta</option>
              <option>compra</option>
            </select>
          </div>
          <div>
            <label>Precio</label>
            <input name="price" type="text" required></input>
          </div>
          <div>
            <label>Tags</label>
            {options && options.length > 0 ? (
              <select name="tags">
                {options.map((option, index) => (
                  <option key={index}>{option}</option>
                ))}
              </select>
            ) : (
              <p>Cargando opciones...</p>
            )}
          </div>
          <div>
            <label>Foto</label>
            <input type="file" name="photo"></input>
          </div>

          <button type="submit">Enviar</button>
        </div>
      </form>
    </Layout>
  );
};
export default NewAdvertPage;
