var Poet = function()
{
  this.syns = [];
  this.syns.push({
    "root": "a performative", "syns":[
      "an experimental",
      "an actionable"
    ]
  });
  this.syns.push({
    "root": "installation", "syns":[
      "setup",
      "interactivity",
      "facility"
    ]
  });
  this.syns.push({
    "root": "inspired by", "syns":[
      "energized by",
      "based on",
      "encouraged by",
      "roused on"
    ]
  });
  this.syns.push({
    "root": "book", "syns":[
      "work",
      "literary work",
      "volume"
    ]
  });
  this.syns.push({
    "root": "observer", "syns":[
      "beholder",
      "perceiver",
      "percipient",
      "spectator"
    ]
  });
  this.syns.push({
    "root": "performer", "syns":[
      "artist",
      "actor",
      "active participant",
      "participant"
    ]
  });
  this.syns.push({
    "root": "small", "syns":[
      "modest",
      "little",
      "minuscule",
      "minor",
      "pocket-sized",
      "humble",
      "diminished"
    ]
  });
  this.syns.push({
    "root": "group", "syns":[
      "team",
      "bunch",
      "family"
    ]
  });
  this.syns.push({
    "root": "find", "syns":[
      "encouter",
      "discover",
      "engage"
    ]
  });
  this.syns.push({
    "root": "find", "syns":[
      "encounter",
      "discover",
      "engage"
    ]
  });
  this.syns.push({
    "root": "transreal", "syns":[
      "unreal",
      "weird",
      "strange"
    ]
  });
  this.syns.push({
    "root": "environment", "syns":[
      "world",
      "place",
      "space"
    ]
  });
  this.syns.push({
    "root": "physical", "syns":[
      "palpable",
      "real",
      "touchable",
      "sensible"
    ]
  });
  this.syns.push({
    "root": "virtual", "syns":[
      "digital",
      "abstract",
      "dream",
      "mathematical"
    ]
  });
  this.syns.push({
    "root": "worlds", "syns":[
      "places",
      "spaces",
      "areas",
      "realities"
    ]
  });
  this.syns.push({
    "root": "gaze at", "syns":[
      "analyse",
      "scrutinise",
      "stare at",
      "look at"
    ]
  });
  this.syns.push({
    "root": "each other", "syns":[
      "one another"
    ]
  });
  this.syns.push({
    "root": "world", "syns":[
      "place",
      "space",
      "area",
    ]
  });
  this.syns.push({
    "root": "holds", "syns":[
      "places",
      "shows",
      "secures"
    ]
  });
};

Poet.prototype.randomSynSet = function() {
  var num = Math.floor(Math.random() * this.syns.length);
  return this.syns[num];
}

Poet.prototype.randomSyn = function(synset) {
  var num = Math.floor(Math.random() * synset["syns"].length);
  return synset["syns"][num];
}

Poet.prototype.replaceOne = function (text)
{
  var result = text;
  /*var noSpecials = text.replace(",", "").replace(".", "").replace("?", "");
  var split = noSpecials.split(" ");*/

  var synset = this.randomSynSet();
  var syn = this.randomSyn(synset);

  result = result.replace(/<strong>/g, "");
  result = result.replace(/<\/strong>/g, "");
  result = result.replace("ALICE", "<strong>ALICE</strong>");

  result = result.replace(synset["root"], "<strong>" + syn + "</strong>");

  return result
}

var poet = new Poet();

document.addEventListener("DOMContentLoaded", function(event) {
  setInterval(function(){
      var el = document.getElementById("description");
      el.innerHTML = poet.replaceOne(el.innerHTML);
    },4000);
});
