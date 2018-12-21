const replaceAll = (data, replace, replaceWith) => {
  let exp = new RegExp(replace, 'g');
  return data.replace(exp, replaceWith);
}

module.exports = replaceAll;