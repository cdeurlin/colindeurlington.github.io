const pages = {

home: `
<h1>Welcome</h1>

<p>Hello!</p>

<h1>About Me</h1>

<h3>Fields</h3>
<p>Political Economy • Experimental Economics • Game Theory</p>

<h3>Research Interests</h3>
<p>Trade • Economic Forecasting • Cyber Security • Network Analysis</p>

<h3>Bio</h3>
<p>...</p>
`
,

research:`

<h1>Research</h1>

<h2>Dissertation</h2>

<div class="columns">
    <div class="column">
        <h2>Column 1</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            tincidunt, mauris at posuere vulputate, nisl nunc aliquet tortor,
            sed vestibulum purus lectus sed est.
        </p>
    </div>

    <div class="column">
        <h2>Column 2</h2>
        <p>
            Curabitur vitae magna sed erat convallis faucibus. Donec sit amet
            lorem non nunc efficitur fermentum. Suspendisse potenti. Nulla
            facilisi.
        </p>
    </div>

    <div class="column">
        <h2>Column 3</h2>
        <p>
            Phasellus commodo sapien vitae turpis vulputate, sed consequat
            ligula malesuada. Aenean hendrerit, ipsum non dictum luctus, velit
            urna consequat risus, vel pulvinar nibh orci eget urna.
        </p>
    </div>
</div>

<br>

<h2>Other Papers</h2>

<p>Title of Paper</p>

`,

teaching:`

<h1>Teaching</h1>

<h3>Courses</h3>
<ul>
<li>ECON 13 - Global Economy (Spring 2021, Spring 2022, Winter 2023)</li>
<li>ECON 17 -- Economics of Religion (Fall 2020, Winter 2022, Fall 2022)</li>
<li>ECON 107 - Economics of Asymmetric Information (Spring 2024)</li>
<li>ECON 115 - Behavioral Economics (Spring 2023)</li>
<li>ECON 122A - Applied Econometrics I (Fall 2021, Fall 2023, Winter 2024)</li>
<li>ECON 142A -- Industrial Organization (Winter 2021)</li>
<li>ECON 167 -- International Trade & Commercial Policy (Summer II 2021)</li>
</ul>

<br>

<h3>Testimonials</h3>
<ul>
<li>"He reviewed the material of lecture in a format that was clear and easy to
comprehend and sometimes added further information/examples so we could
understand concepts better. He took the time to help us throughout the quarter
with our projects and provide us feedback every step of the way."</li>
<li>"style"</li>
<li>"The TA is willing to listen to the students' request about what we want to review for
the final which I find is something that other TAs did not really do. He is really
patient when it comes to explaining the concepts and he will make sure his
students understand what he is doing step by step which really helps me to
understand what is going on. He is willing to use really clear explanations to help
us gasps the idea of what the regression interpretation should be like. I really like
his discussion styles because he is able to review the concepts with students by
talking about it one more time given that when students are listening to the lecture
the first time, it can be really hard to understand what is going on. He is really
thoughtful as a TA and on time on office hour which I really appreciate."</li>
<li>"I really liked how the ta used other practice problems other than the ones that
were presented in the lecture videos. The ta was also able to communicate clearly
and gave good explanations to any questions we have via email or through the
discussion videos. And sometimes he would include those questions into the
discussion videos which helped explain the concepts more."</li>
<li>"Colin did a great job of going more in-depth to what the professor was teaching and
made sure to go over important topics again. He did an amazing job breaking down
concepts and his notes during the discussion were very easy to follow along with."</li>
<li>"The logic of the TA is very clear and easy to understand, and the weekly discussion
section is well prepared."</li>
<li>"He made his expectations clear for the homework and project, communicated the
professor's expectations clearly, and was always willing to help. He's very
understanding and a nice person as well!"</li>
<li>"Colin provided slides on the material taught in lecture that he reinforces in every
discussion section. Personally, I feel he hit every point that was taught in lecture by
Professor Sarraf. He even goes as far as to provide visual aids in the form of
drawings on the white board in the class room. This allowed us to visually see the
point he is trying to get across and if anyone does not understand the drawing they
can ask quesitons."</li>
<li>"There is not much he can improve on in my opinion. He is very well spoken and
knows what he is talking about. He prints out a few sheet of paper for him to look
at which I assume is his personal notes so that when he is providing the visual aids
he does not forget to mention anything. He also hears everybody's thoughts out and
admits when he does not know the answer, but says he will look into it and get
back to us, which he does."</li>
<li>"He made the lecture material in his discussion very easily understandable and
summarized. I think his powerpoints were very concise yet detailed to include
main points from each chapter, and his explanations and examples in class were
extremely helpful to understand in more simple terms. Colin was a great TA, very
approachable, and honestly made this class one of my favorites because I felt
confident in the course material after going to his weekly discussions. I also liked
how he made a separate Canvas space for his discussion sections to keep things
organized in one space from the main Canvas course space. Keep it up and thank
you so much Colin!"</li>
</ul>

`,

contact:`

<h1>Contact</h1>

<p>
If you'd like to discuss research, collaboration, or have a question,
please send me a message below.
</p>

<form id="contactForm">

    <label>Name</label>
    <br>
    <input
        type="text"
        name="name"
        cols="12"
        placeholder="Your name"
        required>

    <br>
    <label>Email</label>
    <br>
    <input
        type="email"
        name="email"
        cols="12"
        placeholder="you@example.com"
        required>
        
    <br>
    <label>Subject</label>
    <br>
    <input
        type="subject"
        name="subject"
        cols="12"
        placeholder="Write your subject..."
        required>

    <br>
    <label>Message</label>
    <br>
    <textarea
        name="message"
        rows="8"
        cols="24"
        placeholder="Write your message..."
        required></textarea>

    <br>
    <button type="submit">
        Send Message
    </button>

</form>

<div id="successMessage"></div>

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

document
.getElementById("contactForm")
.addEventListener("submit", async function(e){

    e.preventDefault();

    const response = await fetch(
        "https://formspree.io/f/YOUR_FORM_ID",
        {
            method:"POST",
            body:new FormData(this),
            headers:{
                Accept:"application/json"
            }
        }
    );

    if(response.ok){

        document.getElementById("successMessage").innerHTML =
            "<p>Thank you! Your message has been sent.</p>";

        this.reset();

    }

});
