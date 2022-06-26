//深色模式切换
(function($) {
    var allfunction = {
        dark_light: () => {
            /** Dark Light Version*/
            var html = document.querySelector('html'),
                darkLight = document.querySelector('.dark-light')
            if (darkLight) {
                darkLight.addEventListener('click', function() {
                    if (html.getAttribute('data-theme') === 'light') {
                        html.setAttribute('data-theme', 'dark')
                        localStorage.setItem('selected-theme', 'dark');
                    } else {
                        html.setAttribute('data-theme', 'light')
                        localStorage.setItem('selected-theme', 'light');
                    }
                })
            }
        },
        init: function() {
            allfunction.dark_light()
        },
    }

    $(document).ready(function() {
        allfunction.init();
    });

})(jQuery);

if (typeof (Storage) !== 'undefined') {
    if (localStorage.getItem('selected-theme') == 'light') {
        document.documentElement.setAttribute('data-theme', 'light');

    }
    else if (localStorage.getItem('selected-theme') == 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
}


