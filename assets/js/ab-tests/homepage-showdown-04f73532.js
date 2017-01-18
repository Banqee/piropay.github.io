(function() {
    var e,
        t,
        n,
        i,
        r;
    window.ab_tests && (i = ["locked-original-text", "locked-original-text-menu", "isometric-altimg", "isometric-altimg-menu"], r = [.25, .25, .25, .25], t = window.location.search.slice(1).split("&").reduce(function(e, t) {
        return t = t.split("="), e[t[0]] = decodeURIComponent(t[1]), e
    }, {}), t.hasOwnProperty("ab") && i.indexOf(t.ab) > -1 && ab_tests.set_ab_test("hp-showdown7", String.fromCharCode(97 + i.indexOf(t.ab))), e = ab_tests.get_ab_test("hp-showdown7", r), n = i[ab_tests.char_to_index(e)], document.documentElement.className += " " + n, window.hp_showdown = n)
}).call(this);
