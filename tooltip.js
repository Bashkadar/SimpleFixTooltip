document.addEventListener("DOMContentLoaded", function () {
    let points = document.querySelector('body');
    let r,tt,tar,t1;
    points.onmouseover = points.onmouseout = tooltip;

    tt = document.createElement("div");
    tt.setAttribute('id','tooltip');
    tt.setAttribute('class','tooltip');
    document.body.appendChild(tt);

    function tooltip(el) {
        if (el.target.className === 'point') {
            if (el.type === 'mouseover') {
                t1 = setTimeout(function () {
                    tar = el.target;
                    tt.innerHTML = 'some text for tooltip';
                    r = tar.getBoundingClientRect();
                    tt.style.top = r.top + pageYOffset + 'px';
                    tt.style.left = r.left + pageXOffset + r.width + 10 + 'px';
                    tt.style.opacity = '1';
                    tt.style.transition = 'opacity 200ms';
                    tar.style.transition = 'color 200ms';
                    tar.style.color = '#00EBFF';
                }, 300);
            }else if (el.type === 'mouseout') {
                if (t1) clearTimeout(t1);
                if(tar){
                    tt.style.opacity = '0';
                    tt.style.transition = 'opacity 200ms';
                    tar.style.transition = 'color 200ms';
                    tar.style.color = 'black';
                }
            }
        }
    }
});