import axios from "_utils_/network/request";

const API_KEY = process.env.API_KEY;

const getLocations = async (res, body) => {
  try {
    const promises = body.map((url) =>
      axios().get(`${url}?api_key=${API_KEY}&format=json`)
    );
    const initialValue = {};
    const data = await axios().all(promises);
    const response = data.reduce((obj, item) => {
      return {
        ...obj,
        [item.data.results.id]: item.data.results,
      };
    }, initialValue);
    res.send(response);
  } catch (error) {
    throw error;
  }
};

export default async (req, res) => {
  const { method, body } = req;
  try {
    switch (method) {
      case "POST": {
        await getLocations(res, body);
      }

      default:
        break;
    }
  } catch (error) {}
};
