var myElement = document.getElementById("tagtag").innerHTML;
var questionResponse = document.getElementById("demo-category").value.innerHTML;

//alert(document.getElementById("demo-category").value);

if (myElement === "homeworktag")	{
  if (document.getElementById("pressed").style.visibility === "visible")  {
    alert("Homework mode is on for " + document.getElementById("demo-category").value + " minutes.");
  }
  else {
    alert("Homework mode is off.");

  }

}

else if (myElement === "sosmeetingtag")	{
  if (document.getElementById("pressed").style.visibility === "visible")  {
    alert("S.O.S. meeting mode is on for " + document.getElementById("demo-category").value + " minutes.");
  }
  else {
    alert("S.O.S. meeting mode is off.");
  }

}

else if (myElement === "meetingtag")	{
  if (document.getElementById("pressed").style.visibility === "visible")  {
    alert("Meeting mode is on for " + document.getElementById("demo-category").value + " minutes.");
  }
  else {
    alert("Meeting mode is off.");

  }

}

else if (myElement === "productivetag")	{
  if (document.getElementById("pressed").style.visibility === "visible")  {
    alert("Productive mode is on for " + document.getElementById("demo-category").value + " minutes.");
  }
  else {
    alert("Productive mode is off.");
  }

}

else if (myElement === "casualtag")	{
  if (document.getElementById("pressed").style.visibility === "visible")  {
    alert("Casual mode is on for " + document.getElementById("demo-category").value + " minutes.");
  }
  else {
    alert("Casual mode is off.");

  }

}

else if (myElement === "soshomeworktag")	{
  if (document.getElementById("pressed").style.visibility === "visible")  {
    alert("S.O.S. Homework mode is on for " + document.getElementById("demo-category").value + " minutes.");
  }
  else {
    alert("S.O.S. homework mode is off.");

  }

}

else {

}
