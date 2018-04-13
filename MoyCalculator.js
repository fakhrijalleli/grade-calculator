var myTab = document.getElementById('ContentPlaceHolder1_GridView1');


for (i = 1; i < myTab.rows.length; i++) {

    var objCells = myTab.rows.item(i).cells;

    for (var j = 0; j < objCells.length; j++)
{
  if(Number.isNaN(parseFloat(objCells.item(j).innerHTML)))
                {
       var list =objCells.item(j);

        console.log(list.innerText);



    }
  else

console.log(objCells.item(j).innerHTML);
    }
console.log("***********************************")
}
