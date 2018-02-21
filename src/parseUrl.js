import querystring from "querystring";

const getAnchorSearch = function(location) {
  var rawAnchor = location.anchor || "",
      arr       = rawAnchor.split("?");
  return (arr.length > 1) ? arr[1] : null;
};

const getSearchQs = function(location) {
  var rawQs = location.search || "",
      qs    = rawQs.replace("?", ""),
      qsObj = (qs) ? querystring.parse(qs) : {};

  return qsObj;
};

const getAnchorQs = function(location) {
  var anchorQs    = getAnchorSearch(location),
      anchorQsObj = (anchorQs) ? querystring.parse(anchorQs) : {};

  return anchorQsObj;
};

export function getAllParams (location) {
  return Object.assign({}, getAnchorQs(location), getSearchQs(location));
};