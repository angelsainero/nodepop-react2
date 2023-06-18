import { useEffect, useState } from "react";
import { getLatestAdverts } from "./service";
import Layout from "../layout/Layout";
import { Link } from "react-router-dom";
import Button from "../shared/button";

//1-Advertpage se renderiza por primera vez con Array vacio
//2-se configura un efecto
//3-react sigue el camino hasta el return y termina el render
//cuando termina el render busca si tiene un efecto configurado
//ejecuta el efecto
//si no pasamos [] ejecuta despues de cada render
//si lo pasamos ejecuta despues del primer

const AdvertsPage = (props) => {
  const [query, setQuery] = useState("");
  const [filterOption, setFilterOption] = useState("todos");
  const [isLoading, setIsLoading] = useState(true);
  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    // getLatestAdverts().then((response) => setAdverts(response.data));
    // gracias al interceptor podemos llamar a adverts directamente
    setIsLoading(true);
    getLatestAdverts().then((adverts) => {
      setAdverts(adverts);
      setIsLoading(false);
    });
  }, []);

  const filter = adverts.filter((advert) => {
    const startsWithQuery = (advert.name ?? "").toUpperCase().startsWith(query.toUpperCase());
    if (filterOption === "todos") {
      return startsWithQuery;
    } else {
      return startsWithQuery && advert.sale === (filterOption === "venta");
    }
  });


  return (
    <Layout title="Listado de anuncios" {...props}>
      {isLoading ? (
        <div>Loading....</div>
      ) : (
        <div className="advertsPage">
          <div>
            <label>
              Filtro nombre
              <input
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              ></input>
            </label>
          </div>
          <div>
          <label>
              Filtro compra/venta
              <select value={filterOption} onChange={(event) => setFilterOption(event.target.value)}>
                <option value="todos">Todos</option>
                <option value="venta">Venta</option>
                <option value="compra">Compra</option>
              </select>
            </label>
          </div>
          
          {!!adverts.length ? (
            <ul>
              {filter.map((advert) => (
                <li style={{ listStyle: "none" }} key={advert.id}>
                  <Link to={`/adverts/${advert.id}`}>{advert.name} -</Link>
                  {advert.price} eur -{JSON.stringify(advert.sale)} -
                  {advert.tags}
                </li>
              ))}
            </ul>
          ) : (
            <div style={{ textAlign: "center" }}>
              <p>No hay anuncios disponibles!!</p>
              <Button as={Link} to="/adverts/new">
                Crea tu Anuncio
              </Button>
            </div>
          )}
        </div>
      )}
    </Layout>
  );
};

export default AdvertsPage;
