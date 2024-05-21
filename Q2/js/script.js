function reqListener() {
    const countryarray = JSON.parse(this.responseText);
    console.log(countryarray);
    for(let country of countryarray){
        console.log(country.flags.png);
        
    }

  }
  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "https://restcountries.com/v3.1/all");
  req.send();
  