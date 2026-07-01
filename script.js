const pages = {

home: `
<h1>Welcome</h1>

<p>Hello!</p>

<h1>About Me</h1>

<h3>Research Interests</h3>
<p>Political Economy • Experimental Economics • Game Theory • Network Analysis</p>

<h3>Bio</h3>
<p>...</p>
`
,

research:`

<h1>Research</h1>

<h2>Working Papers</h2>

<p>

Title of Paper One

</p>

<p>

Title of Paper Two

</p>

<h2>Publications</h2>

<p>

Journal Article One

</p>

`,

teaching:`

<h1>Teaching</h1>

<h2>Current Courses</h2>

<p>

ECON 101

</p>

<p>

Graduate Econometrics

</p>

<h2>Previous Courses</h2>

<p>

Development Economics

</p>

`,

contact:`

<h1>Contact</h1>

<p>

Department of Economics

</p>

<p>

University Name

</p>

<p>

email@university.edu

</p>

`

};

const content = document.getElementById("content");

content.innerHTML = pages.home;

document.querySelectorAll(".nav-btn").forEach(button=>{

button.addEventListener("click",()=>{

document.querySelectorAll(".nav-btn").forEach(b=>b.classList.remove("active"));

button.classList.add("active");

content.innerHTML=pages[button.dataset.page];

});

});
