
    (function () {
      var g,
        e,
        r,
        a = window,
        l = document,
        t = arguments,
        s = 'script',
        cx = ['init', 'track', 'subscribe', 'version', 'indentify'],
        sx,
        gx = function () {
          var x,
            i = this;
          for (i._q = [], x = 0; cx.length > x; x++)
            (function (x) {
              i[x] = function () {
                return (
                  i._q.push(
                    [x].concat(Array.prototype.slice.call(arguments, 0))
                  ),
                  i
                );
              };
            })(cx[x]);
        };
      for (a._gt = a._gt || {}, g = 0; t.length > g; t++)
        a._gt[t[g]] = a[t[g]] = a[t[g]] || new gx();
      (e = l.createElement(s)),
        (e.async = 1),
        (e.src = 'https://cdn.quinengine.com/lib/v2/geralt.min.js'),
        (r = l.getElementsByTagName(s)[0]),
        r.parentNode.insertBefore(e, r);
    })('geralt');
    geralt.init({ debug: true, name: 'wingified.com' });
    
   window.vwo_quin_common_data=JSON.parse('{"type":"popup","id":"bf3bf28c6bc03114","actionName":"VWO Test Discount","avgPrice":0,"category":"women > [","promotionCode":"QWHXYIRZFOGW","categoryId":"","userId":"09677b681b6c98419d75c94adb208d04.ca3b572e74fefa4a56ea8de5.a6a58ad71c01da85","display":{"actionType":"discount","position":"center","title":{"text":"vwo test","color":""},"description":{"text":" ","color":""},"logo":"","background":{"image":"","color":"#FCFCFC"},"image":{"url":"","position":"top"},"actionButton":{"text":" copy","color":"#0065ff","url":""},"dismisssButton":{"text":"","color":"#FCFCFC"},"badge":{"color":"#ffffff"},"properties":null},"audienceId":"09a0fb14b0a54012"}');

    geralt.track('pageview', {
        category: 'home',
        label: 'homepage'
    });

  window.geralt.subscribe((detail) => {
      console.log(detail);
    // Insert your custom popup script into this function
    // Access parameters via the 'detail' object
  });
