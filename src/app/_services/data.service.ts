import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable()
export class DataService {

  private apiUrl = "https://jsonplaceholder.typicode.com";
  private userNames = [
    "Demarcus Fagan",
    "Cinthia Lesesne",
    "Mickey Lyford",
    "Eneida Archibald",
    "Ai Brunner",
    "Deloise Mcquaid",
    "Yoshie Terrel",
    "Zora Deng",
    "Rene Raley",
    "Ellsworth Pleasants"
  ];


  constructor(private httpClient: HttpClient) {
  }


  getPosts() {
    return this.httpClient.get(this.apiUrl + '/posts');
  }

  getPostsById(id: number) {
    return this.httpClient.get(this.apiUrl + '/posts/' + id);
  }

  getNameById(id: number): string {
    if (id <= this.userNames.length) {
      return this.userNames[id - 1];
    } else {
      return "";
    }
  }

}
