//1.call,apply,bind,IIFE,closure
//2.Spread,rest operator, optional chaining (all use cases in spread rest)


 document.getElementById("fil").onchange = operation
function operation(){
    const ope = document.getElementById("fil").value
    return ope
    //console.log(oper)
 }
function operation(ope){
    const oper=ope.target.value
    console.log(oper)
    switch (oper){
        case 'Apply':
            let apply1=document.getElementById('content')
            apply1.innerText=""
            let content1=document.createTextNode("Apply() method is similar to call()."+"\n"+"The difference is that the apply() method accepts an array of arguments instead of comma separated values."+"\n"+"Syntax:function.apply(thisArg, [argumentsArr])")
            apply1.appendChild(content1)
            break
        case 'Bind':
            let apply2=document.getElementById('content')
            apply2.innerText=""
            let content2=document.createTextNode("Bind() method creates a new function and sets the this keyword to the specified object."+"\n"+"Syntax:function.bind(thisArg, optionalArguments)")
            apply2.appendChild(content2)
            break
        case 'Call':
            let apply3=document.getElementById('content')
            apply3.innerText=""
            let content3=document.createTextNode("Call() method sets the this inside the function and immediately executes that function."+"\n"+"Syntax:function.call(thisArg, arg1, agr2, ...)")
            apply3.appendChild(content3)
            break
        case 'Closure':
            let apply4=document.getElementById('content')
            apply4.innerText=""
            let content4=document.createTextNode("Closures are created every time a function is created, at function creation time."+"\n"+"Closure gives access to an outer function’s scope from an inner function. ")
            apply4.appendChild(content4)
            break
        case 'IIfe':
            let apply5=document.getElementById('content')
            apply5.innerText=""
            let content5=document.createTextNode("Immediately Invoked Function Expression function runs as soon as it is defined. "+"\n"+"Syntax: (function(){statements})(); Two parts:")
            let content9=document.createTextNode("The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope.")
            let content10=document.createTextNode("The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.")
            apply5.appendChild(content5)
            apply5.appendChild(content9)
            apply5.appendChild(content10)
            break
        case 'OptionalChain':
            let apply6=document.getElementById('content')
            apply6.innerText=""
            let content6=document.createTextNode(" optional chaining operator (?.) enables you to read the value of a property located deep within a chain of connected objects without having to check that each reference in the chain is valid.")
            let content11=document.createTextNode("Syntax: nestedProp = obj.first?.second?.third;")
            apply6.appendChild(content6)
            apply6.appendChild(content11)
            break
        case 'REST':
            let apply7=document.getElementById('content')
            apply7.innerText=""
            let content7=document.createTextNode("REST (...x) parameter represent an indefinite number of arguments as an array. syntax: function fn(a,b,...args) {}")
            apply7.appendChild(content7)
            break
        case 'Spread':
            let apply8=document.getElementById('content')
            apply8.innerText=""
            let content8=document.createTextNode("Spread operator (...) is iterable where array expression or string can expanded in places for 0 or more arguments in an object")
            apply8.appendChild(content8)
            break
    }
}