const name="mathan";
const age=24;
const job='web Developer';
const city= 'Jaffna';


let html;

//Without template strings (ES5)
html='<ul><li>Name : '+name+'</li><li>Age :'+age+'</li><li>Job: '+job+' </li><li> city: '+city+'</li></ul>';
//document.body.innerHTML=html;

//Another Way
//Formated Way
html='<ul>'+
'<li>Name'+name+'</li>'+
'<li>age'+age+'</li>'+
'<li>job'+job+'</li>'+
'<li>City'+city+'</li>'+
'</ul>';

//with template sytring ES6
//use exclamation mark ``
html1 = `
<ul>
<li>Name: ${name}</li>
<li>Age: ${age}</li>
<li>Job:${job}</li>
<li>City:${city}</li>
<li>add : ${2+2}</li>
<li>String : ${'hello'}</li>
<li>turn over : ${age > 30 ?'Over 30' :'under 30'}</li>
</ul>
`;
//the following method is only valid for ES6 method
document.body.innerHTML=(html1);


