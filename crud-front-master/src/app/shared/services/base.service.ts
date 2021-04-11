import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export abstract class BaseService {
  protected actionUrl: string;
  protected configuration: Configuration;

  constructor(protected http: HttpClient, endpointName: string, project?: string) {
    this.actionUrl =
      new Configuration().serverWithApiUrl + `${endpointName}`;
  }

  protected getRequestUrl(): string {
    return this.actionUrl;
  }

  protected getHttpHeaders(): any {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }
}

@Injectable()
export class Configuration {
  public server = environment.urlServer;
  public apiUrl = '';
  public serverWithApiUrl = this.server + this.apiUrl;
}
