// OBJECT - {key: value, keys: values}
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 45,
    isMarried: true,
    friends: ["Jane", "Peter", "Mark"],
    job: "Teacher",
    location: {
        street: "Vineyard",
        area: "Lekki",
        city: "Lagos",
        zip: "100111",
        geoLocation: {
            lat: 23.46,
            lng: 45.78,
        },
    },
};

// getting properties form an object
// dot notation[objName.propertiesName] and bracket notation objname['propertiesName']
console.log(person.age);
console.log(person.lastName.toUpperCase);
console.log(person.firstName);


// I live at vineyard estate, Lekki Lagos
console.log(`i live at ${person.location.street} estate, ${person["location"]["area"]}` 
);
// adding a new properties to an object
// workplace
person.workplace = "Appolo Schools"
console.log(person);
person.location.landmark = "city mall"
console.log(person);

// rremoving properties from an object
delete person.job

const user = {
    username: 'ade001',
    email:'ade@google.com',
    profilePic:"image",
    age:25,
    isLoggedIn: false,
    isVerified: true,
    posts: ["Nigeria just get as e be", "i love food"],
    welcomeUser: function () {
        return this.isLoggedIn ? `Welcome ${this.username}` : "Log in to Continue";
    },
    verifyUser:function() {
        return this.isVerified ? `Verification successful` : "verify your account to continue"
    }
}
// object methods - developer writes the function
// function declaration (this - refers to the object itself)
// write a function that tells user welcome username or log in to continue
// write an object method VerifyUser
// if user is verified return Verification successful else verify your account to continue

console.log(user.welcomeUser());
console.log(user.verifyUser());

// declare an object called book is going to have 
// title properties Alex Raiders  
// author properties 
// year published
// rating
// similar authors 
// f

const book = {
    title  : "Alex Raider",
    author : "Alex morgan",
    year : 2019,
    rating : 2,
    similarAuthors : ["jake paul", "dexter morgan"],
    price : 220,
    genre : "sci-fi",
    describitionbook : function () {
        return `The book ${this.title} cost $${this.price} and it is a ${this.genre} novel`;
    },
    recommendBook : function () {
        return this.rating > 3.5 ? `This book is recommended `: "Not recommended"
    }
};
console.log(book.describitionbook());
console.log(book.recommendBook());

// object.keys, object.values, object.entries

const transaction = {
    amount: 4000,
    date: "16/03/2025",
    charges: 25,
    refNum: "tranx-125773456708"
};
console.log(Object.keys(transaction));
console.log(Object.values(transaction));
console.log(Object.entries(transaction));

const match = {
    teamA : 'Wolfsburg',
    teamB : 'Lecce',
    teamAScore : 3,
    teamBScore : 2,
    duration: 96,
    corners : 12,
    numOfSubsUsed: 7,
    fouls: 14,
    stadium: "Wembley",
    weather:"Snowy",
    getMatchOutcome: function () {
        if (this.teamAScore > this.teamBScore)
            return `${this.teamA} won with a score of ${this.teamAScore}`;
         else if (this.teamBScore > this.teamAScore) 
            return `${this.teamB} won with a ${this.teamBScore}`;
         else {
            return "it is Draw";
        }
    },
    overviewOfMatch: function() {
        return `the match between ${this.teamA} and ${this.teamB} was played at ${this.stadium}in a ${this.weather} condition`
    }
}
console.log(match.getMatchOutcome());
console.log(match.overviewOfMatch());

const { teamA, fouls, stadium, corners} = match
console.log(fouls, stadium, corners);



const property = {
    name: "Exquisite Villa",
    rent: "2.3M/year",
    bedroom: 7,
    bathroom: 10,
    cautionFee:5000,
    legalFee:4000,
    facilities:["pool", "sauna", "theatre", "gym",],
    location: {
        area: "Gbagada",
        city: "Lagos",
        num:45,
        street: "charly Boy"
    }
}

const {
    name, rent, location: { street, city, geo:{lng} }
} = property;
 const {price, discount} = CSSMathProduct;
 let newPrice = price - (discount / 100) * price
 console.log(newPrice.toFixed(2));
 