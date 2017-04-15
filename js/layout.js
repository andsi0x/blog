function layout(class_name, num_posts) {
    "use strict";
    var i, top, left, elements, post_width, MAX_WIDTH;
    elements = document.body.getElementsByClassName(class_name);
    post_width = elements[0].offsetWidth;
    MAX_WIDTH = post_width * num_posts;
    top = 0;
    left = 0;
    
    window.alert(left);
    for (i = 0; i < 5; i += 1) {
        elements[i].setAttribute("left", left);
        elements[i].setAttribute("top", top);
        left = elements[i].offsetWidth;
        if (left > MAX_WIDTH) {
            left = 0;
            top += elements[i].offsetHeight;
            window.alert(left);
        }
    }
}

