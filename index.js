// 1. Using the constructor method, create an InstagramPost() constructor function that takes the properties below as arguments.*
function InstagramPost(author, content, imageLink, numViews, numLikes){
    this.author = author;
    this.content = content;
    this.imageLink = imageLink;
    this.numViews = numViews;
    this.numLikes = numLikes;
}


// 2. Create 2 Instagram post objects from the constructor function you created 
const post1 = new InstagramPost("mally13", "Good morning!", "https://myimage-1348347.com", 400, 60);
const post2 = new InstagramPost("mally13", "Hi guys, check this out!", "https://myimage-1348349.com", 4000, 600);
console.log(post1);
console.log(post2);


/*3. Musa Dawodu is a 19 years old Nigerian male ...
*a. implement a createPerson() factory function 
*/
function createPerson(name, age, location){
    return{
        name,
        age,
        location
    }
}

const Musa = createPerson("Musa Dawodu", 19, "Lekki, Lagos State");
console.log(Musa);

//b. implement a factory function createJambScores() 
function createJambScores(eng, govt, lit, crk){
    return{
            ENG: eng,
            GOVT: govt,
            LIT: lit,
            CRK: crk
    }
}
const scores1 = createJambScores(70, 85, 82, 94);
console.log(scores1);

Musa.scores = scores1;
console.log(Musa);

//4. What are the different ways you can clone an object? Give examples for each of them.
// using for in loop
const anotherMusa = {};

for (let key in Musa){
    anotherMusa[key] = Musa[key];
}
console.log("This is another Musa");
console.log(anotherMusa);

// using Object.assign
const anotherMusa2 = Object.assign({}, Musa);

console.log("This is another Musa 2");
console.log(anotherMusa2);

//using the spread operator
const anotherMusa3 = {...Musa};

console.log("This ia another Musa 3");
console.log(anotherMusa3);

//5. As Nigeria goes to the polls, here is an object representing ...
const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
}

for (let i in presidentialCandidates){
    console.log(`${presidentialCandidates[i]} is the presidential candidate of ${i}\n`);
}