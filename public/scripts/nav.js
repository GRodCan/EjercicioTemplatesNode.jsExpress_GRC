const generateNav=async ()=> {
    let dom=`<nav>
<ul>
  <li><a href="/">Home</a></li>
  <li><a href="/who">Who</a></li>
  <li><a href="/where">Where</a></li>
  <li><a href="/work">Work</a></li>
  <li><a href="/contact">Contact</a></li>
  <li><a href="/others">Others</a></li>
</ul>
</nav>
`
document.getElementById("root").innerHTML+= dom

console.log(await document.getElementById("root"));}

generateNav()