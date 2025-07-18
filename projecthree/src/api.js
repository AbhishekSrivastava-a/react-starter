import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID NaLTi6TdeiAwpt2O_H15dH1EE2XNDilYL2hdZ4uI_yo',
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
