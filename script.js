const pages = {

home: `
<h1>Welcome</h1>

<p>
Hello, thanks for dropping by my website!
I received my Economics PhD from the University of California, Irvine in 2024, with concentrations in Political Economy, Experimental Economics, and Game Theory. 
Since graduating, I have been working as an economist for the US Government. 
My primary research interests are in cyber security, international trade, experimental design, and network analysis.
</p>

`
,

work:`

<h1>Work Experience</h1>

<p>Lots of great work done by dis guy!</p>

`,

research:`

<a href="https://escholarship.org/uc/item/4c3845t1#main"><h2 style="text-align:center">Dissertation</h2></a>

<div class="row">
    <div class="column">
        <h3 style="text-align:center">Defense and Connectivity of Weakest-Link Networks</h2>
        <p>
            I study a model of weakest-link network defense. In this model, the defender
            determines the internal accessibility of a valuable asset and allocates defensive resources
            prior to an attacker’s decision to attack. In equilibrium, one of two resource allocations can
            arise: (1) both the defender and attacker allocate a strictly positive level of resources, or
            (2) the defender allocates a sucient level of resources to deter attacks. As the defender’s
            cost-adjusted valuation of an asset increases relative to the attacker, the defender is more
            willing to increase the internal accessibility of the asset, irrespective of the marginal benefit
            from increased accessibility. This model provides theoretical foundations for data breach
            and other cybersecurity settings.
        </p>
    </div>

    <div class="column">
        <h3 style="text-align:center">An Experimental Study of Conjectural Equilibrium: Limited Feedback in a Threshold Public Good Game</h2>
        <a href="https://osf.io/pbk6w/overview" style="text-align:center">Pre-registration, experiment software, and data analysis</a>
        <p>
            We provide an experimental test of the Conjectural Equilibrium concept in a
            threshold public good game with limited feedback. Consistent with our predictions,
            strategy profiles that are Conjectural Equilibria but not Nash Equilibria are more
            likely as feedback decreases, and subjects are more likely to hold incorrect beliefs
            as feedback decreases. However, risk aversion interacts with the feedback treatment,
            belief convergence occurs at different rates across treatments, and subjects intentionally
            choose not to maximize payoffs, thus complicating the use of Conjectural Equilibrium
            as a predictive concept. Overall, our findings support a measured approach to using
            the Conjectural Equilibrium concept to obtain predictions in limited-feedback settings.
        </p>
    </div>

    <div class="column">
        <h3 style="text-align:center">Cybersecurity measures and incident frequency: Evidence from the UK</h2>
        <p>
            In this article, I empirically examine the relationship between organizations’ cybersecurity measures 
            and their experienced level of incident frequency. Cybersecurity is an increasingly relevant
            concern for governments, businesses, and individuals. However, despite both rising investment
            in cybersecurity and frequency of cyber incidents, little research has been done to assess this
            relationship. Using fixed-effects regressions over multiple thresholds of incident frequency,
            this paper identifies staff cybersecurity training, data storage rules, and restrictions on
            personal devices used for work as measures associated with reduced incident frequency.
            Furthermore, this paper provides a foundational assessment of how cybersecurity measures
            are associated differently with phishing versus non-phishing incidents, providing a first step
            in understanding the usefulness of measures in preventing incidents of different severities.
        </p>
    </div>
</div>

<br>

<h2 style="text-align:center">Other Working Papers</h2>

<p>C. Deurlington, E. Fisher, “Dynamic Level-k Thinking in the El Farol Bar Problem”</p>
<a href="https://cdeurlington.shinyapps.io/El_Farol_Trial/">Supporting application<a>

`,

teaching:`

<h3 style="text-align:center">TA Courses</h3>

<br>

<p><b>Global Economy</b> | UC Irvine ECON 13 | Spring 2021, Spring 2022, Winter 2023</p>
<p><b>Economics of Religion</b> | UC Irvine ECON 17 | Fall 2020, Winter 2022, Fall 2022</p>
<p><b>Economics of Asymmetric Information</b> | UC Irvine ECON 107 | Spring 2024</p>
<p><b>Behavioral Economics</b> | UC Irvine ECON 115 | Spring 2023</p>
<p><b>Applied Econometrics I</b> | UC Irvine ECON 122A | Fall 2021, Fall 2023, Winter 2024</p>
<p><b>Industrial Organization</b> | UC Irvine ECON 142A | Winter 2021</p>
<p><b>International Trade & Commercial Policy</b> | UC Irvine ECON 167 | Summer II 2021</p>

<br>

<h3 style="text-align:center">Select Testimonials</h3>
<ul>
<li>"I wish he had more time available. Colin was one of the best TA's I ever had"</li>
<li>"Colin was very good at explaining difficult concepts so that they were
understandable. He would take his time. He was also open to constructive criticism
and ideas for the discussion section."</li>
<li>"He made the lecture material in his discussion very easily understandable and
summarized. I think his powerpoints were very concise yet detailed to include
main points from each chapter, and his explanations and examples in class were
extremely helpful to understand in more simple terms. Colin was a great TA, very
approachable, and honestly made this class one of my favorites because I felt
confident in the course material after going to his weekly discussions. I also liked
how he made a separate Canvas space for his discussion sections to keep things
organized in one space from the main Canvas course space. Keep it up and thank
you so much Colin!"</li>
<li>"There is not much he can improve on in my opinion. He is very well spoken and
knows what he is talking about. He prints out a few sheet of paper for him to look
at which I assume is his personal notes so that when he is providing the visual aids
he does not forget to mention anything. He also hears everybody's thoughts out and
admits when he does not know the answer, but says he will look into it and get
back to us, which he does."</li>
<li>-----</li>
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
<li>"One of the best TAs I've had. Even though the material covered was not new to me,
I appreciated Colin's ability to slow down and take an in-depth approach to each
chapter."</li>
<li>"Colin explains material well which helps us know how to do the homework.
Besides his discussion section, he is very responsive to students' emails and once
made feedback about my answer to a question on the homework. His emails
answering to my questions are well-written with very detailed explanation. Colin
even answered to my question on the weekend. Huge respect to his hard work and
patience!"</li>
<li>"The TA had strong methods of showcasing course material visually and preparing
concise notes that successfully contributed to the understanding of students. The
TA was well prepared for student questions and encouraged them especially before
an exam. The TA was very accessible throughout the course as they were able to
offer additional resources or office hours when needed."</li>
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
