const menuToggleBtns = document.getElementsByClassName('menu-toggle-btn');
        Array.from(menuToggleBtns).forEach(element => {
            element.onclick = function() {
                document.getElementById("float-menu").classList.toggle('open');
            }
        })

        function show(elemId) {
            document.getElementById('main-nav-menu').classList.remove('open');
            document.getElementById('main-nav-menu').classList.add('closed');

            document.getElementById(elemId).classList.remove('closed');
            document.getElementById(elemId).classList.add('open');
        }

        function hide(elemId) {
            console.log('ID: ' + elemId);
            document.getElementById('main-nav-menu').classList.remove('closed');
            document.getElementById('main-nav-menu').classList.add('open');

            document.getElementById(elemId).classList.remove('open');
            document.getElementById(elemId).classList.add('closed');
        }