/*
 * Create carousel
 * Using mostly bootstrap css
 */

function createCrsl(cnr) {
    var crsl = document.createElement("div");
    crsl.setAttribute('id', "myCarousel");
    crsl.setAttribute('class', "carousel slide");
    crsl.setAttribute('data-interval', "false");
    crsl.setAttribute('keyboard', "true");
    cnr.appendChild(crsl);

    var crslInner = document.createElement("div");
    crslInner.setAttribute('class', "carousel-inner");
    crslInner.setAttribute('role', "listbox");
    crslInner.setAttribute('id', 'crsl');
    crsl.appendChild(crslInner);

    return crsl;
}

function createLarrow(crsl) {
    var left = document.createElement("a");
    left.setAttribute('class', "left carousel-control");
    left.setAttribute('href', "#myCarousel");
    left.setAttribute('role', "button");
    left.setAttribute('data-slide', "prev");
    var lSpan1 = document.createElement("span");
    lSpan1.setAttribute('class', "glyphicon glyphicon-chevron-left");
    lSpan1.setAttribute('aria-hidden', "true");
    var lSpan2 = document.createElement("span");
    lSpan2.setAttribute('class', "sr-only");
    lSpan2.innerHTML = "Previous";
    left.appendChild(lSpan1);
    left.appendChild(lSpan2);
    crsl.appendChild(left);
}

function createRarrow(crsl) {
    var right = document.createElement("a");
    right.setAttribute('class', "right carousel-control");
    right.setAttribute('href', "#myCarousel");
    right.setAttribute('role', "button");
    right.setAttribute('data-slide', "next");
    var rSpan1 = document.createElement("span");
    rSpan1.setAttribute('class', "glyphicon glyphicon-chevron-right");
    rSpan1.setAttribute('aria-hidden', "true");
    var rSpan2 = document.createElement("span");
    rSpan2.setAttribute('class', "sr-only");
    rSpan2.innerHTML = "Next";
    right.appendChild(rSpan1);
    right.appendChild(rSpan2);
    crsl.appendChild(right);
}
