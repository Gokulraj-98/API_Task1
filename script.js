var container = document.createElement("div");
container.className = "container";
var row = document.createElement("div");
row.className = "row";

var parentDiv = document.createElement("div");
parentDiv.innerHTML = `<h4>Please enter the number of facts u wanna know about cat<br></h4>`;
parentDiv.className = "main";

var num_inp = document.createElement("input");
num_inp.setAttribute("type", "number");
num_inp.id = "num";

var button = document.createElement("button");
button.innerHTML = "click me";
button.className = "btn btn-primary";
button.addEventListener("click", latLongData);

parentDiv.append(num_inp, button);
document.body.append(parentDiv);

async function latLongData() {
  var input = document.getElementById("num").value;
  var res = await fetch(`https://meowfacts.herokuapp.com/?count=${input}`);
  var res_1 = await res.json();
  var data = res_1.data;
  console.log(res_1.data);
  console.log(input);
  for (var i = 0; i < data.length; i++) {
    console.log(data[i]);
    var col = document.createElement("div");
    col.className = "col-sm-4";
    col.innerHTML += `
<p><h5>Fact : ${i + 1} </h5>${data[i]}</p>
</div>
    `;
    parentDiv.append(row);
    row.append(col);
    container.append(row);
    document.body.append(container);
  }
  //foo(res_1);
}
