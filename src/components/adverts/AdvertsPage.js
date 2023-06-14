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
  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    // getLatestAdverts().then((response) => setAdverts(response.data));
    // gracias al interceptor podemos llamar a adverts directamente
    getLatestAdverts().then((adverts) => setAdverts(adverts));
  }, []);

  return (
    <Layout title="Listado de anuncios" {...props}>
      <div className="advertsPage">
        {!!adverts.length ? (
          <ul>
            {adverts.map((advert) => (
              <li style={{listStyle:'none'}} key={advert.id}>
                <Link to={`/adverts/${advert.id}`}>{advert.name} -</Link>
                {advert.price} eur -{JSON.stringify(advert.sale)} -{advert.tags}
              </li>
            ))}
          </ul>
        ) : (
          <div style={{textAlign:'center'}}>
            <p>No hay anuncios disponibles!!</p>            
            <Button as={Link} to="/adverts/new">Crea tu Anuncio</Button>
            
          </div>
        )}
      </div>
    </Layout>
  );
};

export default AdvertsPage;
