const arr= [1,2,3,4,5,6,7,8,9];
for (let i=0;i<arr.length;i++){
    if (arr[i] == 3 || 5 || 7){
        arr.splice(3,1);
    }
    console.log(arr[i]);
}