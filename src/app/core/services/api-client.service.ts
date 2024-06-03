import { Injectable } from '@angular/core';
import axios, { AxiosInstance } from 'axios';
import { environment } from 'src/environments/environment';

/**
 * This service acts like a client for the API of this application, for regular https requests to other APIs please
 * use a regular axios instance or Angular's own http service
 */
@Injectable()
export class ApiClientService {

  /**
   * Contains the base configuration used to contact the API that corresponds to this app.
   * @example { baseUrl: "https://my-api.com", headers: { "X-API-Key": "my-api-key" } }
   */
  public http: AxiosInstance;

  constructor() {
    this.http = axios.create({
      baseURL: environment.apiUrl,
      headers: { 'X-API-Key': environment.apiKey }
    });
  }
}
