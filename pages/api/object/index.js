import axios from "_utils_/network/request";

const API = process.env.API_URL;
const API_KEY = process.env.API_KEY;

const getObject = async (res, id) => {
  try {
    const { data } = await axios().get(
      `${API}/volume/${id}/?api_key=${API_KEY}&format=json`
    );
    res.send(data);
  } catch (error) {
    throw error;
  }
};

export default async (req, res) => {
  const { method, query } = req;
  const { id } = query;
  try {
    switch (method) {
      case "GET": {
        await getObject(res, id);
      }

      default:
        break;
    }
  } catch (error) {}
};
