// Function to add a new work experience entry
function addWorkExperience() {
    const entry = document.createElement('div');
    entry.classList.add('work-experience-entry');
  
    const companyLabel = document.createElement('label');
    companyLabel.textContent = 'Company:';
    const companyInput = document.createElement('input');
    companyInput.type = 'text';
    companyInput.name = 'company[]';
    companyInput.required = true;
  
    const positionLabel = document.createElement('label');
    positionLabel.textContent = 'Position:';
    const positionInput = document.createElement('input');
    positionInput.type = 'text';
    positionInput.name = 'position[]';
    positionInput.required = true;
  
    const durationLabel = document.createElement('label');
    durationLabel.textContent = 'Duration:';
    const durationInput = document.createElement('input');
    durationInput.type = 'text';
    durationInput.name = 'duration[]';
    durationInput.required = true;
  
    entry.appendChild(companyLabel);
    entry.appendChild(companyInput);
    entry.appendChild(positionLabel);
    entry.appendChild(positionInput);
    entry.appendChild(durationLabel);
    entry.appendChild(durationInput);
  
    const workExperienceEntries = document.getElementById('work-experience-entries');
    workExperienceEntries.appendChild(entry);
  }
  
  // Function to add a new education entry (similar to addWorkExperience)
  function addEducation() {
    const entry = document.createElement('div');
  entry.classList.add('education-entry');

  const institutionLabel = document.createElement('label');
  institutionLabel.textContent = 'Institution:';
  const institutionInput = document.createElement('input');
  institutionInput.type = 'text';
  institutionInput.name = 'institution[]';
  institutionInput.required = true;

  const degreeLabel = document.createElement('label');
  degreeLabel.textContent = 'Degree:';
  const degreeInput = document.createElement('input');
  degreeInput.type = 'text';
  degreeInput.name = 'degree[]';
  degreeInput.required = true;

  const durationLabel = document.createElement('label');
  durationLabel.textContent = 'Duration:';
  const durationInput = document.createElement('input');
  durationInput.type = 'text';
  durationInput.name = 'duration[]';
  durationInput.required = true;

  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.addEventListener('click', function() {
    entry.parentNode.removeChild(entry);
  });

  entry.appendChild(institutionLabel);
  entry.appendChild(institutionInput);
  entry.appendChild(degreeLabel);
  entry.appendChild(degreeInput);
  entry.appendChild(durationLabel);
  entry.appendChild(durationInput);
  entry.appendChild(removeButton);

  const educationEntries = document.getElementById('education-entries');
  educationEntries.appendChild(entry);
}
  // Function to generate the resume (placeholder for actual generation logic)
  function generateResume() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const skills = document.getElementById('skills').value;
    const template = document.getElementById('template').value;}