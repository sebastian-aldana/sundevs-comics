import axios from "_utils_/network/request";

const API = process.env.API_URL;
const API_KEY = process.env.API_KEY;

const getComics = async (res, currentPage) => {
  try {
    const { data } = await axios().get(
      `${API}/issues/?api_key=${API_KEY}&format=json&offset=${
        currentPage * 100
      }`
    );
    res.send(data);
  } catch (error) {
    throw error;
  }
};

export default async (req, res) => {
  const { method, query } = req;
  const { currentPage } = query;
  try {
    switch (method) {
      case "GET": {
        await getComics(res, currentPage);
      }

      default:
        break;
    }
  } catch (error) {}
};
