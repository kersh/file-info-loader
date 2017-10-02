/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Vladimir Shafikov @kersh
*/
module.exports = function(content) {
    this.cacheable && this.cacheable();
    this.value = content;

    var fileInfo = {
        content: content,
        path: this.resourcePath
    };

    return "module.exports = " + JSON.stringify(fileInfo);
};
module.exports.seperable = true;