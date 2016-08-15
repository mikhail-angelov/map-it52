const babel = require("babel-core");
const origJs = require.extensions['.js'];

require.extensions['.js'] = function(module, filename) {

  if (filename.indexOf('node_modules/') >= 0) {
    return origJs(module, filename);
  }else{
    console.log('compiling:',filename)
    var compiled = babel.transformFileSync(filename, {
      presets: ['es2015','react']
    });
    return module._compile(compiled.code, filename);
  }
};

require.extensions['.css'] = function(module, filename) {
  return null
}