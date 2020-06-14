//Assignment 01 JavaScript:| t1,t2,t3,.....tn referes to task numbers 

function assignment1_t1() {
    alert("Hello User This is my Website");
}

function assignment1_t2() {
    alert("Error! Please Enter a valid Password");
}

function assignment1_t3() {
    alert("Welcome to JS Land...\nHappy Coding!");
}

function assignment1_t4() {
    alert("Welcome to JS Land...");
    alert("Happy Coding!");
}

//Assignment2 starts from here!

//task1
function assignment2_t1() {
    let username = "Arun Kumar";
    document.write("user Name is:" + username);
}
//task2
function assignment2_t2() {
    let myname = "Arun Kumar";
    document.write("My Full Name is:" + myname);
}
//task3
function assignment2_t3() {
    let message = "Hello World";
    alert(message);
}

//task4
function assignment2_t4() {

    let StudentName = "Arun Kumar";
    let age = "22 years";
    let education = "BSCS graduate from bahria university karachi campus";
    alert(StudentName);
    alert(age);
    alert(education);
}

//task5


function assignment2_t6() {
    let email = "Arunkvalecha@gmail.com";
    alert("My Email Address is " + email);
}

function assignment2_t7() {
    let book = "A smarter way to learn javaScript";
    alert("I am trying to learn JavaScript from the Book" + book);
}

function assignment2_t8() {
    document.getElementById("tagid").innerHTML = "Yah! I can write HTML content through JavaScript";
}

function assignment2_t9() {
    alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬");
}

//assignment2 ends here

// assignment3 starts from here

function assignment3_t1() {
    let age = 22;

    alert("I am" + " " + age + " " + "years old");

}
// task2 assignment3 remaining
function assignment3_t2() {
    let n = localStorage.getItem('on_load_counter');

    if (n === null) {
        n = 0;
    }

    n++;

    localStorage.setItem("on_load_counter", n);

    alert(n);

}
// task 3
function assignment3_t3() {
    let BirthYear = 1997;
    document.write("My BirthYear is:" + BirthYear);
    document.write(`<br>Data Type of my declared variable is:${typeOf(BirthYear)}`); //typeOf function allows you to get the type of declared variable
}

//task 4

function assignment3_t4() {
    let visitorName = "Arun Kumar";
    let product = "T-Shirts";
    let Quantity = "5";
    document.write(`${visitorName.bold()} Ordered ${Quantity.bold()} ${product.bold()} on XYZ clothing.com`);

}



// assignment3 ends here


// assignment4 starts from here

function assignment4_t1() {

    let a = 2,
        b = 3,
        c = 4;

    document.write("First Variable is:" + "a:" + a + "<br> Second Variable is:" + "b:" + b + "<br> Third Variable is:" + "c:" + c);

}

// this function is commented because it was causing errors in execution for other function calls since it has some illegal variable declarations.

/*function assignment4_t2() {

    // 5 legal variables

    let variable1, variable2, variable3,
        variable4,
        variable5;

    // 5 illegal variables

    let 1 sa = "hello";
    let 234 = "illegal variable";
    let "_123;
    let "value = 12;
    let this = "ashdkasjk";

}*/

function assignment4_t3() {

    let heading = "Rules for naming JS variables";
    document.write(heading.bold() + "<br> ");

    let rule1 = "Variable names can only contain letters, numbers, $, _ for example: $my_1stVariable.";
    let rule2 = "variable must begin with a letter,$ or _ for example:$name, _name, name.";
    let rule3 = "Variable names are case sensitive";
    let rule4 = "Variable names should not be case sensitive";

    document.write(rule1 + "<br> " + rule2 + "<br> " + rule3 + "<br> " + rule4);


}


// assignment4 ends here
// assignment5 starts from here


function A5_t1() {

    let num1 = parseFloat(prompt("Enter Number 1:"));
    let num2 = parseFloat(prompt("Enter Number 2:"));

    document.write("Sum of:" + num1 + " " + "&\t" + num2 + " " +
        "is:" + (num1 + num2));

    document.write("<br> Subsraction of:" + num1 + " " + "&\t" + num2 + " " +
        "is:" + (num1 - num2));

    document.write("<br> Division of:" + num1 + " " + "&\t" + num2 + " " +
        "is:" + (num1 / num2));

    document.write("<br> Modulus of:" + num1 + " " + "&\t" + num2 + " " +
        "is:" + (num1 % num2));



    document.write("<br> Multiplication of:" + num1 + " " + "&\t" + num2 + " " +
        "is:" + (num1 * num2));

}

function A5_t2() {
    let x;

    document.write("Value of x is:" + x + "<br>");
    x = 6;
    document.write("Value of x after intialization:" + x + "<br>");

    x++;
    document.write("Value of x after increment:" + x + "<br>");

    x = x + 7;
    document.write("After adding 7 to the x the new value is:" + x + "<br>");
    x--;

    document.write("value of x after decrement:" + x + "<br>");
    x = x % 3;
    document.write("Remainder after dividing:" + x + "<br>");

}

function A5_t4() {
    let ticketCost = 750;
    document.write("The cost of buying 5 tickets is:" + (ticketCost * 5));

}


function A5_t5() {


    let num = parseInt(prompt("Enter Any Number to print its table"));
    document.write("Table of" + num + "is:<br>")

    for (let i = 1; i <= 10; i++) {
        document.write(num + "x" + i + "=" + (num * i) + "<br>");
    }



}


function A5_t6() {

    let celcius = parseFloat(prompt("Enter Temperature in celcius to convert in fahrenheit"));
    let fahrenheit = parseFloat(prompt("Enter Temperature in fahrenheit to convert in celcius"));
    document.write("Temperature in Fahrenheit is:" + (celcius * (9 / 5) + 32));
    document.write("<br>" + "Temperature in Fahrenheit" + (fahrenheit - 32) * (5 / 9));
}

function A5_t7() {
    let price_item1 = parseFloat(prompt("Enter Price of Item One:"));
    let price_item2 = parseFloat(prompt("Enter Price of Item two:"));
    let Quantity_item1 = parseFloat(prompt("Enter Quantity of Item One:"));
    let Quantity_item2 = parseFloat(prompt("Enter Quantity of Item two:"));
    let shipping_charges = parseFloat(prompt("Enter Shipping charges"));
    document.write("Shopping Cart".bold() + "<br> <br>");
    document.write("price of Item 1 is:" + price_item1 + "<br>");
    document.write("Quantity of Item 1 is:" + Quantity_item1 + "<br>");
    document.write("price of Item 2 is:" + price_item2 + "<br>");
    document.write("Quantity of Item 2 is:" + Quantity_item2 + "<br>");
    document.write("<br>" + "Shipping Charges:\t" + shipping_charges);
    document.write("<br> <br>" + "Total Cost of your order is:" + ((price_item1 * Quantity_item1) + (price_item2 * Quantity_item2) + shipping_charges));
}

function A5_t8() {

    let totalMarks = parseFloat(prompt("Enter Total Marks"));
    let obtainedMarks = parseFloat(prompt("Enter Obtained Marks"));
    document.write("Marks Sheet".bold() + "<br>");
    document.write("Total Marks:" + totalMarks + "<br>");
    document.write("Obtained Marks:" + obtainedMarks + "<br>");
    document.write("Percentage:" + (obtainedMarks / totalMarks) * 100);

}

function A5_t9() {

    let USD = parseFloat(prompt("Enter USD to convert PKR"));
    USD = USD * 104.80;
    let AED = parseFloat(prompt("Enter AED to convert PKR"));
    AED = AED * 28;
    document.write("<br>" + "Total Currency in PKR is:" + (USD + AED));



}


function A5_t10() {

    let value = ((5 + 5) * 10) / 2;
    document.write("Result is:" + value);
}

function A5_t11() {

    let currentYear = parseFloat(prompt("Enter Current Year"));

    let BirthYear = parseFloat(prompt("Enter Birth Year"));


    document.write("Age Calculator".bold() + "<br>");


    document.write("<br>" + "Current Year:" + currentYear);

    document.write("<br>" + "BirthYear Year:" + BirthYear);

    document.write("<br> Your Age is:" + (currentYear - BirthYear));
}

function A5_t12() {

    let radius = parseFloat(prompt("Enter Radius of the circle"));


    document.write("The Geometrizer".bold() + "<br>");

    document.write("Radius of a circle is " + radius);

    document.write("<br> The Circumference is:" + (2 * 3.14 * radius));

    document.write("<br> The Area of circle is: " + (3.14 * (radius * radius)));



}

function A5_t13() {
    document.write("The Lifetime supply Calculator <br>".bold());
    let snack = "Cocomo";
    let age = 22;
    let eAge = 70;
    let perDay = 2;


    document.write("Favorite Snack:" + snack + "<br>");
    document.write("Current Age:" + age + "<br>");
    document.write("Estimated Age:" + eAge + "<br>");
    document.write("Amount of snaks per day:" + perDay + "<br>");
    document.write("You will need" + (perDay * age) + snack + "\t to last you until the ripe old age of" + eAge);

}

//--------------------------assignment 6-9 starts from here-----------------//


function A6_t1() {
    let a = parseInt(prompt("Enter Any Number:"));

    document.write("Result:<br>" + "The value of a is:" + a);
    document.write("<br>.........................................<br>");

    ++a;
    document.write("the value of ++a is:" + a);

    document.write("<br>Now the value of a is:" + a + "<br> <br>");

    document.write("the value of a++ is:" + a + "<br>");
    a++;
    document.write("Now the value of a is:" + a + "<br> <br>");

    --a;
    document.write("the value of --a is:" + a);

    document.write("<br> Now the value of a is:" + a + "<br><br>");

    document.write("the value of a-- is:" + a + "<br>");
    a--;
    document.write("Now the value of a is:" + a);

}

function A6_t2() {
    let a = 2,
        b = 1;
    let result = --a - --b + ++b + b--;
    document.write("<br>-----------------------------<br>");

    document.write("<br> a is:" + a);
    document.write("<br> b is:" + b);

    document.write("<br> Result is:" + result);


}

function A6_t3() {
    let username = prompt("Hey User Enter Your name:");
    alert("Hey\t" + username + "\tHow are you?");

}


function A6_t4() {
    let num = parseInt(prompt("Enter Any Number to print its table"));

    if (isNaN(num)) { // isNaN function is used to check if variable has no Value;
        num = 5;
        for (let i = 1; i <= 10; i++) {
            document.write(num + "x" + i + "=" + (num * i) + "<br>");
        }

    } else {

        for (let i = 1; i <= 10; i++) {
            document.write(num + "x" + i + "=" + (num * i) + "<br>");
        }
    }
}

function A6_t6() {

    let totalMarks = 100;

    let sub1 = prompt("Enter Subject Name1:");
    let sub2 = prompt("Enter Subject Name2:");
    let sub3 = prompt("Enter Subject Name3:");


    let marks1 = parseFloat(prompt("Enter Marks for Subject" + sub1));
    let marks2 = parseFloat(prompt("Enter Marks for Subject" + sub2));
    let marks3 = parseFloat(prompt("Enter Marks for Subject" + sub3));


}
//***********Assignment 6-9 ends here************//

//**********Assignment 9-11 starts from here**********//


function A9_t1() {

    let city = prompt("Enter City Name:");


    if (city == "Karachi" || city == "karachi") {
        alert("Welcome to city of lights\t" + city);
    } else {
        alert("welcome to\t" + city);
    }

}


function A9_t2() {

    let gender = prompt("Enter the gender ");


    if (city == "male" || city == "Male") {
        alert("Good Morning Sir");
    } else if (gender == "female" || gender == "Female") {
        alert("Good Morning Ma'am");
    }

}


function A9_t3() {
    let signalColor = prompt("Enter Signal Color");


    if (signalColor == "red" || signalColor == "Red") {
        alert("Must Stop");
    } else if (signalColor == "yellow" || signalColor == "Yellow") {
        alert("Ready To move");
    } else if (signalColor == "Green" || signalColor == "green") {
        alert("Move Now");

    } else {
        alert("Enter Valid Signal Color");
    }

}

function A9_t4() {

    let fuel = parseFloat(prompt("Enter Remaining fuel in your car"));

    if (fuel < 0.25) {
        alert("Please Refill the fuel in the car!");
    }

}



function A9_t5() {

    let a = 4;

    let b = 82;
    if (b++ === 83) {
        alert("given condition for variable b is true");
    }
    let c = 12;
    if (c++ === 13) {
        alert("condition 1 is true");
    }
    if (c === 13) {
        alert("condition 2 is true");
    }
    if (++c < 14) {
        alert("condition 3 is true");
    }
    if (c === 14) {
        alert("condition 4 is true");
    }

    let materialCost = 20000;
    let laborCost = 2000;
    let totalCost = materialCost + laborCost;

    if (totalCost === laborCost + materialCost) {
        alert("The cost equals");
    }

    if (true) {
        alert("True");
    }

    if (false) {
        alert("False");
    }

    if ("car" < "cat") {
        alert("car is smaller than cat");
    }

}



function A9_t6() {

    let total = 980;
    let Grade = "";
    let marks1 = parseFloat(prompt("Enter Marks for Subject1:"));
    let marks2 = parseFloat(prompt("Enter Marks for Subject2:"));
    let marks3 = parseFloat(prompt("Enter Marks for Subject3:"));

    let Obtainedtotal = (marks1 + marks2 + marks3);

    let percentage = ((obtainedMarks / totalMarks) * 100);

    if (percentage >= 80) {

        alert("Excelent!" + " " + "your grade is A1");


    } else if (percentage >= 61 && percentage <= 70) {
        alert("Good!" + " " + "your grade is A");


    } else if (percentage >= 50 && percentage <= 60) {
        alert("You Need to improve" + " " + "your Grade is B");

    } else {
        alert("Sorry!" + " " + "your grade is F");

    }

}


function A9_t7() {
    let secretNum = 5;
    let guessNum = parseInt(prompt("Enter Any Number"));

    if (secretNum == guessNum) {
        alert("Bingo! You have guessed the secret number!");
    } else if ((guessNum + 1) == secretNum) {

        alert("you are close enough!");

    } else {
        alert("Sorry Try Again");
    }

}


function A9_t8() {
    let Num = parseInt(prompt("Enter Any Number"));

    if (Num % 3 == 0) {
        alert("This number is completely divisible by 3");
    } else {
        alert("This number is not divisible by 3");
    }

}


function A9_t9() {
    let Num = parseInt(prompt("Enter Any Number to check if it is even/odd"));

    if (Num % 2 == 0) {
        alert("This number is Even");
    } else {
        alert("This number is Odd");
    }

}

function A9_t10() {
    let temp = parseInt(prompt("Enter Temperature"));

    if (temp >= 40 && temp <= 50) {
        alert("Its too hot outside");
    } else if (temp >= 30 && temp <= 39) {
        alert("Todays weather is normal");
    } else if (temp >= 20 && temp <= 29) {
        alert("Todays weather is cool");
    } else if (temp >= 10 && temp <= 19) {
        alert("Todays weather is cold");
    }

}


function A9_t11() {
    let num1 = parseFloat(prompt("Enter Number 1:"));
    let operator = prompt("Enter Airthmatic Operation to be performed:(+,-,/,*,%)");
    let num2 = parseFloat(prompt("Enter Number 2:"));

    if (operator == "+") {
        document.write("Sum of \t" + num1 + "\t&\t" + num2 + "\tis \t=\t" + (num1 + num2));
    } else if (operator == "-") {
        document.write("Substraction of \t" + num1 + "\t&\t" + num2 + "\tis \t=\t" + (num1 - num2));
    } else if (operator == "/") {
        document.write("Division of \t" + num1 + "\t&\t" + num2 + "\tis \t=\t" + (num1 / num2));
    } else if (operator == "*") {
        document.write("Multiplication of \t" + num1 + "\t&\t" + num2 + "\tis \t=\t" + (num1 * num2));
    } else if (operator == "%") {
        document.write("Modulus of \t" + num1 + "\t&\t" + num2 + "\tis \t=\t" + (num1 % num2));
    }

}

// isko sahi karna hai
function A12_task1() {
    let value = prompt("Enter Any Number of String");

    if (value.toUpperCase() == true) {

        alert("This letter is Upper Case");

    } else if (value.toLowerCase() == true) {
        alert("This letter isb lower case");
    } else if (isInteger(value) == true) {
        alert("This is Number");
    }

}


function A12_task2() {
    let num1 = parseInt(prompt("Enter Number1:"));
    let num2 = parseInt(prompt("Enter Number2:"));



    if (num1 == num2) {
        alert("Both Numbers are equal");
    } else if (num1 > num2) {
        alert("Greater number is:" + num1);
    } else if (num1 < num2) {
        alert("Greater number is:" + num2);
    }

}


function A12_task3() {
    let num = parseInt(prompt("Enter Any Number:"));



    if (num < 0) {
        alert("This is negative number");
    } else if (num > 0) {
        alert("This is positive number");
    } else if (num == 0) {
        alert("This is 0");


    }
}



function A12_task4() {

    let str = prompt("Please enter any letter");


    if (str.length > 1) {
        alert("Please enter only one letter");

    } else {

        if (str == "A" || str == "E" || str == "I" || str == "O" || str == "U" ||
            str == "a" || str == "e" || str == "i" || str == "o" || str == "u") {
            alert("This Letter is vowel");
        } else {
            alert("This Letter is consonant");
        }


    }
}


function A12_task5() {

    let password = "Arunk12345";

    let userPass = prompt("Enter your password");

    if (userPass == "") {
        alert("Please enter your password");
    } else if (userPass == password) {
        alert("Correct");
    } else {
        alert("Invalid password");
    }

}


function A12_task6() {
    let greeting;
    let hour = 13;
    if (hour < 18) {
        greeting = "Good day";
        alert(greeting);
    } else {
        greeting = "Good evening";
        alert(greeting);
    }
}



function A12_task7() {

    let time = parseInt(prompt("Enter Time"));

    if (time >= 0000 && time < 1200) {
        alert("Good Morning")
    } else if (time >= 1200 && time < 1700) {
        alert("Good afternoon");
    } else if (time >= 1700 && time < 2100) {
        alert("Good evening");
    } else if (time >= 2100 && time < 2359) {
        alert("Good Night");
    }

}

//assignment 12-13 ends here

// assignment 14-16 starts here


function A14_task1() {

    //JS literal notations
    let Array = [];
    //JS object notations
    let Array2 = new Array();

    let strArray = ["Arun", "Vinesh", "Talha", "Qais", "Wasi", "Hassan"];
    let NumArray = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);
    let BoolArray = [true, false];
    //mixedArray
    let mixedArray = new Array("Arun", 123456, true, "Kumar", false, "", null, undefined, NaN);

    document.write("Qualifications:".bold() + "<br>");
    let educationArray = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PHD"];

    for (let i = 0; i < educationArray.length; i++) {

        document.write(i + 1 + ")\t" + educationArray[i] + "<br>")

    }

}



function A14_task2() {

    let totalMarks = 500;
    let students = ["Michael", "John", "Tony"];
    let score = [320, 230, 480];

    for (let i = 0; i < students.length; i++) {
        document.write("Score of is\t" + students[i] + "\t" + score[i] + "." + "\tPercentage:" + ((score[i] / totalMarks) * 100) + "%\t" + "<br>");
    }
}


function A14_task3() {

    let colors = ["Red", "Green", "Blue", "Purple", "Back", "Yellow"];

    document.write("Colors in Array are:<br>");

    for (let i = 0; i < colors.length; i++) {

        document.write(colors[i] + "<br>");


    }

    let newcolor = prompt("Enter color name to add in array");
    colors.unshift(newcolor);

    document.write("<br><br>New Colors in Array are:<br><br>");

    for (let i = 0; i < colors.length; i++) {

        document.write(colors[i] + "<br>");


    }

}



function A14_task3() {

    let colors = ["Red", "Green", "Blue", "Purple", "Back", "Yellow"];

    document.write("Colors in Array are:<br>");

    for (let i = 0; i < colors.length; i++) {

        document.write(colors[i] + "<br>");


    }

    let newcolor = prompt("Enter color name to add in array");
    colors.push(newcolor);

    document.write("<br><br>New Colors in Array are:<br><br>");

    for (let i = 0; i < colors.length; i++) {

        document.write(colors[i] + "<br>");
    }


}


function A14_task4() {

    let scores = [320, 230, 480, 120];
    document.write("Scores of students: " + scores);

    document.write("<br> Ordered Scores:" + scores.sort());

}

function A14_task5() {
    let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
    document.write("Cities List:" + cities);
    let selectedCities = [cities[2], cities[3], cities[1]];
    document.write("<br> Seleced Cit" + selectedCities);
}


function A14_task6() {
    let arr = ["this", "is", "my", "cat"];

    document.write("Array:" + arr);

    document.write("<br>String:" + arr.join("\n"));
}



function A14_task7() {
    let Devices = ["Keyboard", "mouse", "Printer", "Monitor"];

    document.write("Devices:" + Devices);


    for (let i = 0; i < Devices.length; i++) {
        document.write("<br> <br>Out: <br>" + Devices[i] + "<br>");
    }


}



function A14_task8() {
    let Devices = ["Keyboard", "mouse", "Printer", "Monitor"];
    document.write("Devices:" + Devices);

    for (let i = Devices.length - 1; i >= 0; i--) {
        document.write("<br><br>Out: <br>" + Devices[i] + "<br>");
    }
}


function A14_task9() {
    let Devices = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
    document.write("Devices:" + Devices);

    for (let i = 0; i < Devices.length; i++) {
        document.write(Devices[i] + "<br>");
    }
}

function A16_task1() {
    let multiArray = [

        [0, 1, 2, 3],
        [1, 0, 1, 2],
        [2, 1, 0, 1]

    ];

    for (let i = 0; i < multiArray.length; i++) {

        document.write(multiArray[i] + "<br>");

    }
}

function A16_task2() {

    for (let i = 1; i <= 10; i++) {

        document.write(i + "<br>")

    }

}



function A16_task3() {

    let num = parseInt(prompt("Enter Any Number to print its table"));
    let value = parseInt(prompt("Enter"));
    document.write("Table of" + num + "is:<br>")

    for (let i = 1; i <= value; i++) {
        document.write(num + "x" + i + "=" + (num * i) + "<br>");
    }


}



function A16_task4() {

    let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

    for (let i = 0; i < fruits.length; i++) {

        document.write("Element At Index\t" + i + "\t" + fruits[i] + "<br>");
    }
}