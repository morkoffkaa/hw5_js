

class SuperMath {

    input(obj) {
        obj.x = +prompt("Введіть X");
        obj.y = +prompt("Введіть Y");
        obj.znak = prompt("Введіть оператор (+, -, /, *, %)");

        if(obj.znak === "+" || obj.znak === "-" || obj.znak === "/" || obj.znak === "*" || obj.znak === "%") {
            console.log("Знак вірний");
        } else {
            alert("Будь ласка введіть оператор коректно (+, -, /, *, %)");
            obj.znak = prompt("Введіть оператор (+, -, /, *, %)");
        }
    }

    calc(obj) {
        if(confirm("Ви готові до обчислень?")) {
            switch(obj.znak){
                case "+":
                    alert(`${obj.x} + ${obj.y} = ${obj.x + obj.y}`);
                    break;
                case "-":
                    alert(`${obj.x} - ${obj.y} = ${obj.x - obj.y}`);
                    break;
                case "/":
                    alert(`${obj.x} / ${obj.y} = ${obj.x / obj.y}`);
                    break;
                case "*":
                    alert(`${obj.x} * ${obj.y} = ${obj.x * obj.y}`);
                    break;
                case "%":
                    alert(`${obj.x} % ${obj.y} = ${obj.x % obj.y}`);
                    break;
            }
        } else {
            this.input(obj);
            this.calc(obj);
        }
    }
}

let obj = {
    x : 6,
    y : 5,
    znak : "*"
}

const result = new SuperMath();
result.calc(obj);
