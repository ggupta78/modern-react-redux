import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 3ZjVzP6d-XRNBji578Ak_7DB4a8OJlPN5jQX3UiRtxk",
    },
    params: {
      query: term,
    },
  });

  // console.log(response);

  return response.data.results;
};

export default searchImages;
