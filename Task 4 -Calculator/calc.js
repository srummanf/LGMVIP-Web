// Todo: Make M+ M- and MC functional
let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == '√') {
            string = Math.sqrt(string)
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'log') {
            string = Math.log10(string)
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'sin') {
            string = Math.sin(string)
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'cos') {
            string = Math.cos(string)
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'tan') {
            string = Math.tan(string)
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == '^2') {
            string = Math.pow(string, 2)
            document.querySelector('input').value = string;
        }

        else if (e.target.innerHTML == 'C') {
            string = ""
            document.querySelector('input').value = string;
        }

        else if (e.target.innerHTML == 'R') {
            document.body.style.background = "#C2ABAB";

            var elements = document.getElementsByClassName("row")
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.background = "#C2ABAB";
            }

            var elements = document.getElementsByClassName("button")
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.background = "#C2ABAB";
            }

            var elements = document.getElementsByClassName("container")
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.background = "#C2ABAB";
            }

            var elements = document.getElementsByClassName("text-center")
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.background = "#C2ABAB";
            }

            var elements = document.getElementsByClassName("input")
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.background = "#C2ABAB";
            }

            var elements = document.getElementsByClassName("input")
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.background = "#C2ABAB";
            }
            string = ""
            document.querySelector('input').value = string;
        }

        else if (e.target.innerHTML == 'B') {
            document.body.style.background = "#ABBCC2";

            var elements = document.getElementsByClassName("row")
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.background = "#ABBCC2";
            }

            var elements = document.getElementsByClassName("button")
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.background = "#ABBCC2";
            }

            var elements = document.getElementsByClassName("container")
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.background = "#ABBCC2";
            }

            var elements = document.getElementsByClassName("text-center")
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.background = "#ABBCC2";
            }

            var elements = document.getElementsByClassName("input")
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.background = "#ABBCC2";
            }

            var elements = document.getElementsByClassName("input")
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.background = "#ABBCC2";
            }
            string = ""
            document.querySelector('input').value = string;
        }

        else if (e.target.innerHTML == 'G') {
            document.body.style.background = "#ABC2B4";

            var elements = document.getElementsByClassName("row")
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.background = "#ABC2B4";
            }

            var elements = document.getElementsByClassName("button")
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.background = "#ABC2B4";
            }

            var elements = document.getElementsByClassName("container")
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.background = "#ABC2B4";
            }

            var elements = document.getElementsByClassName("text-center")
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.background = "#ABC2B4";
            }

            var elements = document.getElementsByClassName("input")
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.background = "#ABC2B4";
            }

            var elements = document.getElementsByClassName("input")
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.background = "#ABC2B4";
            }
            string = ""
            document.querySelector('input').value = string;
        }

        else if (e.target.innerHTML == 'Y') {
            document.body.style.background = "#C2C2AB";

            var elements = document.getElementsByClassName("row")
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.background = "#C2C2AB";
            }

            var elements = document.getElementsByClassName("button")
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.background = "#C2C2AB";
            }

            var elements = document.getElementsByClassName("container")
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.background = "#C2C2AB";
            }

            var elements = document.getElementsByClassName("text-center")
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.background = "#C2C2AB";
            }

            var elements = document.getElementsByClassName("input")
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.background = "#C2C2AB";
            }

            var elements = document.getElementsByClassName("input")
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.background = "#C2C2AB";
            }
            string = ""
            document.querySelector('input').value = string;
        }



        else {
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})