import axios from "axios";

export default class HttpServices {
  constructor(path) {
    this.path = path;
  }

  async post(_data) {
    try {
      let { data } = await axios.post(this.path, _data, {
        withCredentials: true,
      });
      return data;
    } catch (error) {
      return { error: error.message };
    }
  }

  async get(_data) {
    try {
      let { data } = await axios.get(this.path, {
        withCredentials: true,
      });
      return data;
    } catch (error) {
      return { error: error.message };
    }
  }
}
