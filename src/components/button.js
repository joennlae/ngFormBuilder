module.exports = function (app) {
  app.config([
    'formioComponentsProvider',
    'FORM_OPTIONS',
    function (
      formioComponentsProvider,
      FORM_OPTIONS
    ) {
      formioComponentsProvider.register('button', {
        onEdit: ['$scope', function ($scope) {
          $scope.actions = FORM_OPTIONS.actions;
          $scope.sizes = FORM_OPTIONS.sizes;
          $scope.themes = FORM_OPTIONS.themes;
        }],
        icon: 'fa fa-stop',
        views: [
          {
            name: 'Display',
            template: 'formio/components/button/display.html'
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
        documentation: 'http://help.form.io/userguide/#button'
      });
    }
  ]);
  app.run([
    '$templateCache',
    function ($templateCache) {
      // Create the settings markup.
      $templateCache.put('formio/components/button/display.html',
        '<ng-form>' +
        '<form-builder-option property="label"></form-builder-option>' +
        '<form-builder-option property="description" label="Message on Send"></form-builder-option>' +
        '<form-builder-option property="thankyou" label="Closing Paragraph"></form-builder-option>' +
        '<div class="form-group">' +
        '<label for="action" form-builder-tooltip="This is the action to be performed by this button.">Action</label>' +
        '<select class="form-control" id="action" name="action" ng-options="action.name as action.title for action in actions" ng-model="component.action"></select>' +
        '</div>' +
        '<div class="form-group" ng-if="component.action === \'event\'">' +
        '  <label for="event" form-builder-tooltip="The default value of the Button is set to send the form if submitted by the user. If you want to test the form please remove the input field">Button Event</label>' +
        '  <input type="text" class="form-control" id="event" name="event" ng-model="component.event" placeholder="onSubmitEvent" />' +
        '</div>' +
        '<div class="form-group" style="display:none;">' +
        '<label for="theme" form-builder-tooltip="The color theme of this panel.">Theme</label>' +
        '<select class="form-control" id="theme" name="theme" ng-options="theme.name as theme.title for theme in themes" ng-model="component.theme"></select>' +
        '</div>' +
        '<div class="form-group" style="display:none;">' +
        '<label for="size" form-builder-tooltip="The size of this button.">Size</label>' +
        '<select class="form-control" id="size" name="size" ng-options="size.name as size.title for size in sizes" ng-model="component.size"></select>' +
        '</div>' +
        '<form-builder-option property="leftIcon" style="display:none;"></form-builder-option>' +
        '<form-builder-option property="rightIcon" style="display:none;"></form-builder-option>' +
        '<form-builder-option property="customClass" style="display:none;"></form-builder-option>' +
        '<form-builder-option property="tabindex" style="display:none;"></form-builder-option>' +
        '<form-builder-option property="block" style="display:none;"></form-builder-option>' +
        '<form-builder-option property="disableOnInvalid"></form-builder-option>' +
        '<hr>' +
        '<form-builder-option property="emailone" label="Paragraph one"></form-builder-option>' +
        '<form-builder-option property="emailtwo" label="Paragraph two"></form-builder-option>' +
        '<form-builder-option property="emailthree" label="Paragraph three"></form-builder-option>' +
        '<form-builder-option property="emailfour" label="Paragraph four"></form-builder-option>' +
        '<form-builder-option property="emailfive" label="Paragraph five"></form-builder-option>' +
        '<form-builder-option property="emailsix" label="Paragraph six"></form-builder-option>' +
        '</ng-form>'
      );
    }
  ]);
};
