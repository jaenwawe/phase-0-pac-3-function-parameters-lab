{
function introduction(name){
    return (`Hi, my name is ${name}.`);
}


function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
} 


say("Julio", "hello");
say("hello","Julio"); 



function add(x, y) {
    return x + y;
  } 

  console.log(add(1,2)); 
}

function  introductionWithLanguage(name, language){
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`);

}

function introductionWithLanguageOptional(name, language="JavaScript"){
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`);
}