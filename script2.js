function sprawdzIlosc()
{
	document.getElementById("zamowienie").onsubmit = function()
	{
		if(isNaN(document.getElementById("ilosc").value))
		{
			document.getElementById("blad").innerHTML = "Ilość musi być liczbą";
			return false;
		}
		else
		{
			document.getElementById("blad").innerHTML = "";
			return true;
		}
	}
}
function testujEmail ()
{
	document.getElementById("zamowienie").onsubmit = function()
	{
		let wzorzec = /[@]/;
		if(document.getElementById("email").value.match(wzorzec))
		{
			document.getElementById("blad").innerHTML = "";
			return true;
		}
		else
		{
			document.getElementById("blad").innerHTML = "Niepoprawny email";
			return false;
		}
	}
}

function poleProdukt()
{
	let poleProdukt = document.getElementById("produkt");
	poleProdukt.onfocus = function()
	{
		if(poleProdukt.value == "Nazwa produktu")
		{
			poleProdukt.value = "";
		}
	}
	poleProdukt.onblur = function()
	{
		if(poleProdukt.value == "")
		{
			document.getElementById("blad").innerHTML = "Uzupełnij nazwe produktu";
		}
	}
}

window.onload = function()
{
	sprawdzIlosc();
	testujEmail();
	poleProdukt();
}