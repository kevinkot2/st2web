'use strict';

import component from './auto-form.component.js';

module.exports =
  function st2AutoForm(reactDirective) {
    var overrides = {
      restrict: 'C',
      require: 'ngModel'
    };

    const a = reactDirective(component, null, overrides);

    return a;
  };
