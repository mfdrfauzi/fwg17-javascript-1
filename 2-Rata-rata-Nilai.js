
const bahasaIndo = 70
const bahasaInggris = 98
const mtk = 65
const ipa = 80
if (!isNaN(bahasaIndo) && !isNaN(bahasaInggris) && !isNaN(mtk) && !isNaN(ipa)) {
    const mean = (bahasaIndo + bahasaInggris + mtk + ipa) / 4;
  
    if (mean >= 90 && mean <= 100) {
      console.log("Rata-rata =", mean);
      console.log("Grade = A");
    } else if (mean >= 80 && mean < 90) {
      console.log("Rata-rata =", mean);
      console.log("Grade = B");
    } else if (mean >= 70 && mean < 80) {
      console.log("Rata-rata =", mean);
      console.log("Grade = C");
    } else if (mean >= 60 && mean < 70) {
      console.log("Rata-rata =", mean);
      console.log("Grade = D");
    } else if (mean >= 0 && mean < 60) {
      console.log("Grade = E");
    } else {
      console.log("Nilai diluar batas");
    }
  } else {
    console.log("Input harus berupa angka");
  }
  