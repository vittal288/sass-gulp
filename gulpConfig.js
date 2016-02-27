module.exports = function () {
      
    var _destinationDir = './',
        _sourceDir = './',
        _htmlPages = './htmls';
   

    var _filesToMove = [            
        _sourceDir+'/**/*'
    ];
    var config = {
          destinationDir: _destinationDir,         
          htmlPages:_htmlPages,
          filesToMove:_filesToMove,
          sourceDir:_sourceDir,          
        };
    return config;
};
