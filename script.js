
/*function sprawdzNazwisko()
{
	document.getElementById("zamowienie").onsubmit = function()
	{
		if(document.getElementById("nazwisko").value == "")
		{
			document.getElementById("blad").innerHTML = "Uzupełnij nazwisko";
			return false;
		}
		else
		{
			document.getElementById("blad").innerHTML = "";
			return true;
		}
	}
}*/
function regulamin()
{
	document.getElementById("zamowienie").onsubmit = function()
	{
		if(document.getElementById("regulamin").checked == true)
		{
			document.getElementById("blad").innerHTML = "";
			return true;
		}
		else
		{
			document.getElementById("blad").innerHTML = "Uzupełnij regulamin";
			return false;
		}
	}
}

window.onload = function()
{
	regulamin();
}
function sprawdzImie()
{
	document.getElementById("zamowienie").onsubmit = function()
	{
		if(document.getElementById("imie").value == "")
		{
			document.getElementById("blad").innerHTML = "Uzupełnij imię";
			return false;
		}
		else
		{
			document.getElementById("blad").innerHTML = "";
			return true;
		}
	}
}
window.onload = function()
{
	sprawdzImie();
}
// naprawić funkcje - działają tylko pojedynczo