# TagSelect

This is a project that provides an Angular component to select items from a list in a tag-like manner. You will be able to import the module into your project and add the component in your HTML file.

## Using the Component

Here is a description of the inputs and outputs, as well as how to style the component:

### Inputs
`tagMapping`: This is an object with two attributes, `value` and `display`. The value of the those attributes should be the names of the fields for the objects that the people will be selecting.

So let's say your list of objects that you want the user to select has an `id` and a `name` (with possibly other attributes as well). Your tag mapping object should look like this: `{ value: 'id', display: 'name' }`. A list will be built inside the component that shows the possible tags and the selected tags using this mapping.

`tagsToSelect`: The master list of items the user will be able to select. It doesn't matter what attributes the objects in the array have, as long as you pass in a `tagMapping` object that tells the component which attributes are the important ones.

`tagItemIdentifierPlural`: A string (plural) to describe the tags. This means if you pass in nothing, the component will say "Availble Tags" and "Selected Tags". But if you pass in "Classes", it would say "Available Classes" and "Selected Classes".

`tagsSelectedAtStart`: This is an array of the same elements that you passed in for `tagsToSelect`. These are items that should start out as selected when the component is loaded. It uses the same `tagMapping` object to find which ones should be selected.

`iconClasses`: An object with four attributes: `iconPrefix`, `checkedIconClass`, `uncheckedIconClass`, `dynamicallyAddIconClass`. They default to the following:

```
{
    iconPrefix: 'fa',
    checkedIconClass: 'fa-check-square-o',
    uncheckedIconClass: 'fa-square-o',
    dynamicallyAddIconClass: 'fa-plus',
}
```
The default is to use FontAwesome, but you can use whatever you're using in your app, by passing in the correct icon class names.

`canDynamicallyAdd`: A boolean value that determines if the end user can dynamically add a new tag. Defaults to false.

###Outputs
`selectedTagsUpdated`: This output emits a list of items that have been selected. The array is of objects with two attributes, `id` and `value`. Use this list to determine what the user has selected.

`dynamicallyAddNewTag`: This output emits a string value of the tag that the user wants to dynamically add. Nothing is actually going to be done in the component; you need to add the new item to your list in whatever way you need to. Add it to the `tagsToSelect` input array, and to the `tagsSelectedAtStart` array and the selection will be automatically updated. Here's an example of how you can add it to the test:

```
// Parent component, parent.component.ts
addDynamicTag(newTagDisplay: string) {
    this.possibleTags.push({ id: this.possibleTags.length + 1, description: newTagDisplay });
	// this.selectedTags is updated when the component emits an array on selectedTagsUpdated
    this.startingTags = [...this.selectedTags, { id: this.possibleTags.length, description: newTagDisplay }];
}
```
Obviously you may need to call a database function that adds the new item and sets its ID or whatever needs to be done. The component itself, however, will just display the possible tags and the selected tags.

## Styling the Component

For now, overwrite the styles in this component by adding style rules in your app that overwrite the styles on the elements of this component. There are two `ul`s to style: `.selected-tag-list` and `.possible-tag-list`. Look in `src/app/tag-select/tag-select/tag-select.component.scss` to see the styles that are used by default.

You can overwrite the styles like this:

```
::ng-deep .selected-tag-list li {
	border-color: red !important;
}
```

Not ideal, I know, to throw `!important` around, and on some rules you may not have to, but you will to change border colors and margins, etc. that are already set.
