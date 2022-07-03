fetch("https://my-json-server.typicode.com/FreSauce/json-ipl/data")
.then(x => x.json())
.then(y => {
    let a = "";
    let No = 0;
    y.sort(function(a,b) {return a.NRR - b.NRR} )
     y.map((b)=>{
         a += `<tr>
         <td class="first">${No++}</td>
         <td>${b.Team}</td>
         <td>${b.Matches}</td>
         <td>${b.Won}</td>
         <td>${b.Lost}</td>
         <td>${b.Tied}</td>
         <td>${b.NRR}</td>
         <td>${b.Points}</td>
     </tr>`;
     });
     document.getElementById("table_body").innerHTML=a;
})
.catch(z => document.write(z));


// "No": 1,
// "Team": "Gujarat Titans",
// "Matches": 14,
// "Won": 10,
// "Lost": 4,
// "Tied": 0,
// "NRR": 0.316,
// "Points": 20