function reqListener() {
    const countryarray = JSON.parse(this.responseText);
    console.log(countryarray);
    for(let country of countryarray){
        console.table(country.name.common);
        console.table(country.name.common);
        console.table(country.name.common);
        console.table(country.name.common);    
    }

  }
  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "https://restcountries.com/v3.1/all");
  req.send();
  