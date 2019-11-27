module.exports = function (app) {
  app.config([
    'formioComponentsProvider',
    function (formioComponentsProvider) {
      formioComponentsProvider.register('prism', {
        icon: 'fa fa-circle',
        views: [
          {
            name: 'Display',
            template: 'formio/components/number/display-prism.html'
          },
          {
            name: 'Data',
            template: 'formio/components/common/data.html'
          },
          {
            name: 'Validation',
            template: 'formio/components/number/validate.html'
          },
          {
            name: 'API',
            template: 'formio/components/common/api.html'
          },
          /*{
           name: 'Layout',
           template: 'formio/components/common/layout.html'
           },*/
          {
            name: 'Conditional',
            template: 'formio/components/common/conditional.html'
          }
        ],
        documentation: 'http://help.form.io/userguide/#number'
      });
    }
  ]);
  app.run([
    '$templateCache',
    function ($templateCache) {
      // Create the settings markup.
      $templateCache.put('formio/components/number/display-prism.html',
        '<ng-form>' +
        '<form-builder-option property="label"></form-builder-option>' +
        '<form-builder-option property="placeholder" label="Value" title="The default Value of the Prism" style="display:none;"></form-builder-option>' +
        '<form-builder-option property="inline" type="input" label="Circle Text" title="The text to appear in the circle"></form-builder-option>' +
        '<form-builder-option property="description"></form-builder-option>' +
        '<form-builder-option property="validate.step" label="Increment (Step)" placeholder="Enter how much to increment per step (or precision)." title="The amount to increment/decrement for each step."></form-builder-option>' +
        '<form-builder-option property="prefix" style="display:none;"></form-builder-option>' +
        '<form-builder-option property="suffix" style="display:none;"></form-builder-option>' +
        '<form-builder-option property="customClass" style="display:none;"></form-builder-option>' +
        '<form-builder-option property="tabindex" style="display:none;"></form-builder-option>' +
        '<form-builder-option property="multiple" style="display:none;"></form-builder-option>' +
        '<form-builder-option property="protected" style="display:none;"></form-builder-option>' +
        '<form-builder-option property="persistent"></form-builder-option>' +
        '<form-builder-option property="disabled" style="display:none;"></form-builder-option>' +
        '<form-builder-option property="tableView" style="display:none;"></form-builder-option>' +
        '</ng-form>'
      );

      // Create the API markup.
      $templateCache.put('formio/components/number/validate.html',
        '<ng-form>' +
        '<form-builder-option property="validate.required" style="display:none;"></form-builder-option>' +
        '<form-builder-option property="validate.min" type="number" label="Minimum Value" placeholder="Minimum Value" title="The minimum value the Range Slider can reach"></form-builder-option>' +
        '<form-builder-option property="validate.max" type="number" label="Maximum Value" placeholder="Maximum Value" title="The maximum value the Range Slider can reach"></form-builder-option>' +
        '<form-builder-option-custom-validation></form-builder-option-custom-validation>' +
        '</ng-form>'
      );
    }
  ]);
};