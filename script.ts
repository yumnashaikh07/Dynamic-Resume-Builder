const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeOutput= document.getElementById('resume-output') as HTMLDivElement;
// const formContainer1 = document.querySelector('.form-container') as HTMLDivElement;
const resumeContainer = document.querySelector('.resume-container') as HTMLDivElement; // Added reference to the resume container

resumeContainer.style.display = 'none';

const handleFormSubmit = (event: Event) => {
    event.preventDefault(); 

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const title = (document.getElementById('title') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLInputElement).value;
    const company = (document.getElementById('company') as HTMLInputElement).value;
    const position = (document.getElementById('position') as HTMLInputElement).value;
    const degree = (document.getElementById('degree') as HTMLInputElement).value;
    const school = (document.getElementById('school') as HTMLInputElement).value;
    const graduationYear = (document.getElementById('graduation-year') as HTMLInputElement).value;


    if (!name ||!title|| !email ||!phone||!degree ||!school||! graduationYear|| !skills ||!experience ||!company||!position) {
        alert("Please fill in all fields.");
        return;
    }

    const resumeContent = `
     <br/>
    <div class="div">
        <h2>Personal Information</h2>   
    </div>
        <h2><strong>. Name:</strong></h2>
        <p>${name}</p>
        <h3><strong>. Title:</strong></h3>
        <p>${title}</p>
        <h3><strong>. Email:</strong></h3> 
        <p>${email}</p>
        <h3><strong>Phone:</strong></h3> 
        <p>${phone}</p>
    <br/>
    <div class="div">
        <h2>Education</h2>
    </div>
        <h3><strong>. Degree:</strong> </h3>
        <p>${degree}</p>
        <h3><strong>. School/University:</strong> </h3>
        <p> ${school}</p>
        <h3><strong>. Graduation Year:</strong></h3> 
        <p> ${graduationYear}</p>
    <br/>
    <div class="div">
        <h2>Skills</h2>
        </div>
        <ul>
            ${skills.split(',').map(skill => `<li>${skill.trim()}</li>`).join('')}
        </ul>

        <br>
<div class="div">
        <h2>Experience</h2>
</div>
        <h3><strong>. Company:</strong> </h3> 
        <p> ${company}</p>
        <h3><strong>. Postion:</strong> </h3> 
        <p> ${position}</p>
        <h3><strong>. Year:</strong></h3>
        <p>${experience} years of experience.</p>
        `;

    resumeOutput.innerHTML = resumeContent;

    // HIDES FORM SHOW RESUME
    // formContainer1.style.display = 'none';
    resumeContainer.style.display = 'block'; 
};

form.addEventListener('submit', handleFormSubmit);




