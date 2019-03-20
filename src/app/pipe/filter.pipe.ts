import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: any[], keyword?: string ): any {
    if(!keyword){
      return list;
    }
    return list.filter(item => {
      //todo diy pipe
      let filedValue = item['title'];
      return filedValue.indexOf(keyword) >= 0;
    });
  }

}
