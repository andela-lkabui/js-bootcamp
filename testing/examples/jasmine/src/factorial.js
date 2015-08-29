function factorial(x) {
<<<<<<< HEAD

	if ( typeof x === 'number' && x >= 0) {

		if (x === 0){

			return 1;

		}else{
			return x * factorial(x-1);
		}



	} else {

		return false;

	}

};


=======
  if (typeof x === 'number' &&
          x >= 0) {
            if (x === 0) {
              return 1;
            }
            else {
              return x * factorial(x - 1);
            }
  }
  else {
    return false;
  }
}
>>>>>>> 94383d958cb313e89b1518c5a9f48d310a1f4324
