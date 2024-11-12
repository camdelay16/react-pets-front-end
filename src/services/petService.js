import axios from "axios";
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/pets`;

const index = async () => {
  try {
    const res = await axios.get(BASE_URL);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const create = async (formData) => {
  try {
    const res = await axios.post(BASE_URL, formData);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const updatePet = async (formData, petId) => {
  try {
    const res = await axios.put(`${BASE_URL}/${petId}`, formData);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

//will place more functions in this export
export { index, create, updatePet };
