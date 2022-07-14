import isSubset from 'is-subset';

// var isSubset = require('is-subset');


// console.log(isSubset(
//     {a: 1, b: 2},
//     {a: 1}
//   ));

function waitFor(conditionFunction) {

  const poll = resolve => {
    if(conditionFunction()) resolve();
    else setTimeout(_ => poll(resolve), 4000);
  }

  return new Promise(poll);
}


const proxyRequest = {"ProductCode":"UIASPCORE","ComponentSuite":"CORE","Type":"SnippetUsed","SnippetPrefix":"tc-grid-html", "misho":"test"};
const expectedJSON = {"ProductCode":"UIASPCORE","ComponentSuite":"CORE","Type":"SnippetUsed","SnippetPrefix":"tc-grid-html"};


const proxyObj = JSON.parse(JSON.stringify(proxyRequest));
const expectedObj = JSON.parse(JSON.stringify(expectedJSON));
console.log(proxyObj);
console.log(expectedObj);

console.log(isSubset(proxyObj, expectedObj));