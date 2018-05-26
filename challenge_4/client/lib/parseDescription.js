const parseDescription = (resultDesciption) => {
  const links = [];
  const linksIndex = {};
  const elements = [];
  const elementsIndex = {};
  resultDesciption.split('<').forEach(set => {
    set.split('>').forEach(element => {
      elements.push(element);
    })
  });
  return resultDesciption;
}

module.exports = parseDescription;