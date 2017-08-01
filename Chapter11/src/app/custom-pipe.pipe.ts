import { Pipe, PipeTransform } from '@angular/core';
 
@Pipe({
 name : "UpdateTaxPipe"
})
 
export class UpdateTaxPipe implements PipeTransform{
 transform(value:number):number{
 return (value)/10;
 }
}