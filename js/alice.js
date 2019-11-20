var videoApp;

var youtube = {};
youtube.getURL = function(id, start)
{
  return '//www.youtube.com/embed/'+id+'?controls=0&showinfo=0&rel=0&autoplay=0&loop=0&enablejsapi=1&start=' + start;
};

youtube.ready = false;

youtube.play = function (id) {
  if(youtube.ready)
  {
    videoApp.url = youtube.getURL(id);
  }
};

var addEvent = function(object, type, callback) {
    if (object == null || typeof(object) == 'undefined') return;
    if (object.addEventListener) {
        object.addEventListener(type, callback, false);
    } else if (object.attachEvent) {
        object.attachEvent("on" + type, callback);
    } else {
        object["on"+type] = callback;
    }
};

window.addEventListener('load', function () {
  Vue.component('youtube-embed', {
      props:['url', 'width', 'height'],
      template: '<iframe v-bind:src="url" v-bind:height="height" v-bind:width="width" allowfullscreen="" frameborder="0"></iframe>'
  });

  videoApp = new Vue({
    el: '#video',
    data: {
      url: youtube.getURL("Hl4sY-htV5k", 0),
      width:  800,
      height:  Math.round(800/(16/9))
    }
  });

  addEvent(window, "resize", function(){
    if(window.innerWidth > 800)
    {
      videoApp.width = 800;
      videoApp.height = Math.round(800/(16/9));
    }
    else
    {
      videoApp.width = window.innerWidth * 0.8;
      videoApp.height = Math.round((window.innerWidth * 0.8)/(16/9));
    }
  })

  youtube.ready = true;
});
