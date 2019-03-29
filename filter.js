const _ = {};


/*
* Custom implementation of loDash each method.
* Take in an arr and a callback function
* Also loopped through an Array like Obeject list and logged out all the objects in the array.
*/




_.each = function(list, callback){
    if (Array.isArray(list)){
        //loop through array
        for (var i = 0;i < list.length; i++){
            //call the callback with a list item
            callback(i,list);

        }

    } else{
        //loop through object
            
    }}





_.filter = function(arr, callback){
    const storage = []
    for (let i = 0; i < arr.length; i++){
        if (callback(i, arr)=== true) {
            storage.push(arr[i])
        }
    }
    return storage;
}

var isEven = function(i,arr){
    return arr[i]%2 == 0 ? true : false;
}

//var writeItem = function(i,arr){
  //console.log(arr[i]);
//}

//var result = _.filter([1,2,3,4,5,6], isEven);
//console.log(result);
//_.each(result, writeItem);

var wasPresent = function(i,videoData){
  if (videoData[i].present == true){
    console.log(videoData[i].name, "was present");
    }
    for (var k = 0;k < videoData[i].rooms.length; k++){
     console.log(videoData[i].rooms[k]);
    }
    return true 
}




const videoData = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Mrs. White',
        present: false,
        rooms: [
            {kitchen: false}]
    }]

    var result = _.filter(videoData, wasPresent);