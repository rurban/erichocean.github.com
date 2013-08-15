/*
 * FlashCanvas Pro
 *
 * Copyright (c) 2009      Tim Cameron Ryan
 * Copyright (c) 2009-2011 Shinya Muramatsu
 */
window.ActiveXObject && !window.CanvasRenderingContext2D &&
function(j, m) {
  function O(a) {
    this.code = a;
    this.message = ea[a]
  }
  function y(a, b, c) {
    if (!c) {
      c = [];
      for (var d = 0, e = a * b * 4; d < e; ++d) c[d] = 0
    }
    this.width = a;
    this.height = b;
    this.data = c
  }
  function fa(a) {
    this.width = a
  }
  function P(a) {
    this.id = a.I++
  }
  function z(a) {
    this.O = a;
    this.id = a.I++
  }
  function D(a, b) {
    this.canvas = a;
    this.w = b;
    this.f = a.uniqueID;
    this.J();
    this.I = 0;
    this.j = this.H = "";
    this.c = 0
  }
  function E() {
    if (m.readyState === "complete") {
      m.detachEvent(Q, E);
      for (var a = m.getElementsByTagName(u), b = 0, c = a.length; b < c; ++b) F.initElement(a[b])
    }
  }
  function R() {
    var a = event.srcElement,
        b = a.parentNode;
    a.blur();
    b.focus()
  }
  function G() {
    event.button & 2 && event.srcElement.parentNode.setCapture()
  }
  function H() {
    event.button & 2 && event.srcElement.parentNode.releaseCapture()
  }
  function S() {
    var a = event.propertyName;
    if (a === "width" || a === "height") {
      var b = event.srcElement,
          c = b[a],
          d = parseInt(c, 10);
      if (isNaN(d) || d < 0) d = a === "width" ? 300 : 150;
      if (c === d) {
        b.style[a] = d + "px";
        b.getContext("2d").P(b.width, b.height)
      } else b[a] = d
    }
  }
  function T() {
    j.detachEvent(U, T);
    for (var a in n) {
      var b = n[a],
          c = b.firstChild,
          d;
      for (d in c) if (typeof c[d] === "function") c[d] = k;
      for (d in b) if (typeof b[d] === "function") b[d] = k;
      c.detachEvent(V, R);
      c.detachEvent(I, G);
      b.detachEvent(J, H);
      b.detachEvent(W, S)
    }
    j[X] = k;
    j[Y] = k;
    j[Z] = k;
    j[K] = k;
    j[$] = k
  }
  function ga() {
    var a = m.getElementsByTagName("script");
    a = a[a.length - 1];
    return m.documentMode >= 8 ? a.src : a.getAttribute("src", 4)
  }
  function ha(a) {
    return a.toLowerCase()
  }
  function g(a) {
    throw new O(a);
  }
  function aa(a) {
    var b = parseInt(a.width, 10),
        c = parseInt(a.height, 10);
    if (isNaN(b) || b < 0) b = 300;
    if (isNaN(c) || c < 0) c = 150;
    a.width = b;
    a.height = c
  }
  var k = null,
      u = "canvas",
      X = "CanvasRenderingContext2D",
      Y = "CanvasGradient",
      Z = "CanvasPattern",
      K = "FlashCanvas",
      $ = "G_vmlCanvasManager",
      V = "onfocus",
      I = "onmousedown",
      J = "onmouseup",
      W = "onpropertychange",
      Q = "onreadystatechange",
      U = "onunload",
      q;
  try {
    q = (new ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version").match(/[\d,]+/)[0].replace(/,/g, ".")
  } catch (ia) {
    q = 0
  }
  var r = j[K + "Options"] || {},
      ba = r.swfPath || ga().replace(/[^\/]+$/, ""),
      x;
  x = parseInt(q) > 9 ? ba + "flash10canvas.swf" : ba + "flash9canvas.swf";
  var A = {},
      B = {},
      ca = {},
      L = {},
      v = {},
      da = {},
      n = {},
      C = {},
      l = {
      C: "turbo" in r ? r.turbo : 1,
      B: r.delay || 0,
      M: r.disableContextMenu || 0,
      N: r.imageCacheSize || 100,
      D: r.usePolicyFile || 0
      };
  if (q === "10.1.53.64") {
    l.C = 0;
    l.B = 30
  }
  D.prototype = {
    save: function() {
      this.e(15);
      this.L.push([this.l, this.m, this.v, this.k, this.p, this.n, this.o, this.q, this.t, this.u, this.r, this.s, this.j, this.z, this.A]);
      this.a.push("B")
    },
    restore: function() {
      var a = this.L;
      if (a.length) {
        a = a.pop();
        this.globalAlpha = a[0];
        this.globalCompositeOperation = a[1];
        this.strokeStyle = a[2];
        this.fillStyle = a[3];
        this.lineWidth = a[4];
        this.lineCap = a[5];
        this.lineJoin = a[6];
        this.miterLimit = a[7];
        this.shadowOffsetX = a[8];
        this.shadowOffsetY = a[9];
        this.shadowBlur = a[10];
        this.shadowColor = a[11];
        this.font = a[12];
        this.textAlign = a[13];
        this.textBaseline = a[14]
      }
      this.a.push("C")
    },
    scale: function(a, b) {
      this.a.push("D", a, b)
    },
    rotate: function(a) {
      this.a.push("E", a)
    },
    translate: function(a, b) {
      this.a.push("F", a, b)
    },
    transform: function(a, b, c, d, e, f) {
      this.a.push("G", a, b, c, d, e, f)
    },
    setTransform: function(a, b, c, d, e, f) {
      this.a.push("H", a, b, c, d, e, f)
    },
    createLinearGradient: function(a, b, c, d) {
      isFinite(a) && isFinite(b) && isFinite(c) && isFinite(d) || g(9);
      this.a.push("M", a, b, c, d);
      return new z(this)
    },
    createRadialGradient: function(a, b, c, d, e, f) {
      isFinite(a) && isFinite(b) && isFinite(c) && isFinite(d) && isFinite(e) && isFinite(f) || g(9);
      if (c < 0 || f < 0) g(1);
      this.a.push("N", a, b, c, d, e, f);
      return new z(this)
    },
    createPattern: function(a, b) {
      a || g(17);
      var c = a.tagName,
          d, e, f, h = this.f;
      if (c) {
        c = c.toLowerCase();
        if (c === "img") d = a.getAttribute("src", 2);
        else if (c === u) {
          e = this.G(a);
          f = a !== this.canvas
        } else if (c === "video") return;
        else g(17)
      } else if (a.src) d = a.src;
      else g(17);
      b === "repeat" || b === "no-repeat" || b === "repeat-x" || b === "repeat-y" || b === "" || b === k || g(12);
      if (!e) {
        e = B[h][d];
        if (f = e === void 0) e = this.F(d)
      }
      this.a.push("O", e, b);
      if (f && A[h]) {
        this.g();
        ++v[h]
      }
      return new P(this)
    },
    clearRect: function(a, b, c, d) {
      this.a.push("X", a, b, c, d);
      this.b || this.d();
      this.c = 0
    },
    fillRect: function(a, b, c, d) {
      this.e(1);
      this.a.push("Y", a, b, c, d);
      this.b || this.d();
      this.c = 0
    },
    strokeRect: function(a, b, c, d) {
      this.e(6);
      this.a.push("Z", a, b, c, d);
      this.b || this.d();
      this.c = 0
    },
    beginPath: function() {
      this.a.push("a")
    },
    closePath: function() {
      this.a.push("b")
    },
    moveTo: function(a, b) {
      this.a.push("c", a, b)
    },
    lineTo: function(a, b) {
      this.a.push("d", a, b)
    },
    quadraticCurveTo: function(a, b, c, d) {
      this.a.push("e", a, b, c, d)
    },
    bezierCurveTo: function(a, b, c, d, e, f) {
      this.a.push("f", a, b, c, d, e, f)
    },
    arcTo: function(a, b, c, d, e) {
      e < 0 && isFinite(e) && g(1);
      this.a.push("g", a, b, c, d, e)
    },
    rect: function(a, b, c, d) {
      this.a.push("h", a, b, c, d)
    },
    arc: function(a, b, c, d, e, f) {
      c < 0 && isFinite(c) && g(1);
      this.a.push("i", a, b, c, d, e, f ? 1 : 0)
    },
    fill: function() {
      this.e(1);
      this.a.push("j");
      this.b || this.d();
      this.c = 0
    },
    stroke: function() {
      this.e(6);
      this.a.push("k");
      this.b || this.d();
      this.c = 0
    },
    clip: function() {
      this.a.push("l")
    },
    isPointInPath: function(a, b) {
      this.a.push("m", a, b);
      return this.g() === "true"
    },
    fillText: function(a, b, c, d) {
      this.e(9);
      this.h.push(this.a.length + 1);
      this.a.push("r", a, b, c, d === void 0 ? Infinity : d);
      this.b || this.d();
      this.c = 0
    },
    strokeText: function(a, b, c, d) {
      this.e(10);
      this.h.push(this.a.length + 1);
      this.a.push("s", a, b, c, d === void 0 ? Infinity : d);
      this.b || this.d();
      this.c = 0
    },
    measureText: function(a) {
      var b = C[this.f];
      try {
        b.style.font = this.font
      } catch (c) {}
      b.innerText = a.replace(/[ \n\f\r]/g, "\t");
      return new fa(b.offsetWidth)
    },
    drawImage: function(a, b, c, d, e, f, h, i, s) {
      a || g(17);
      var o = a.tagName,
          t, p, M, w = arguments.length,
          N = this.f;
      if (o) {
        o = o.toLowerCase();
        if (o === "img") t = a.getAttribute("src", 2);
        else if (o === u) {
          p = this.G(a);
          M = a !== this.canvas
        } else if (o === "video") return;
        else g(17)
      } else if (a.src) t = a.src;
      else g(17);
      if (!p) {
        p = B[N][t];
        if (M = p === void 0) p = this.F(t)
      }
      this.e(0);
      if (w === 3) this.a.push("u", w, p, b, c);
      else if (w === 5) this.a.push("u", w, p, b, c, d, e);
      else if (w === 9) {
        if (d === 0 || e === 0) g(1);
        this.a.push("u", w, p, b, c, d, e, f, h, i, s)
      } else return;
      if (M && A[N]) {
        this.g();
        ++v[N]
      } else this.b || this.d();
      this.c = 0
    },
    createImageData: function(a, b) {
      var c = Math.ceil;
      if (arguments.length === 2) {
        isFinite(a) && isFinite(b) || g(9);
        if (a === 0 || b === 0) g(1)
      } else {
        a instanceof y || g(9);
        b = a.height;
        a = a.width
      }
      a = c(a < 0 ? -a : a);
      b = c(b < 0 ? -b : b);
      return new y(a, b)
    },
    getImageData: function(a, b, c, d) {
      isFinite(a) && isFinite(b) && isFinite(c) && isFinite(d) || g(9);
      if (c === 0 || d === 0) g(1);
      this.a.push("w", a, b, c, d);
      a = this.g();
      c = typeof JSON === "object" ? JSON.parse(a) : m.documentMode ? eval(a) : a.slice(1, -1).split(",");
      a = c.shift();
      b = c.shift();
      return new y(a, b, c)
    },
    putImageData: function(a, b, c, d, e, f, h) {
      a instanceof y || g(17);
      isFinite(b) && isFinite(c) || g(9);
      var i = arguments.length,
          s = a.width,
          o = a.height,
          t = a.data;
      if (i === 3) this.a.push("x", i, s, o, t.toString(), b, c);
      else if (i === 7) {
        isFinite(d) && isFinite(e) && isFinite(f) && isFinite(h) || g(9);
        this.a.push("x", i, s, o, t.toString(), b, c, d, e, f, h)
      }
      this.b || this.d();
      this.c = 0
    },
    J: function() {
      this.globalAlpha = this.l = 1;
      this.globalCompositeOperation = this.m = "source-over";
      this.fillStyle = this.k = this.strokeStyle = this.v = "#000000";
      this.lineWidth = this.p = 1;
      this.lineCap = this.n = "butt";
      this.lineJoin = this.o = "miter";
      this.miterLimit = this.q = 10;
      this.shadowBlur = this.r = this.shadowOffsetY = this.u = this.shadowOffsetX = this.t = 0;
      this.shadowColor = this.s = "rgba(0, 0, 0, 0.0)";
      this.font = this.j = "10px sans-serif";
      this.textAlign = this.z = "start";
      this.textBaseline = this.A = "alphabetic";
      this.a = [];
      this.L = [];
      this.i = [];
      this.h = [];
      this.b = k;
      this.K = 1
    },
    e: function(a) {
      var b = this.a,
          c;
      if (this.l !== this.globalAlpha) b.push("I", this.l = this.globalAlpha);
      if (this.m !== this.globalCompositeOperation) b.push("J", this.m = this.globalCompositeOperation);
      if (this.t !== this.shadowOffsetX) b.push("T", this.t = this.shadowOffsetX);
      if (this.u !== this.shadowOffsetY) b.push("U", this.u = this.shadowOffsetY);
      if (this.r !== this.shadowBlur) b.push("V", this.r = this.shadowBlur);
      if (this.s !== this.shadowColor) {
        c = this.s = this.shadowColor;
        ("" + c).indexOf("%") > 0 && this.i.push(b.length + 1);
        b.push("W", c)
      }
      if (a & 1) if (this.k !== this.fillStyle) {
        c = this.k = this.fillStyle;
        if (typeof c === "object") c = c.id;
        else("" + c).indexOf("%") > 0 && this.i.push(b.length + 1);
        b.push("L", c)
      }
      if (a & 2) if (this.v !== this.strokeStyle) {
        c = this.v = this.strokeStyle;
        if (typeof c === "object") c = c.id;
        else("" + c).indexOf("%") > 0 && this.i.push(b.length + 1);
        b.push("K", c)
      }
      if (a & 4) {
        if (this.p !== this.lineWidth) b.push("P", this.p = this.lineWidth);
        if (this.n !== this.lineCap) b.push("Q", this.n = this.lineCap);
        if (this.o !== this.lineJoin) b.push("R", this.o = this.lineJoin);
        if (this.q !== this.miterLimit) b.push("S", this.q = this.miterLimit)
      }
      if (a & 8) {
        if (this.j !== this.font) {
          a = C[this.f].offsetHeight;
          this.h.push(b.length + 2);
          b.push("o", a, this.j = this.font)
        }
        if (this.z !== this.textAlign) b.push("p", this.z = this.textAlign);
        if (this.A !== this.textBaseline) b.push("q", this.A = this.textBaseline);
        if (this.H !== this.canvas.currentStyle.direction) b.push("1", this.H = this.canvas.currentStyle.direction)
      }
    },
    d: function() {
      var a = this;
      a.b = setTimeout(function() {
        if (v[a.f]) a.d();
        else {
          a.b = k;
          a.g(l.C)
        }
      }, l.B)
    },
    Q: function() {
      clearTimeout(this.b);
      this.b = k
    },
    g: function(a) {
      var b, c, d, e = this.i,
          f = this.h,
          h = this.a,
          i = this.w;
      if (h.length) {
        this.b && this.Q();
        if (a) {
          b = 0;
          for (c = e.length; b < c; ++b) {
            d = e[b];
            h[d] = encodeURI(h[d])
          }
          b = 0;
          for (c = f.length; b < c; ++b) {
            d = f[b];
            h[d] = encodeURIComponent(h[d])
          }
        } else {
          b = 0;
          for (c = f.length; b < c; ++b) {
            d = f[b];
            h[d] = ("" + h[d]).replace(/&/g, "&amp;").replace(/</g, "&lt;")
          }
        }
        b = h.join("\u0001");
        this.a = [];
        this.i = [];
        this.h = [];
        if (a) {
          i.flashvars = "c=" + b;
          i.width = i.clientWidth + this.K;
          this.K ^= -2
        } else return i.CallFunction('<invoke name="executeCommand" returntype="javascript"><arguments><string>' + b + "</string></arguments></invoke>")
      }
    },
    P: function(a, b) {
      this.g();
      this.J();
      if (a > 0) this.w.width = a;
      if (b > 0) this.w.height = b;
      this.a.push("2", a, b);
      this.b || this.d();
      this.c = 0
    },
    G: function(a) {
      var b = a.uniqueID,
          c = u + ":" + b;
      if (a.width === 0 || a.height === 0) g(11);
      if (b !== this.f) {
        a = n[b].getContext("2d");
        if (!a.c) {
          b = ++da[b];
          c += ":" + b;
          a.a.push("3", b);
          a.b || a.d();
          a.c = 1
        }
      }
      return c
    },
    F: function(a) {
      var b = this.f,
          c = B[b],
          d = ca[b],
          e = c[a] = L[b]++;
      if (e >= l.N - 1) L[b] = 0;
      e in d && delete c[d[e]];
      this.h.push(this.a.length + 2);
      this.a.push("5", e, a);
      d[e] = a;
      return e
    }
  };
  z.prototype = {
    addColorStop: function(a, b) {
      if (isNaN(a) || a < 0 || a > 1) g(1);
      var c = this.O,
          d = this.id;
      ("" + b).indexOf("%") > 0 && c.i.push(c.a.length + 3);
      c.a.push("y", d, a, b)
    }
  };
  O.prototype = Error();
  var ea = {
    1: "INDEX_SIZE_ERR",
    9: "NOT_SUPPORTED_ERR",
    11: "INVALID_STATE_ERR",
    12: "SYNTAX_ERR",
    17: "TYPE_MISMATCH_ERR",
    18: "SECURITY_ERR"
  },
      F = {
      initElement: function(a) {
        if (a.getContext) return a;
        var b = a.uniqueID,
            c = "external" + b;
        A[b] = 0;
        B[b] = {};
        ca[b] = [];
        L[b] = 0;
        v[b] = 1;
        da[b] = 0;
        aa(a);
        a.innerHTML = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="' + location.protocol + '//fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="100%" height="100%" id="' + c + '"><param name="allowScriptAccess" value="always"><param name="flashvars" value="id=' + c + '"><param name="wmode" value="transparent"></object><span style="margin:0;padding:0;border:0;display:inline-block;position:static;height:1em;overflow:visible;white-space:nowrap"></span>';
        n[b] = a;
        var d = a.firstChild;
        C[b] = a.lastChild;
        var e = m.body.contains;
        if (e(a)) d.movie = x;
        else var f = setInterval(function() {
          if (e(a)) {
            clearInterval(f);
            d.movie = x
          }
        }, 0);
        if (m.compatMode === "BackCompat" || !j.XMLHttpRequest) C[b].style.overflow = "hidden";
        var h = new D(a, d);
        a.getContext = function(i) {
          return i === "2d" ? h : k
        };
        a.toDataURL = function(i, s) {
          if (a.width === 0 || a.height === 0) return "data:,";
          ("" + i).replace(/[A-Z]+/g, ha) === "image/jpeg" ? h.a.push("A", i, typeof s === "number" ? s : "") : h.a.push("A", i);
          return h.g().slice(1, -1)
        };
        d.attachEvent(V, R);
        if (l.M) {
          d.attachEvent(I, G);
          a.attachEvent(J, H)
        }
        l.D && h.a.push("4", "usePolicyFile", l.D);
        return a
      },
      saveImage: function(a) {
        a.firstChild.saveImage()
      },
      setOptions: function(a) {
        for (var b in a) {
          var c = a[b];
          switch (b) {
          case "turbo":
            l.C = c;
            break;
          case "delay":
            l.B = c;
            break;
          case "disableContextMenu":
            var d = l.M = c;
            c = void 0;
            for (c in n) {
              var e = n[c],
                  f = d ? "attachEvent" : "detachEvent";
              e.firstChild[f](I, G);
              e[f](J, H)
            }
            break;
          case "imageCacheSize":
            l.N = c;
            break;
          case "usePolicyFile":
            d = b;
            c = l.D = c ? 1 : 0;
            e = void 0;
            for (e in n) {
              f = n[e].getContext("2d");
              f.h.push(f.a.length + 2);
              f.a.push("4", d, c)
            }
          }
        }
      },
      trigger: function(a, b) {
        n[a].fireEvent("on" + b)
      },
      unlock: function(a, b) {
        v[a] && --v[a];
        if (b) {
          var c = n[a],
              d = c.firstChild,
              e, f;
          aa(c);
          e = c.width;
          f = c.height;
          c.style.width = e + "px";
          c.style.height = f + "px";
          if (e > 0) d.width = e;
          if (f > 0) d.height = f;
          d.resize(e, f);
          c.attachEvent(W, S);
          A[a] = 1
        }
      }
      };
  m.createElement(u);
  m.createStyleSheet().cssText = u + "{display:inline-block;overflow:hidden;width:300px;height:150px}";
  m.readyState === "complete" ? E() : m.attachEvent(Q, E);
  j.attachEvent(U, T);
  if (x.indexOf(location.protocol + "//" + location.host + "/") === 0) {
    q = new ActiveXObject("Microsoft.XMLHTTP");
    q.open("GET", x, false);
    q.send(k)
  }
  j[X] = D;
  j[Y] = z;
  j[Z] = P;
  j[K] = F;
  j[$] = {
    init: function() {},
    init_: function() {},
    initElement: F.initElement
  }
}(window, document);
