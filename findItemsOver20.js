export default function findItemsOver20(list){
  var itemsOver20 = [];
  var results = [
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
];
  var results2 = [];
  var results3 = [
    {name : 'apples', qty : 40},
    {name : 'bananas', qty : 23},
    {name : 'apples', qty : 37}
    
];
  for(var i = 0; i < list.length; i++){
      var items = list[i];
      if(items.qty> 20){
        itemsOver20.push(items)
        }
      }
   return itemsOver20;
   
    }
  