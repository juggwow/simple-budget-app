import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusFormat'
})
export class StatusFormatPipe implements PipeTransform {

  transform(value: string | null): string {
    if(value){
      return value==='A'?"Approve":"Reject"
    }
    else{
      return "Undefined"
    }
    
    
  }

}
