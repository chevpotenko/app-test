import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: any, term: any): any {
    if(!term) {
      return list;
    }
    return list.filter((item) => {
      return item.name.toLowerCase().includes(term.toLowerCase());
    })
  }

}
