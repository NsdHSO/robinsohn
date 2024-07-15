import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { concatMap, delay, from, map, mergeMap, take, tap } from 'rxjs';

@Injectable()
export class AuthService {
  /**
   * Http service
   */
  private readonly _httpClient = inject(HttpClient);

  $users = this._httpClient.get('https://parallelum.com.br/fipe/api/v1/carros/marcas')
    .pipe(
      tap((marcas) => {
        console.log(marcas, 'marcas');
      }),
      mergeMap((marcas: any) => from(marcas).pipe(take(10))), // Convert the
      // array of
      // marcas to an observable stream
      concatMap((marca: any) =>
        this._httpClient.get(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${marca.codigo}/modelos`).pipe(
          tap((modelos) => console.log(modelos, 'modelos')),
          delay(500)
        )
      ),
      tap((finalValue) => {
        console.log(finalValue, 'final value');
      })
    );

}
