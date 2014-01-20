Package.describe({
  summary: "Codrops Progress Buttons"
});

Package.on_use(function (api, where) {
  api.add_files([
    'js/modernizr.custom.js',
    'js/classie.js',
    'js/progressButton.js',
    'css/component.css'
  ], 'client');
  api.export('ProgressButton');
});