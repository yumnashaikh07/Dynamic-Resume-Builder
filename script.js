var form = document.getElementById('resume-form');
var resumeOutput = document.getElementById('resume-output');
// const formContainer1 = document.querySelector('.form-container') as HTMLDivElement;
var resumeContainer = document.querySelector('.resume-container'); // Added reference to the resume container
resumeContainer.style.display = 'none';
var handleFormSubmit = function (event) {
    event.preventDefault(); // Prevent form submission
    var name = document.getElementById('name').value;
    var title = document.getElementById('title').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var skills = document.getElementById('skills').value;
    var experience = document.getElementById('experience').value;
    var company = document.getElementById('company').value;
    var position = document.getElementById('position').value;
    var degree = document.getElementById('degree').value;
    var school = document.getElementById('school').value;
    var graduationYear = document.getElementById('graduation-year').value;
    if (!name || !title || !email || !phone || !degree || !school || !graduationYear || !skills || !experience || !company || !position) {
        alert("Please fill in all fields.");
        return;
    }
    var resumeContent = "\n     <br/>\n    <div class=\"div\">\n        <h2>Personal Information</h2>   \n    </div>\n        <h2><strong>. Name:</strong></h2>\n        <p>".concat(name, "</p>\n        <h3><strong>. Title:</strong></h3>\n        <p>").concat(title, "</p>\n        <h3><strong>. Email:</strong></h3> \n        <p>").concat(email, "</p>\n        <h3><strong>Phone:</strong></h3> \n        <p>").concat(phone, "</p>\n    <br/>\n    <div class=\"div\">\n        <h2>Education</h2>\n    </div>\n        <h3><strong>. Degree:</strong> </h3>\n        <p>").concat(degree, "</p>\n        <h3><strong>. School/University:</strong> </h3>\n        <p> ").concat(school, "</p>\n        <h3><strong>. Graduation Year:</strong></h3> \n        <p> ").concat(graduationYear, "</p>\n    <br/>\n    <div class=\"div\">\n        <h2>Skills</h2>\n        </div>\n        <ul>\n            ").concat(skills.split(',').map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(''), "\n        </ul>\n\n        <br>\n<div class=\"div\">\n        <h2>Experience</h2>\n</div>\n        <h3><strong>. Company:</strong> </h3> \n        <p> ").concat(company, "</p>\n        <h3><strong>. Postion:</strong> </h3> \n        <p> ").concat(position, "</p>\n        <h3><strong>. Year:</strong></h3>\n        <p>").concat(experience, " years of experience.</p>\n        ");
    resumeOutput.innerHTML = resumeContent;
    // HIDES FORM SHOW RESUME
    // formContainer1.style.display = 'none';
    resumeContainer.style.display = 'block';
};
form.addEventListener('submit', handleFormSubmit);
// const photoInput = document.getElementById("photo") as HTMLInputElement
// const photofile = photoInput.files? photoInput.files[0]:null;
// let photoBase64 = '';
// if(photofile){
//     photoBase64 = await filetoBase64(photofile);
//     localStorage.setItem ("resumephoto" , photoBase64)
//     resumephoto.src = photoBase64
// }
// function filetoBase64(file:File) : Promise<string>{
//     return new Promise ((resolve , reject ) => {
//         const reader= new FileReader ();
//         reader.onloadend=()=> resolve(
//             reader.result as string
//         )
//         reader.onerror = reject
//         reader.readAsDataURL(file);
//     });
//     const savephoto = localStorage.getItem('resumephoto')
//     if(savephoto){
//         resumephoto.src = savephoto;
//     }}
