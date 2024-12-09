import { Injectable, inject, signal } from "@angular/core";
import { Product } from "./product.model";
import { HttpClient } from "@angular/common/http";
import { catchError, Observable, of, tap } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
    providedIn: "root"
}) export class ProductsService {

    private readonly http = inject(HttpClient);
    private readonly path = "/api/products";
    
    private readonly _products = signal<Product[]>([]);

    public readonly products = this._products.asReadonly();

    private _url : string = 'http://localhost:8080/api_products';

    public get():Observable<Product[]>{
        return this.http.get<Product[]>(this._url).pipe(
            catchError((error) => {
                return this.http.get<Product[]>(this._url);
            }),
            tap((products) => this._products.set(products)),
        );
    }

    public create(product: Product): Observable<Product> {
        return this.http.post<Product>(this._url, product);
    }
    
    public update(product : Product) : Observable<Product>{
        return this.http.put<Product>(this._url,product);
    }
    
    public delete(productId: number) : Observable<Product>{
        return this.http.delete<Product>(`${this._url}/${productId}`);
    }

    // public get(): Observable<Product[]> {
    //     return this.http.get<Product[]>(this.path).pipe(
    //         catchError((error) => {
    //             return this.http.get<Product[]>("assets/products.json");
    //         }),
    //         tap((products) => this._products.set(products)),
    //     );
    // }

    // public create(product: Product): Observable<boolean> {
    //     return this.http.post<boolean>(this.path, product).pipe(
    //         catchError(() => {
    //             return of(true);
    //         }),
    //         tap(() => this._products.update(products => [product, ...products])),
    //     );
    // }

    // public update(product: Product): Observable<boolean> {
    //     return this.http.patch<boolean>(`${this.path}/${product.id}`, product).pipe(
    //         catchError(() => {
    //             return of(true);
    //         }),
    //         tap(() => this._products.update(products => {
    //             return products.map(p => p.id === product.id ? product : p)
    //         })),
    //     );
    // }

    // public delete(productId: number): Observable<boolean> {
    //     return this.http.delete<boolean>(`${this.path}/${productId}`).pipe(
    //         catchError(() => {
    //             return of(true);
    //         }),
    //         tap(() => this._products.update(products => products.filter(product => product.id !== productId))),
    //     );
    // }
}