// 
// Coded
// by Titanium Steel
// on 11/10/2021
// with JavaScript, Notepad++, and a whole lot of time and love!
// 

// index.js
// Main js file.

// I want my cookies to be BETTER! Creating upgrades object.
const upgrades = {
	List: [ 
		{
			name: "First Start",
			gained: false,
		},
	],
	// Nice doing business with you! Response if an upgrade button has been clicked.
	click: function(upgradeNumber) { 
		if (upgrades.List[upgradeNumber].gained === false) {
			upgrades.List[upgradeNumber].gained = true;
		} else {
			document.getElementById("upgrade" + upgradeNumber).innerHTML = "Sorry, but you don't have the sufficient cookies for this upgrade.";
			setTimeout(() => document.getElementById("upgrade" + upgradeNumber).innerHTML = upgrades.upgradeNumber.name, 100);
		}
	}
};

console.log(
	"%cDon't cheat.",
	"color:red;font-size:4rem;");
console.log('But if you really want to, use "cookie.Unlimited()"')

// Before we continue, how big are we talkin' here? Specifying cookie size.
var PaddingTop = 0;
var Width = 424;
var Height = 463;
var sizeChange = 20;
var ChangedWidth = Width - sizeChange;
var ChangedHeight = Height - sizeChange;
var ChangedPaddingTop = PaddingTop + 10;

// What is this for? This is for smoother first click. I don't know how this works, but it works and I'm happy.
document.getElementById("cookie").style.width = Width + "px";
document.getElementById("cookie").style.height = Height + "px";
document.getElementById("cookie").style.paddingTop = PaddingTop + "px";

// GIMME COOKIES! Creating a function that gives you the specified amount of cookies.
var addCookie = (amount) => {
	cookie.Amount = cookie.Amount + amount
	document.getElementById("cookieAmount").innerHTML = cookie.Amount;
}

// Let there be cookies! Creating cookie object.
var cookie = {
	// How many cookies are we talking, here? The amount of cookies.
	Amount: 0,
	// Oooh, I have been clicked! Function for if cookies was clicked.
	clicked: function() {
		// Alright, I did what you asked, now gimme the cookies! Changing cookie size and amount.
		document.getElementById("cookie").style.width = ChangedWidth + "px";
		document.getElementById("cookie").style.height = ChangedHeight + "px";
		document.getElementById("cookie").style.paddingTop = ChangedPaddingTop + "px";
		setTimeout(() => document.getElementById("cookie").style.width = Width + "px", 100);
		setTimeout(() => document.getElementById("cookie").style.height = Height + "px", 100);
		setTimeout(() => document.getElementById("cookie").style.paddingTop = PaddingTop + "px", 100);
		addCookie(1);
	},
	Unlimited: function() {
		// That's terrible! Cheat command that gives you unlimited cookies.
		cookie.Amount = Number.POSITIVE_INFINITY;
	}
}

// Clickety click! Listening for a click on the cookie. If clicked, it will launch the function "cookie.clicked()".
document.getElementById("cookie").onclick = cookie.clicked;

// How many cookies do I have, again? Showing cookie amount on h1 with id cookieAmount on index.html.
document.getElementById("cookieAmount").innerHTML = cookie.Amount;

// What's your name, cookie? Naming all the upgrades available.
nameUpgrade = (number) => {
	document.getElementById("upgrade1").innerHTML = upgrades.List[0].name;
}
for (let i = 0; i <= upgrades.List.length; i++) {
	nameUpgrade(i)
}