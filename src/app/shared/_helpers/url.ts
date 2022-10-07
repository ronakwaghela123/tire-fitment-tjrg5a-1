const environment = {
  apiUrl: 'https://6080be3273292b0017cdbf2a.mockapi.io/',
};

export default class Url {
  // Tire Fitment
  static GET_YEARS_URL = `${environment.apiUrl}${'years'}`;
  static GET_MAKES_URL = `${environment.apiUrl}${'makes'}`;
  static GET_MODELS_URL = `${environment.apiUrl}${'models'}`;
  static GET_TRIM_URL = `${environment.apiUrl}${'trim'}`;
}
