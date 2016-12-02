var quest = document.getElementById('quest');
var medium = document.getElementById('medium');

var langList = [];

onload = function() {
  var p = document.getElementsByClassName("prettyprint");
  for (var n = 0; n < p.length; n++) {
    p[n].textContent = p[n].textContent.replace(/^    /mg, "");
  }

  langList.push(document.getElementById("lang-markdown"));
  langList.push(document.getElementById("lang-html"));
  langList.push(document.getElementById("lang-latex"));

  for (var i = 0; i < langList.length; i++) {
    langList[i].innerHTML = langList[i].innerHTML.replace("QUEST", "<span class='quest-text'>QUEST</span>");
    langList[i].innerHTML = langList[i].innerHTML.replace("MEDIUM", "<span class='medium-text'>MEDIUM</span>");
  }

  quest.oninput = updateMargin;
  medium.oninput = updateMargin;

  // For IE8
  quest.onpropertychange = quest.oninput;
  medium.onpropertychange = medium.oninput;

  updateMargin();
};

updateMargin = function() {
  var quests = document.getElementsByClassName('quest-text');
  var mediums = document.getElementsByClassName('medium-text');

  for (var i=0; i < quests.length; i++) {
    mediums[i].textContent = medium.value;
    quests[i].textContent = quest.value;
  }
};
