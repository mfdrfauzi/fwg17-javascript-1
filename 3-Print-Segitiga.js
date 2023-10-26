const printSegitiga = 5;
if(typeof printSegitiga != "number"){
    console.log("Data harus number")
}

for(let i = printSegitiga-1; i >= 0; i--){
    let segitiga = ""
    for(let j = 0; j <= i; j++){
        segitiga += j+1
    }
    console.log(segitiga)
}