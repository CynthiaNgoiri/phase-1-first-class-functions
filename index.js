function receivesAFunction(cynthia){
    cynthia();

}

function returnsANamedFunction(){
    var func1 =function() {};
    return func1;
}

 function returnsAnAnonymousFunction(){
    return function(){}
 }