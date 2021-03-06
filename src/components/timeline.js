module.exports = function (app) {
  app.config([
    'formioComponentsProvider',
    function (formioComponentsProvider) {
      formioComponentsProvider.register('timeline', {
        icon: 'fa fa-dot-circle-o',
        views: [
          {
            name: 'Display',
            template: 'formio/components/timeline/display.html'
          },
          {
            name: 'Data',
            template: 'formio/components/common/data.html'
          },
          {
            name: 'Validation',
            template: 'formio/components/timeline/validate.html'
          },
          {
            name: 'API',
            template: 'formio/components/common/api.html'
          },
          {
            name: 'Layout',
            template: 'formio/components/common/layout.html'
          },
          {
            name: 'Conditional',
            template: 'formio/components/common/conditional.html'
          }
        ],
        documentation: 'http://help.form.io/userguide/#radio'
      });
    }
  ]);
  app.run([
    '$templateCache',
    function ($templateCache) {
      // Create the settings markup.
      $templateCache.put('formio/components/timeline/display.html',
        '<ng-form>' +
        '<form-builder-option property="label"></form-builder-option>' +
        '<form-builder-option property="dialogHeadline"></form-builder-option>' +
        '<form-builder-option property="dialogLabelEvent"></form-builder-option>' +
        '<form-builder-option property="hideLabel"></form-builder-option>' +
        '<form-builder-option-label-position></form-builder-option-label-position>' +
        '<form-builder-option-options-label-position></form-builder-option-options-label-position>' +
        '<form-builder-option property="tooltip"></form-builder-option>' +
        '<value-builder data="component.values" label="Select Boxes" tooltip-text="Checkboxes to display. Labels are shown in the form. Values are the corresponding values saved with the submission."></value-builder>' +
        '<form-builder-option property="customClass"></form-builder-option>' +
        '<form-builder-option property="errorLabel"></form-builder-option>' +
        '<form-builder-option property="tabindex"></form-builder-option>' +
        '<form-builder-option property="inline" type="checkbox" label="Inline Layout" title="Displays the radio buttons horizontally."></form-builder-option>' +
        '<form-builder-option property="clearOnHide"></form-builder-option>' +
        '<form-builder-option property="fieldSet" type="checkbox" label="Wrap inside field set" title="Displays the radio' +
        ' buttons wrapped by a field-set and legend."></form-builder-option>' +
        '<form-builder-option property="protected"></form-builder-option>' +
        '<form-builder-option property="persistent"></form-builder-option>' +
        '<form-builder-option property="encrypted" class="form-builder-premium"></form-builder-option>' +
        '<form-builder-option property="hidden"></form-builder-option>' +
        '<form-builder-option property="autofocus"></form-builder-option>' +
        '<form-builder-option property="disabled"></form-builder-option>' +
        '<form-builder-option property="dataGridLabel"></form-builder-option>' +
        '<form-builder-option property="tableView"></form-builder-option>' +
        '</ng-form>'
      );
      // Create the API markup.
      $templateCache.put('formio/components/timeline/validate.html',
        '<ng-form>' +
        '<form-builder-option property="validate.required"></form-builder-option>' +
        '<form-builder-option property="validate.customMessage"></form-builder-option>' +
        '<form-builder-option-custom-validation></form-builder-option-custom-validation>' +
        '</ng-form>'
      );
    }
  ]);
};