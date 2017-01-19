/**
 * Created by Shiro on 16/12/29.
 */

let Ajax = {};
let rootpath = 'http://122.224.144.76:8008/rmsp/';

/**
 * create XHR
 * @return XHR
 */
let createXHR = (function () {
  if (typeof XMLHttpRequest != "undefined") {
    return function() {
      return new XMLHttpRequest();
    };
  } else if (typeof ActiveXObject != "undefined") {
    return function() {
      if (typeof arguments.callee.activeXString !== "string") {
        var versions = [ "MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0", "MSXML2.XMLHttp"], i, len;
        for (i=0, len=versions.length; i<len; i++) {
          try {
            new ActiveXObject(versions[i]);
            arguments.callee.activeXString = versions[i];
            break;
          }catch(ex) {
            console.log(ex);
          }
        }
      }
      return new ActiveXObject(arguments.callee.activeXString);
    };
  } else {
    createXHR = function() {
      throw new Error("No XHR object available.");
    };
  }
  return createXHR();
})();

/**
 * 链接参数组装
 * @param  string   url
 * @param  string   param.key
 * @param  multiple param.value
 * @return string   url
 */
let addURLParam = function(url, name, value) {
  url += (url.indexOf("?") == -1 ? "?" : "&");
  url += encodeURIComponent(name) + "=" + encodeURIComponent(value);
  return url;
};
/**
 * 链接参数组装
 * @param  string url
 * @param  [{}]   params
 * @return string url
 */
let addURLParams = function(url, params) {
  if (typeof(params) == 'object') { for (var key in params) { url = addURLParam(url, key, params[key]);}}
  return url;
};

/**
 * get
 * @param string   url  request url
 * @param multiple data params[表单ID名,表单元素节点,参数集合对象]
 * @param function fn   callback function
 */
Ajax.get = function(url, data, fn) {
  url = rootpath + url;
  if (!fn) { fn = data; data = null;}
  if (typeof(data) == 'string') { data = document.getElementById(data);}
  if (typeof(data) == 'object') { url = addURLParams(url, data); }
  var xhr = createXHR();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      if ((xhr.status >=200 && xhr.status <300) || xhr.status == 304) {
        if (xhr.responseText.length && (xhr.responseText[0] == '[' || xhr.responseText[0] == '{')) {
          fn(JSON.parse(xhr.responseText));
        }else { fn(xhr.responseText);}
      }else if (xhr.status === 0 && xhr.responseText.length > 0) {
        fn(xhr.responseText);
      }else { fn({status: 'error', errorCode: xhr.status});}
    }
  };
  xhr.open('get', url, true);
  xhr.send(null);
};

export default Ajax;