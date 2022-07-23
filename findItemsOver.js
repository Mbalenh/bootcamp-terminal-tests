export default function findItemsOver(list, threshold){
    var OverThreshold = [];
    var results = [
      {name : 'pears', qty : 37},
      {name : 'bananas', qty : 27}
  ];
    var results2 = [];
    var results3 = [
      {name : 'apples', qty : 40},
      {name : 'bananas', qty : 23},
      {name : 'apples', qty : 37}
  ];
    for(var i = 0; i < list.length; i++){
      var items = list[i];
      console.log(items)
      if(items.qty> threshold){
        OverThreshold.push(items)
        }
      }
    return OverThreshold;
  }
