import { Navigate, useParams } from "react-router-dom";
import Layout from "../layout/Layout";
import { useEffect, useState } from "react";
import { getAdvert } from "./service";

const AdvertPage = (props) => {
  const params = useParams();
  const [error, setError] = useState(null);
  const [advert, setAdvert] = useState(null);

  useEffect(() => {
    getAdvert(params.id)
      .then((advert) => setAdvert(advert))
      .catch((error) => setError(error));
  }, [params.id]);

  if(error?.status===404){
    return <Navigate to="/404" />
  }
  return (
    <Layout title="Detalle de Anuncio">
      {advert && <div>{advert.name}</div>}
      {advert && <img src={advert.photo} alt="none"></img>}
      {advert && <div>Precio: {advert.price} euros</div>}
      <br></br>
    </Layout>
  );
};

export default AdvertPage;
