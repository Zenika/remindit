bookmarklet = function () {
        var url = 'http://localhost:8080/index';
        if (window.myBookmarklet === undefined) {
            var done = false;
            var script = document.createElement('script');
            script.src = 'http://localhost:8080/js/myLib.js';
            script.onload = script.onreadystatechange = function () {
                if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {
                    done = true;
                    myBookmarklet();
                }
            };
            document.getElementsByTagName('head')[0].appendChild(script);
        } else {
            myBookmarklet();
        }

};