function romanize(arabic_numeral){
  var matches = [
    {arabic: 1000, roman: 'M'},
    {arabic: 900, roman: 'CM'},
    {arabic: 500, roman: 'D'},
    {arabic: 400, roman: 'CD'},
    {arabic: 100, roman: 'C'},
    {arabic: 90, roman: 'XC'},
    {arabic: 50, roman: 'L'},
    {arabic: 40, roman: 'XL'},
    {arabic: 10, roman: 'X'},
    {arabic: 9, roman: 'IX'},
    {arabic: 5, roman: 'V'},
    {arabic: 4, roman: 'IV'},
    {arabic: 1, roman: 'I'}
  ];

  var roman_numeral = '';

  this.number = arabic_numeral;

  while(this.number > 0)
  {
    var largest_digit;
    var match;

    for(var i = 0; i < matches.length; i++){
      match = matches[i];

      if(match.arabic <= this.number)
      {
        largest_digit = match.arabic;
        break;
      } // end if matches
    } // end for each in matches

    roman_numeral += match.roman;
    this.number -= largest_digit;
  }// end while have number



  return roman_numeral;
}
