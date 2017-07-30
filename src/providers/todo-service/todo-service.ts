import { AppSettingsProvider } from '../app-settings/app-settings';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoServiceProvider {
  apiUrl = this.appSettings.getApiUrl();

  constructor(public http: Http, public appSettings: AppSettingsProvider) {
  }

  public getMachines() {
    return this.http.get(this.apiUrl + 'machines')
    .map(response => response.json().result);
  }

  public addMachine(newMachine) {
    return this.http.post(this.apiUrl + 'machines', {'text':newMachine})
    .map(response => response.json());
  }

  public deleteMachine(machineId) {
    return this.http.delete(this.apiUrl + 'machines/' + machineId)
    .map(response => response.json());
  }
}