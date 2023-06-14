import client from "../../api/client";

const advertsURL = '/api/v1/adverts'
const tagsURL = '/api/v1/adverts/tags'



export const getLatestAdverts =() =>{
    return client.get(advertsURL);
};


export const getTags = () => {
    return client.get(tagsURL)
}

export const getAdvert = (id) => {
    const url = `${advertsURL}/${id}`
    return client.get(url)
}