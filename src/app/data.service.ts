import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    public baseUrl = "http://localhost:7188";

    constructor(private http: HttpClient) { }

    public authenticate(data: any) {
        return this.http.post(`${this.baseUrl}/v1/login`, data);
    }

    public getMonthlySalesChartData() {
        return this.http.get(`${this.baseUrl}/v1/reports/ms`);
    }

    public getOrders() {
        return this.http.get(`${this.baseUrl}/v1/orders`);
    }

    public getOrder(order: string) {
        return this.http.get(`${this.baseUrl}/v1/orders/${order}`);
    }
}