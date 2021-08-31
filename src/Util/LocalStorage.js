export default class Storage {
  constructor(object) {
    this.information = object;
  }

  createStorage() {
    window.localStorage.setItem(
      "law_uo_poppin",
      JSON.stringify(this.information)
    );
  }

  static clearStorage() {
    window.localStorage.removeItem("law_uo_poppin");
    window.location = "/";
  }

  static getUser() {
    return JSON.parse(window.localStorage.getItem("law_uo_poppin"));
  }
}
