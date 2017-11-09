import { Pipe, PipeTransform } from '@angular/core';
import { Tag } from './tag';

@Pipe({
  name: 'tagFilter'
})
export class TagFilterPipe implements PipeTransform {

  transform(tag: Tag, filterText: string): any {
	const hasMatch: boolean =
		tag.display.indexOf(filterText) > -1 ||
		(
			typeof tag.value === 'string' ?
				tag.value.indexOf(filterText) > -1 :
				tag.value === +(filterText)
		);

	return hasMatch;
  }

}
