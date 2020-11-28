let putarArray = (value) => {
  let arr = [];
  let putaran1 = [];
  let putaran2 = [];
  let putaran3 = [];
  let putaran4 = [];

  for (i = 0; i < value.length; i++) {
    arr[i] = value[i];
    // console.log(arr[i]);
  }

  var n = 0;
  for (putaran = 1; putaran < 5; putaran++) {
    for (i = 0; i < 5; i++) {
      n = i + putaran;
      if (n > 4) {
        n -= 5;
      }

      if (putaran == 1) {
        putaran1[i] = arr[n];
      }
      if (putaran == 2) {
        putaran2[i] = arr[n];
      }
      if (putaran == 3) {
        putaran3[i] = arr[n];
      }
      if (putaran == 4) {
        putaran4[i] = arr[n];
      }
    }

  }

  console.log(putaran1, putaran2, putaran3, putaran4);
}

putarArray(['a', 'b', 'c', 'd', 'e']);
