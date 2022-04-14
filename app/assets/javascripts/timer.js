/*! timer.jquery 0.2.3 2015-01-01*/!function(a){function b(){p=setInterval(d,500),t=!0}function c(){clearInterval(p),t=!1}function d(){s=g()-q,e(),u&&s===u&&(v.callback(),v.repeat&&(u+=v.duration))}function e(){r[w](i(s)),r.data("seconds",s)}function f(){r.on("focus",function(){l()}),r.on("blur",function(){var a,b=r[w]();b.indexOf("sec")>0?s=Number(b.replace(/\ssec/g,"")):b.indexOf("min")>0?(b=b.replace(/\smin/g,""),a=b.split(":"),s=Number(60*a[0])+Number(a[1])):b.match(/\d{1,2}:\d{2}:\d{2}/)&&(a=b.split(":"),s=Number(3600*a[0])+Number(60*a[1])+Number(a[2])),m()})}function g(){return Math.round((new Date).getTime()/1e3)}function h(a){var b,c=0,d=Math.floor(a/60);return a>=3600&&(c=Math.floor(a/3600)),a>=3600&&(d=Math.floor(a%3600/60)),10>d&&c>0&&(d="0"+d),b=a%60,10>b&&(d>0||c>0)&&(b="0"+b),{hours:c,minutes:d,seconds:b}}function i(a){var b="",c=h(a);return b=c.hours?c.hours+":"+c.minutes+":"+c.seconds:c.minutes?c.minutes+":"+c.seconds+" min":c.seconds+" sec"}function j(a){if(!isNaN(Number(a)))return a;var b=a.match(/\d{1,2}h/),c=a.match(/\d{1,2}m/),d=a.match(/\d{1,2}s/),e=0;return a=a.toLowerCase(),b&&(e+=3600*Number(b[0].replace("h",""))),c&&(e+=60*Number(c[0].replace("m",""))),d&&(e+=Number(d[0].replace("s",""))),e}function k(){t||(e(),b())}function l(){t&&c()}function m(){t||(q=g()-s,b())}function n(){q=g(),s=0,u=v.duration}function o(){c(),r.data("plugin_"+y,null),r.data("seconds",null),r[w]("")}var p,q,r,s=0,t=!1,u=null,v={seconds:0,editable:!1,restart:!1,duration:null,callback:function(){alert("Time up!"),c()},repeat:!1},w="html",x=function(b,c){var d;v=a.extend(v,c),r=a(b),s=v.seconds,q=g()-s,r.data("seconds",s),d=r.prop("tagName").toLowerCase(),("input"===d||"textarea"===d)&&(w="val"),v.duration&&(u=v.duration=j(v.duration)),v.editable&&f()};x.prototype={start:function(){k()},pause:function(){l()},resume:function(){m()},reset:function(){n()},remove:function(){o()}};var y="timer";a.fn[y]=function(b){return b=b||"start",this.each(function(){a.data(this,"plugin_"+y)instanceof x||a.data(this,"plugin_"+y,new x(this,b));var c=a.data(this,"plugin_"+y);"string"==typeof b&&"function"==typeof c[b]&&c[b].call(c),"object"==typeof b&&c.start.call(c)})}}(jQuery);