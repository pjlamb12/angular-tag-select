# TagSelect

This is a project that provides an Angular component to select items from a list in a tag-like manner. You will be able to import the module into your project and add the component in your HTML file.

## Using the Component

Here is a description of the inputs and outputs:

### Inputs
`tagMapping`: This is an object with two attributes, `value` and `display`. The value of the those attributes should be the names of the fields for the objects that the people will be selecting.

So let's say your list of objects that you want the user to select has an `id` and a `name` (with possibly other attributes as well). Your tag mapping object should look like this: `{ value: 'id', display: 'name' }`. A list will be built inside the component that shows the possible tags and the selected tags using this mapping.

`tagsToSelect`: The master list of items the user will be able to select. It doesn't matter what attributes the objects in the array have, as long as you pass in a `tagMapping` object that tells the component which attributes are the important ones.

`tagItemIdentifierPlural`: A string (plural) to describe the tags. This means if you pass in nothing, the component will say "Availble Tags" and "Selected Tags". But if you pass in "Classes", it would say "Available Classes" and "Selected Classes".

`tagsSelectedAtStart`: This is an array of the same elements that you passed in for `tagsToSelect`. These are items that should start out as selected when the component is loaded. It uses the same `tagMapping` object to find which ones should be selected.

###Outputs
`selectedTagsUpdated`: This output emits a list of items that have been selected. The array is of objects with two attributes, `id` and `value`. Use this list to determine what the user has selected.

## Styling the Component

For now, overwrite the styles in this component by adding style rules in your app that overwrite the styles on the elements of this component. There are two `ul`s to style: `.selected-tag-list` and `.possible-tag-list`. Look in `src/app/tag-select/tag-select/tag-select.component.scss` to see the styles that are used by default.

You can overwrite the styles like this:

```
::ng-deep .selected-tag-list li {
	border-color: red !important;
}
```

Not ideal, I know, to throw `!important` around, and on some rules you may not have to, but you will to change border colors and margins, etc. that are already set.

Also, be sure to include Font Awesome in your project for the selected and non selected states for the possible tag list. One of the `TODO`s will be to allow you to pass in the CSS classes for the icon font of your choice. That way you can pass in `'fa', 'fa-square-o', 'fa-check-o'` in for the two states, or whatever other classes you would like to use.

# Contributing to the Project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
