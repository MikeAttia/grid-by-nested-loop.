/*for (var row = 1; row <= 5; row++) {
    for (var column = 1; column <= row; column++) {
        process.stdout.write(row.toString());
    

} 
console.log(); 
} */
for(var row=1;row<=5;row++){
    for(column=5;column>=row;column--){
        process.stdout.write(column.toString());
    }
    
    console.log();
}
          
