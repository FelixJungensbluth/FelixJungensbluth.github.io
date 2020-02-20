const login = document.querySelector('.login');
const close = document.querySelector('.close');
const close1 = document.querySelector('.close1');
const login1 = document.querySelector('.login');
const close3 = document.querySelector('.close3');
const cart = document.querySelector('.warenkorb');
const one = document.getElementById('testbutton');
var onxName = document.getElementsByName('subject1')[0].value;
var oneName = document.getElementsByName('subject')[0].value;
var twoName = document.getElementsByName('two')[0].value;
var caseName = document.getElementsByName('case')[0].value;
var bagName = document.getElementsByName('bag')[0].value;
var gimbalName = document.getElementsByName('gimbal')[0].value;






const leeren = document.getElementById('leer');
var anzahl = localStorage.getItem("vOneLocalStorage");
var preis = localStorage.getItem("preis");
var preisIndecator = 0;
var number = 0;

/*
Funktion um Objekte in den Warenkorb hinzuzufügen
*/
function add() {

  //Zeigt den Warenkorb durch ein Click Event an
  one.addEventListener('click', () => {
    $(".cartWrapper").css("visibility", "visible");
    $(".cartWrapper").addClass("aniTop");
    $(".layerForm").css("visibility", "visible");

    //Wenn der localStorage(preis) definiert ist kann etwas in den Warenkorb hinzugefügt werden
    if (localStorage.getItem("preis") !== 'NaN') {

      anzahl++;
      preisIndecator++;
      localStorage.setItem("vOneLocalStorage", anzahl);
      localStorage.setItem("preis", preis);


      if (window.location.href.indexOf('artikel1') > 0) {
        var int = Number(oneName);
        number = Number(localStorage.getItem("preis"));
        preis = number + int;
        localStorage.setItem("preis", preis);
      }

      if (window.location.href.indexOf('artikel2') > 0) {
        var int = Number(onxName);
        number = Number(localStorage.getItem("preis"));
        preis = number + int;
        localStorage.setItem("preis", preis);
      }


      if (window.location.href.indexOf('artikel3') > 0) {
        var int = Number(twoName);
        number = Number(localStorage.getItem("preis"));
        preis = number + int;
        localStorage.setItem("preis", preis);
      }


      if (window.location.href.indexOf('artikel4') > 0) {
        var int = Number(caseName);
        number = Number(localStorage.getItem("preis"));
        preis = number + int;
        localStorage.setItem("preis", preis);
      }



      if (window.location.href.indexOf('artikel5') > 0) {
        var int = Number(bagName);
        number = Number(localStorage.getItem("preis"));
        preis = number + int;
        localStorage.setItem("preis", preis);
      }

      if (window.location.href.indexOf('artikel6') > 0) {
        var int = Number(gimbalName);
        number = Number(localStorage.getItem("preis"));
        preis = number + int;
        localStorage.setItem("preis", preis);
      }


      //Informationen werden in den Warenkorbbereich geschrieben
      document.getElementById("preisAnzeige").innerHTML = 'Gesamt : ' + localStorage.getItem("preis") + ' $';
      document.getElementById("anzahl").innerHTML = 'Artikel im Warenkorb: ' + localStorage.getItem("vOneLocalStorage", anzahl);

    } else {

      preis = 0;
      localStorage.setItem("preis", preis);
    }

  });
}

add();

//Informationen werden in den Warenkorbbereich geschrieben
function numOf() {
  document.getElementById("preisAnzeige").innerHTML = 'Gesamt: ' + localStorage.getItem("preis") + ' $';
  document.getElementById("anzahl").innerHTML = 'Artikel im Warenkorb: ' + localStorage.getItem("vOneLocalStorage", anzahl);
}



/*
Warenkorb wird geleert
*/
function leer() {
  leeren.addEventListener('click', () => {
    anzahl = 0;
    localStorage.clear();
    localStorage.setItem("vOneLocalStorage", 0);
    document.getElementById("anzahl").innerHTML = 'Artikel im Warenkorb: ' + localStorage.getItem("vOneLocalStorage");

    preis = 0;
    localStorage.setItem("preis", 0);
    document.getElementById("preisAnzeige").innerHTML = 'Gesamt: ' + localStorage.getItem("preis") + ' $';
  });

}

leer();



/*
Suche
*/
function search1() {

  //Value des Inputfeldes
  var x = document.getElementById("search").value;

  //Leerzeichen werden gelöscht
  var y = x.trim();

  //Schlagwörter
  var names = ['onex', 'one', 'hülle', 'tasche', 'kamera', 'app', 'impressum', 'case', 'bag', 'gimbal', 'two', 'Onex', 'One', 'Hülle', 'Tasche', 'Kamera', 'App', 'Impressum', 'Case', 'Bag', 'Gimbal', 'Two', 'Überuns', 'überuns', 'start', 'home', 'index', 'Start', 'Home', 'Index'];
  var html = ['artikel1.html', 'artikel2.html', 'artikel4.html', 'artikel5.html', 'kamera.html', 'app.html', 'impressum.html', 'artikel4.html', 'artikel5.html', 'artikel6.html', 'artikel3.html', 'artikel1.html', 'artikel2.html', 'artikel5.html', 'artikel5.html', 'kamera.html', 'app.html', 'impressum.html', 'artikel4.html', 'artikel5.html', 'artikel6.html', 'artikel3.html', 'überuns.html', 'überuns.html', 'index.html', 'index.html', 'index.html', 'index.html', 'index.html', 'index.html'];

  //Array wird durchlaufen um gleiche Strings zu finden
  for (var i = 0; i < names.length; i++) {
    var klein = y.localeCompare(names[i]);


    if (klein == 0) {
      var htmlIndex = names.indexOf(y)

      //Attribut action wird dem Imputfeld mit Typ submit zugeweisen
      $("#formSubmit").attr("action", html[htmlIndex]);
    }

  }

}



//Liste aller Cookies
var cookieList = (document.cookie) ? document.cookie.split(';') : [];


/*
Cookies werden in der Konsole angezeigt
Dient zur Überprüfung des Logins
*/
var cookieValues = {};
for (var i = 0, n = cookieList.length; i != n; ++i) {
  var cookie = cookieList[i];
  var f = cookie.indexOf('=');
  if (f >= 0) {
    var cookieName = cookie.substring(0, f);
    var cookieValue = cookie.substring(f + 1);

    console.log("cookieName + " + cookieName + " cookieValue " + cookieValue);

    if (!cookieValues.hasOwnProperty(cookieName)) {
      cookieValues[cookieName] = cookieValue;
    }
  }
}

/*
Gibt einen bestimmten Cookie zurück
*/
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

/*
Überprüft ob ein bestimmter Cookie existiert
*/
function checkCookie() {
  var user = getCookie("user");
  console.log(user);
  if (user != "") {
    document.getElementById("username").innerHTML = ' ANGEMLEDET ALS: ' + user;
    $(".loginWrapper").css("display", "none");
    $(".loginWrapper1").css("display", "block");
  } else {
    $(".loginWrapper").css("display", "block");
    $(".loginWrapper1").css("display", "none");
  }
}

/*
Löscht alle Cookies
*/
function deleteAllCookies() {
  var cookies = document.cookie.split(";");

  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf("=");
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
}







/*
Erzeugt das loginFeld zur Anmledung durch ein Click Event
*/
function loginFeld() {
  //öffnen
  login.addEventListener('click', () => {
    $(".loginWrapper").css("visibility", "visible");
    $(".loginWrapper").addClass("aniTop");
    $(".layerForm").css("visibility", "visible");

  });

  //schließen
  close.addEventListener('click', () => {
    console.log("sfbjkskjf");
    $(".loginWrapper").css("visibility", "hidden");
    $(".layerForm").css("visibility", "hidden");
  });
}

loginFeld();


/*
Erzeugt das loginFeld zur Abmeldung durch ein Click Event
*/
function loginFeld1() {
  //öffnen
  login1.addEventListener('click', () => {
    console.log("sfbjkskjf");
    $(".loginWrapper1").css("visibility", "visible");
    $(".loginWrapper1").addClass("aniTop");
    $(".layerForm").css("visibility", "visible");

  });
  //schließen
  close1.addEventListener('click', () => {
    console.log("sfbjkskjf");
    $(".loginWrapper1").css("visibility", "hidden");
    $(".layerForm").css("visibility", "hidden");
  });
}

loginFeld1();


/*
Erzeugt den Warenkorb zur Abmeldung durch ein Click Event
*/
function cartFeld() {
  //öffnen
  cart.addEventListener('click', () => {
    $(".cartWrapper").css("visibility", "visible");
    $(".cartWrapper").addClass("aniTop");
    $(".layerForm").css("visibility", "visible");


  });

  //schließen
  close3.addEventListener('click', () => {
    console.log("open");
    $(".cartWrapper").css("visibility", "hidden");
    $(".layerForm").css("visibility", "hidden");
  });
}

cartFeld();




//Parallax Effekt
const container = document.getElementById('kategorie');

//Breite des Fensters
const docWidth = $(document).width() / 2;


/*
Funktionen um mit den PageIndicatoren zu den einzelene Punken auf den Websiten zu springen
*/
function scrollIndicatorTop() {
  container.scrollTop = 0;
}

function scrollIndicatorBot() {
  var scrollBot = ($(document).height() * 3);
  container.scrollTop = scrollBot;
}

function scrollIndicatorMid() {
  var scrollMid = ($(document).height() * 2) * 0.5;
  container.scrollTop = scrollMid;
}

/*
Funktion, welche bei jedem Scrolltick ausgeführt wird
Zeigt die Elemente zur passenden Position an
*/
$(container).scroll(function() {
  var docHeight = $(document).height();
  var scrollTop = $(container).scrollTop();
  var scrollPercent = (scrollTop) / (docHeight);

  //passed die Prozent berechnung der Fenstergröße an
  if (docWidth <= 768) {
    var scrollPercentRounded = Math.round(scrollPercent * 100);
  } else {
    var scrollPercentRounded = Math.round(scrollPercent * 50);
  }

  if (scrollPercentRounded < 33) {
    $("#indecator10").css("background", "#fff");
    $("#indecator2").css("background", "none");

  }

  if (scrollPercentRounded > 33 && scrollPercentRounded < 82) {
    $("#indecator2").css("background", "#fff");
    $("#indecator10").css("background", "none");
    $("#indecator4").css("background", "none");
    $("#kamera2").attr("src", "images/kamera5.png");
    $("#kamera2").addClass("kamera2");
    $(".erklärung4").css("visibility", "visible");
    $("#erklärung4").addClass("testAni");
    $(".one").css("visibility", "visible");
    $("#one4").addClass("testAniShowUp");
    $("#button4").css("visibility", "visible");
    $("#button4").addClass("testAni");



  }

  if (scrollPercentRounded > 82) {
    $("#indecator2").css("background", "none");
    $("#indecator4").css("background", "#fff");

    $("#kamera3").attr("src", "images/360Kamera.png");
    $("#kamera3").addClass("kamera3");

    $(".beschreibungText1").css("visibility", "visible");
    $("#beschreibungText1").addClass("aniSlideRight");
    $(".beschreibung1").css("visibility", "visible");
    $("#beschreibung1").addClass("testAniShowUp");
    $("#button5").css("visibility", "visible");
    $("#button5").addClass("aniSlideRight");
  }
});





/*
Änderung der Navigations Leiste für Mobilgeräte
*/
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li')

  burger.addEventListener('click', () => {
    //Nav
    nav.classList.toggle('nav-active');

    //Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';

      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index /7 + 0.8}s`;
      }
    });
    burger.classList.toggle('toggle');
  });
}
navSlide();


/*
Alle Elemete der Startseite werden Hinzugefügt
*/
function indecatorVisibility() {
  document.getElementById("button3").innerHTML = '<div id="center3" class="center3"><a href="artikel1.html"><button name="one" class="btn3"><span>ZUM ARTIKEL</span></button></a></div>';
  document.getElementById("erklärung").innerHTML = '  <div class="erklärung"> <span>Scharfes Bild und neue Technik</span> <br><span>auf kleinem Raum, passend für</span>  <br><span> jedes deiner Erlebnisse!</span> </div>';
  document.getElementById("one").innerHTML = ' <div class="onex"> ONE </div>';
  document.getElementById("button4").innerHTML = '<div id="center3" class="center3"><a href="artikel2.html"><button class="btn3"><svg width="180px" height="60px" viewBox="0 0 180 60" class="border"><polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" style="stroke-width:7px"/><polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" style="stroke-width:7px"/></svg><span>ZUM ARTIKEL</span></button></a></div>';
  document.getElementById("button5").innerHTML = '<div id="center3" class="center3"><a href="artikel3.html"><button class="btn3"><svg width="180px" height="60px" viewBox="0 0 180 60" class="border"><polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" style="stroke-width:7px"/><polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" style="stroke-width:7px"/></svg><span>ZUM ARTIKEL</span></button></a></div>';
  document.getElementById("erklärung4").innerHTML = '  <div class="erklärung4"> <span>Ein bisschen schwächer auf</span> <br><span> der Brust, passend für Anfänger.</span> </div>';
  document.getElementById("one4").innerHTML = ' <div class="one"> ONE </div>';
  document.getElementById("beschreibung1").innerHTML = '  <div class="beschreibung1"> TWO </div>';
  document.getElementById("beschreibungText1").innerHTML = ' <div class="beschreibungText1"><span>Klare Sicht in alle Richtungen,</span> <br><span> und schärfer als je zuvor!</span></div>';
  $("#button4").css("visibility", "hidden");
  if (docWidth > 768) {
    $("#indecator10").css("visibility", "visible");
    $("#indecator2").css("visibility", "visible");
    $("#indecator4").css("visibility", "visible");
  }
}

indecatorVisibility();
