import { Pipe, PipeTransform } from '@angular/core';
import { Tag } from './tag';

@Pipe({
	name: 'tagFilter',
})
export class TagFilterPipe implements PipeTransform {
	transform(tags: Tag[], filterText: string): any {
		return tags.filter(
			(tag: Tag) =>
				tag.display.toLowerCase().indexOf(filterText) > -1 ||
				(typeof tag.value === 'string'
					? tag.value.toLowerCase().indexOf(filterText) > -1
					: tag.value === +filterText),
		);
	}
}
