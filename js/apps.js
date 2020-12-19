
function formatHtml(html) {
    html = html.replaceAll('hf-wrapper', getRandomName(4, 6));
    html = html.replaceAll('hf-', getRandomName(4, 6));

    var tagArr = html.match(/<\w+\s/ig);
    for (var i in tagArr) {
        if (tagArr[i] !== '<img ' && tagArr[i] !== '<svg ' && tagArr[i] !== '<use ') {
            var tag = tagArr[i];
            var tagEnd = '</' + tag.slice(1, -1) + '>';
            var newTag = getRandomName(4, 6, 'tag');
            html = html.replaceAll(tag, '<' + newTag + ' ');
            html = html.replaceAll(tagEnd, '</' + newTag + '>');
        }
    }
    var wpdiv = '', wparr = [], wplen = Math.floor(Math.random() * (8 - 3 + 1)) + 3;
    for (var j = 0; j < wplen; j++) {
        var wptag = getRandomName(4, 6, 'tag');
        wparr.push(wptag)
        wpdiv += '<' + wptag + '>';
    }
    html = wpdiv + html;
    for (var k = wparr.length - 1; k >= 0; k--) {
        html += '</' + wparr[k] + '>';
    }
    return html;
}
function getRandomName(min, max, type) {
    var rule1 = 'bcefghijklmnopqrstuvwxyz';
    var rule2 = 'bcefghijklmnopqrstuvwxyzBCEFGHIJKLMNOPQRSTUVWXYZ';
    var rule3 = 'bcefghijklmnopqrstuvwxyzBCEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var len = Math.floor(Math.random() * (max - min + 1)) + min;
    if (type == 'tag') {
        var cname = '';
        for (var i = 0; i < len; i++) {
            cname += rule1.charAt(Math.random() * (rule1.length - 1))
        }
    } else {
        var cname = rule2.charAt(Math.random() * (rule2.length - 1))
        for (var i = 0; i < len; i++) {
            cname += rule3.charAt(Math.random() * (rule3.length - 1))
        }
    }
    return cname;
}

String.prototype.replaceAll = function (reallyDo, replaceWith, ignoreCase) {
    if (!RegExp.prototype.isPrototypeOf(reallyDo)) {
        return this.replace(new RegExp(reallyDo, (ignoreCase ? "gi" : "g")), replaceWith);
    } else {
        return this.replace(reallyDo, replaceWith);
    }
}

function createApp(){
    var html = ' '

    html = formatHtml(html);
    document.write(html);
}
function push(){
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
    }else{
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
}
function tj(){

var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?2f6f671345944140a35d7311cb7589b0";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();


}