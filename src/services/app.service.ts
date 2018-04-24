import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
@Injectable()
export class AppService {
    constructor(private http: HttpClient) { }

    call(start, end, code) {
        return this.http.get(`https://api.cebroker.com/v1/cerenewaltransactions/GetLogsRecordData?startdate=${start}&enddate=${end}&state=${code}`);
    }
    actual(start) {
        return this.http.get(`https://api.cebroker.com/v1/cerenewaltransactions/GetLogsRecordData?startdate=${start}`);
    }
}
