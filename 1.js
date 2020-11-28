let detailKaloriAndi = (jumlah) => {
  let jenisOlahraga;
  var waktuOlahraga = Math.round((jumlah / 20) * 2);
  if (jumlah > 750) {
    jenisOlahraga = "Lari";
  }
  else if (jumlah > 500) {
    jenisOlahraga = "Badminton";
  }
  else if (jumlah <= 500) {
    jenisOlahraga = "Renang";
  }
  else {
    jenisOlahraga = "Tidak Diketahui";
  }
  return `Jenis Olahraga : ${jenisOlahraga}
  Jumlah Kalori : ${jumlah} Kalori
  Waktu Olahraga : ${waktuOlahraga} Menit`;
}

// contoh penampilan hasil function
console.log(detailKaloriAndi(751));
console.log(detailKaloriAndi(750));
console.log(detailKaloriAndi(200));