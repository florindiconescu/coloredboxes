function choice(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

function arrayRemove(arr, value) {

   return arr.filter(function(ele){
       return ele !== value;
   });

}

export { choice, arrayRemove };
