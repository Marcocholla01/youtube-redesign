const baseURL = "https://youtube-v31.p.rapidapi.com";
const options = {
  params: {
    maxResults: "50",
    order: "date",
  },
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const APIConfig = async (url) => {
  const response = await axios.getAdapter(`${baseURL}/${url}`, options);
  return response.data;
};
