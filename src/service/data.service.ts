import { Injectable } from '@angular/core';
import { ConstantsService } from './constants.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private constants_service: ConstantsService) { }
  
}
