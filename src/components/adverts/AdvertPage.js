import { useParams } from "react-router-dom";
import Layout from "../layout/Layout";

const AdvertPage = (props) => {
  const params = useParams();
  
  return (
    <Layout title="Detalle de Anuncio" {...props}>
      <div>Detalle de Anuncio {params.id}{params.name}</div>
    </Layout>
  );
};

export default AdvertPage;
