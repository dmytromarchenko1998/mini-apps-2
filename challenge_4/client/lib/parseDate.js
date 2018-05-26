const parseDate = resultDate => {
  let date;
  const months = {
    ['01']:'Jan', 
    ['02']:'Feb', 
    ['03']:'Mar', 
    ['04']:'Apr', 
    ['05']:'May', 
    ['06']:'Jun', 
    ['07']:'Jul', 
    ['08']:'Aug', 
    ['09']:'Sep', 
    ['10']:'Oct', 
    ['11']:'Nov', 
    ['12']:'Dec'
  };
  if (resultDate[resultDate.length - 3] !== '/') {
    date = `${resultDate} AC.`;
  } else if (resultDate.split('/').length > 1) {
    let dateArr = resultDate.split('/');
    date = `${months[dateArr[2]]} ${parseInt(dateArr[1])}th, ${dateArr[0]}`;
  } else if (resultDate[0] === '-') {
    date = `${resultDate.slice(1)} BC.`;
  }
  return date;
}

module.exports = parseDate;