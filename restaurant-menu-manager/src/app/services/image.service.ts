import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private UNSPLASH_API = 'https://api.unsplash.com/search/photos';
  private ACCESS_KEY = 'Qj66RFUVCzxY73nj7ZJfIMFoHp8Tl-sNUPNWx0zZboU'; // Registrate en unsplash.com para obtener una key

  constructor(private http: HttpClient) {}

  getDishImage(dishName: string, category: string): Observable<{url: string, alt: string}> {
    const query = `${dishName} ${category} food`;
    return this.http.get<any>(this.UNSPLASH_API, {
      params: {
        query: query,
        per_page: '1',
        client_id: this.ACCESS_KEY
      }
    }).pipe(
      map(response => {
        if (response.results.length > 0) {
          return {
            url: response.results[0].urls.small,
            alt: response.results[0].alt_description || `Imagen de ${dishName}`
          };
        } else {
          // Imagen por defecto si no hay resultados
          return {
            url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            alt: 'Imagen de restaurante genérica'
          };
        }
      })
    );
  }
}
