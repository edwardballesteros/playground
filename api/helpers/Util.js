/*
 * Util
 *
 */

var Url = require("url");
var moment = require("moment");

module.exports = {

  toAssetsUrl: function(path) {
    var assetsBaseUrl = sails.config.assets.baseUrl || "";
    var assetsUrl = assetsBaseUrl + (path || "/");
    return assetsUrl;
  },

  toUrl: function(path, query, options) {
    options = options || {};

    try {
      var urlObj = Url.parse(path, true);

      if (options.usingSSL) {
        urlObj.protocol = "https";
      }

      urlObj.hostname = urlObj.hostname || sails.config.host;
      urlObj.port = urlObj.port || sails.config.port;
      urlObj.search = null;
      if (parseInt(urlObj.port) == 80) {
        urlObj.host = urlObj.hostname;
      }

      urlObj.query = urlObj.query || {};
      _.merge(urlObj.query, query || {});
    } catch (e) {
      return "";
    }

    return Url.format(urlObj);
  },

  toMask: function(stringInput, character, start, end) {
    character = character || "* ****";

    if (!_.isEmpty(stringInput)) {
      return stringInput.substring(0, start) + character + stringInput.substring(end);
    }

    return stringInput;
  },

  /**
   * @public toSanitize
   * @description Remove ff characters <, > & />
   * Input: <script>
   * Output: script
   *
   * */
  toSanitize: function ( value ) {

    var newValue = value.replace(/<\/|<|>/ig , "");
    return newValue;


  }

};
