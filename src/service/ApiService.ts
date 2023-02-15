import {IUser} from "@/interfaces/IUser";

const API_URL = "https://jsonplaceholder.typicode.com/users"

export default class ApiService {
  static getUsers(): Promise<IUser[]> {
    return fetch(`${API_URL}?_limit=6`).then(this.processResponse);
  }

  static getUser(id: number): Promise<IUser> {
    return fetch(`${API_URL}/${id}`).then(this.processResponse);
  }

  static createUser(user: IUser): Promise<any> {
    return fetch(API_URL, {method: 'POST', body: JSON.stringify(user)})
      .then(this.processResponse);
  }

  private static processResponse(response: Response): Promise<any> {
    return response.ok ? response.json() : Promise.reject('Cannot fetch users');
  }
}
