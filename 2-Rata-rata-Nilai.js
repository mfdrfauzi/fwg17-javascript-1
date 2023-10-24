const bahasaIndo = 70
const bahasaInggris = 98
const mtk = 65
const ipa = 80

mean = (bahasaIndo + bahasaInggris + mtk + ipa) / 4
console.log("Rata-rata =", mean)

if(mean >= 90){
    console.log("Grade = A");
} else if(mean >= 80){
    console.log("Grade = B");
} else if(mean >= 70){
    console.log("Grade = C");
} else if(mean >= 60){
    console.log("Grade = D");
} else{
    console.log("Grade = E");
}

