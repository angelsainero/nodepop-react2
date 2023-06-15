import { Navigate, useParams } from "react-router-dom";
import Layout from "../layout/Layout";
import { useEffect, useState } from "react";
import { getAdvert } from "./service";

const AdvertPage = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const [error, setError] = useState(null);
  const [advert, setAdvert] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getAdvert(params.id)
      .then((advert) => setAdvert(advert),setIsLoading(false))
      .catch((error) => setError(error));
    
  }, [params.id]);

  if (error?.status === 404) {
    return <Navigate to="/404" />;
  }
  return (
    <Layout title="Detalle de Anuncio"{...props}>
      {isLoading ? (
        <div>Loading....</div>
      ) : (
        <div>
          {advert && <div>{advert.name}</div>}
          {advert && <img src={advert.photo} alt="none"></img>}
          {advert && <div>Precio: {advert.price} euros</div>}
        </div>
      )}
    </Layout>
  );
};

export default AdvertPage;
