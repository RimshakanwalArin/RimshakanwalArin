// 2 :  Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
var personalMassage = "hello";
console.log("".concat(personalMassage, " Eric, would you like to learn some Python today?\u201D "));
// 3 : Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var personName = "rimsha";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
// 4 : Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”
var auther = "Albert Einstein once said,";
console.log(" ".concat(auther, "\u201CA person who never made a mistake never tried anything new.\u201D "));
// 5: Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
var famous_person = " Profet Muhammad :";
var massage = "all world help for in life on pepoles";
console.log(massage);
// 6:Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
var personNamea = "\n\tRimsha\t\n";
console.log(personNamea);
// don`t space
var personName1 = personNamea.trim();
console.log(personName1);
// 7:Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
//8:  You should create four lines that look like this:
// your output should simply be four lines with the number 8 appearing once on each line.
console.log(5 + 3);
console.log(12 - 4);
console.log(4 * 2);
console.log(16 / 2);
// 9:Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
var favoriteNumber = 7;
console.log("".concat(favoriteNumber, " my idea number"));
// 10:Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
// name : Rimsha kanwal 
// date : 2024
// this is my faravoit number
var favoriteNumbers = 5;
console.log("".concat(favoriteNumber, " my idea number"));
//11: Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
var friendsNames = ["Allah ", "Ali", "Mama"];
for (var i = 0; i <= 2; i++) {
    var element = friendsNames;
    console.log(element[i]);
}
// 12: Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
var friendsName = ["Allah ", "Ali", "Mama"];
var massage1 = "This hava a my closely frineds";
for (var i = 0; i <= 2; i++) {
    var element = friendsName;
    console.log(massage1, element[i]);
}
// 13:Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var transportation = ["mastadis", "fourXfour", "HONDA Car"];
var massage2 = "“I would like to own a Honda motorcycle.”";
for (var i = 0; i <= 2; i++) {
    var element = transportation;
    console.log(massage1, element[i]);
}
// 14:Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner
var Guest = ["Mama", "papa", "api", "two Brother"];
var massage3 = "Dear sir\n inviting them to dinner.";
for (var i = 0; i <= 3; i++) {
    var element = Guest;
    console.log(massage3, element[i]);
}
//  15: Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
var oldGuest = ["Mama", "papa", "api", "Humza", "Muzammil", "other"];
oldGuest.splice(4, 5, "Fariha", "yusuf");
var massage4 = "Dear :\n inviting them to dinner.";
for (var i = 0; i <= 6; i++) {
    var element = oldGuest;
    console.log(massage4, element[i], oldGuest[5], " \nIt not want attam diner!");
}
