 // Responsive navbars for small screens sizes
 function myFunction() {
    var navbar = document.getElementById("navbar");
    if (navbar.classList.contains("open")) {
        navbar.classList.remove("open");
    } else {
        navbar.classList.add("open");
    }
}

// Get all navbar links
var navLinks = document.querySelectorAll('#navbar ul li a');

navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        // Remove 'active' class from all links
        navLinks.forEach(function(item) {
            item.classList.remove('active');
        });
        
        // Add 'active' class to the clicked link
        this.classList.add('active');
    });
});

// Function to close a modal
function closeModal(modal) {
    modal.style.display = "none"; // Hide the modal
}

// Toggle the dashboard content visibility
document.getElementById('dashBoardMenu').addEventListener('click', function() {
    var dashBoard = document.getElementById('dashBoard');
    var studentTable = document.getElementById('studentTable');
    var violationContent = document.getElementById('violationContent');
    var programContent = document.getElementById('programContent');
    var section_content = document.getElementById('sectionContent');
    var academic_Year_Content = document.getElementById('academicYearContent');
    
    // Hide other content
    studentTable.style.display = 'none';
    violationContent.style.display = 'none';
    programContent.style.display = 'none';
    section_content.style.display = 'none';
    academic_Year_Content.style.display = 'none';
    
    // Toggle visibility of dashboard content
    if (dashBoard.style.display === 'none' || !dashBoard.style.display) {
        dashBoard.style.display = 'grid';
    } else {
        dashBoard.style.display = 'none';
    }
});

// Function to toggle student content
document.getElementById('studentMenu').addEventListener('click', function() {
    var dashBoard = document.getElementById('dashBoard');
    var studentTable = document.getElementById('studentTable');
    var violationContent = document.getElementById('violationContent');
    var programContent = document.getElementById('programContent');
    var academic_year = document.getElementById('academicYearContent');
    var section_content = document.getElementById('sectionContent');

    // Hide other content
    dashBoard.style.display = 'none';
    violationContent.style.display = 'none';
    programContent.style.display = 'none';
    academic_year.style.display = 'none';
    section_content.style.display = 'none';
    
    // Toggle visibility of student content
    if (studentTable.style.display === 'none' || !studentTable.style.display) {
        studentTable.style.display = 'block';
    } else {
        studentTable.style.display = 'none';
    }
});

// Modal logic for Student section
const studentModal = document.getElementById("studentModal");
const NewBtn = document.getElementById("addNewBtn"); // Button to open the modal
const closeStudentModalSpan = studentModal.getElementsByClassName("form-close")[0]; // Close button for the modal

// Show Student modal when button is clicked
NewBtn.onclick = function() {
    studentModal.style.display = "block"; // Show Student modal
}

// Close the modal when close button is clicked
closeStudentModalSpan.onclick = function() {
    closeModal(studentModal); // Use the closeModal function
}

// Event listener for saving a student modal
document.getElementById("saveStudentModal").addEventListener('click', function() {
    const studentID = document.getElementById('studentID').value;
    const lastName = document.getElementById('lastName').value;
    const firstName = document.getElementById('firstName').value;
    const middleName = document.getElementById('middleName').value;
    const program = document.getElementById('program').value;
    const section = document.getElementById('section').value;
    const address = document.getElementById('addRess').value; // Fixed variable name
    const contactNum = document.getElementById('contactNum').value;

    // Ensure all fields are filled before saving
    if (studentID && lastName && firstName && middleName && program && section && address && contactNum) {
        const studentTableBody = document.querySelector('#studentTable tbody');
        const newRow = document.createElement('tr'); // Create a new row
        const rowCount = studentTableBody.rows.length + 1; // Get current row count

        // Populate the new row with data including action buttons
        newRow.innerHTML = `
            <td data-label="#">${rowCount}</td>
            <td data-label="Student ID">${studentID}</td>
            <td data-label="Last Name">${lastName}</td>
            <td data-label="First Name">${firstName}</td>
            <td data-label="Middle Name">${middleName}</td>
            <td data-label="Program">${program}</td>
            <td data-label="Section">${section}</td>
            <td data-label="Address">${address}</td>
            <td data-label="Contact Number">${contactNum}</td>
            <td data-label="">
                <div class="action-buttons">
                    <button class="btn btn-edit" onclick="editStudentRow(this)">Edit</button>
                    <button class="btn btn-delete" onclick="deleteStudentRow(this)">Delete</button>
                </div>
            </td>
        `;

        // Add the new row to the table
        studentTableBody.appendChild(newRow);

        // Hide the modal after saving
        closeModal(studentModal); // Use the closeModal function
    } else {
        alert('Please fill in all fields.');
    }
});

// Function to edit a student row
function editStudentRow(button) {
    const row = button.closest('tr');
    const studentID = row.cells[1].innerText;
    const lastName = row.cells[2].innerText;
    const firstName = row.cells[3].innerText;
    const middleName = row.cells[4].innerText;
    const program = row.cells[5].innerText;
    const section = row.cells[6].innerText;
    const address = row.cells[7].innerText;
    const contactNum = row.cells[8].innerText;

    document.getElementById('studentID').value = studentID;
    document.getElementById('lastName').value = lastName;
    document.getElementById('firstName').value = firstName;
    document.getElementById('middleName').value = middleName;
    document.getElementById('program').value = program;
    document.getElementById('section').value = section;
    document.getElementById('addRess').value = address;
    document.getElementById('contactNum').value = contactNum;

    // Remove the row for now, we will add it back after saving
    row.remove();
    studentModal.style.display = "block"; // Show modal for editing
}

// Function to delete a student row
function deleteStudentRow(button) {
    const row = button.closest('tr');
    row.remove(); // Remove the row from the table
}

// Function to toggle section content
document.getElementById('section_Content').addEventListener('click', function() {
    var dashBoard = document.getElementById('dashBoard');
    var studentTable = document.getElementById('studentTable');
    var violationContent = document.getElementById('violationContent');
    var programContent = document.getElementById('programContent');
    var academic_year = document.getElementById('academicYearContent');
    var section_content = document.getElementById('sectionContent');

    // Hide other content
    dashBoard.style.display = 'none';
    studentTable.style.display = 'none';
    programContent.style.display = 'none';
    academic_year.style.display = 'none';
    violationContent.style.display = 'none';
    
    // Toggle visibility of section content
    if (section_content.style.display === 'none' || !section_content.style.display) {
        section_content.style.display = 'block';
    } else {
        section_content.style.display = 'none';
    }
});

// Modal logic for Section modal
const sectionModal = document.getElementById("sectionModal");
const createNewBttn = document.getElementById("createNewBttn"); // Button to open the modal
const closeSectionSpan = sectionModal.getElementsByClassName("form-close")[0]; // Close button for the modal
const saveSectionBtn = document.getElementById("saveSectionBtn"); // Save button for the modal

// Show Section modal when button is clicked
createNewBttn.onclick = function() {
    sectionModal.style.display = "block"; // Show Section modal
}

// Close the modal when close button is clicked
closeSectionSpan.onclick = function() {
    closeModal(sectionModal); // Use the closeModal function
}

// Event listener for saving a section modal
saveSectionBtn.addEventListener('click', function() {
    const sectionID = document.getElementById('sectionID').value;
    const seCtion = document.getElementById('seCtion').value;
    const programCode = document.getElementById('programCode').value;

    // Ensure all fields are filled before saving
    if (sectionID && seCtion && programCode) {
        const sectionTableBody = document.querySelector('#sectionTable tbody');
        const newRow = document.createElement('tr'); // Create a new row
        const rowCount = sectionTableBody.rows.length + 1; // Get current row count

        // Populate the new row with data including action buttons
        newRow.innerHTML = `
            <td data-label="#">${rowCount}</td>
            <td data-label="Section ID">${sectionID}</td>
            <td data-label="Section">${seCtion}</td>
            <td data-label="Program Code">${programCode}</td>
            <td data-label="">
                <div class="action-buttons">
                    <button class="btn btn-edit" onclick="editSectionRow(this)">Edit</button>
                    <button class="btn btn-delete" onclick="deleteSectionRow(this)">Delete</button>
                </div>
            </td>
        `;

        // Add the new row to the table
        sectionTableBody.appendChild(newRow);

        // Hide the modal after saving
        closeModal(sectionModal); // Use the closeModal function
    } else {
        alert('Please fill in all fields.');
    }
});

// Function to edit a section row
function editSectionRow(button) {
    const row = button.closest('tr');
    const sectionID = row.cells[1].innerText;
    const section = row.cells[2].innerText;
    const programCode = row.cells[3].innerText;

    document.getElementById('sectionID').value = sectionID;
    document.getElementById('seCtion').value = section;
    document.getElementById('programCode').value = programCode;

    row.remove();
    sectionModal.style.display = "block"; // Show modal for editing
}

// Function to delete a section row
function deleteSectionRow(button) {
    const row = button.closest('tr');
    row.remove(); // Remove the row from the table
}

// Function to toggle violation content
document.getElementById('violationMenu').addEventListener('click', function() {
    var dashBoard = document.getElementById('dashBoard');
    var studentTable = document.getElementById('studentTable');
    var violationContent = document.getElementById('violationContent');
    var programContent = document.getElementById('programContent');
    var academic_year = document.getElementById('academicYearContent');
    var section_content = document.getElementById('sectionContent');

    // Hide other content
    dashBoard.style.display = 'none';
    studentTable.style.display = 'none';
    programContent.style.display = 'none';
    academic_year.style.display = 'none';
    section_content.style.display = 'none';

    // Toggle visibility of violation content
    if (violationContent.style.display === 'none' || !violationContent.style.display) {
        violationContent.style.display = 'block';
    } else {
        violationContent.style.display = 'none';
    }
});

// Function to toggle program content
document.getElementById('programMenu').addEventListener('click', function() {
    var dashBoard = document.getElementById('dashBoard');
    var studentTable = document.getElementById('studentTable');
    var violationContent = document.getElementById('violationContent');
    var programContent = document.getElementById('programContent');
    var academic_year = document.getElementById('academicYearContent');
    var section_content = document.getElementById('sectionContent');

    // Hide other content
    dashBoard.style.display = 'none';
    studentTable.style.display = 'none';
    academic_year.style.display = 'none';
    violationContent.style.display = 'none';
    section_content.style.display = 'none';
    
    // Toggle visibility of program content
    if (programContent.style.display === 'none' || !programContent.style.display) {
        programContent.style.display = 'block';
    } else {
        programContent.style.display = 'none';
    }
});

// Program modal logic
const programModal = document.getElementById("programModal");
const addNewProgramBtn = document.getElementById("addNew"); // Button to open the modal
const closeProgramSpan = programModal.getElementsByClassName("form-close")[0]; // Close button for the modal
const saveProgramBtn = document.getElementById("saveProgram"); // Save button for the modal

// Show Program modal when button is clicked
addNewProgramBtn.onclick = function() {
    programModal.style.display = "block"; // Show Program modal
}

// Close the modal when close button is clicked
closeProgramSpan.onclick = function() {
    closeModal(programModal); // Use the closeModal function
}

// Event listener for saving a program modal
saveProgramBtn.addEventListener('click', function() {
    const pcode = document.getElementById('pcode').value; // Get Program Code
    const description = document.getElementById('description').value; // Get Description
    const programType = document.getElementById('programType').value; // Get Type

    // Ensure all fields are filled before saving
    if (pcode && description && programType) {
        const programTableBody = document.querySelector('#programTable tbody');
        const newRow = document.createElement('tr'); // Create a new row
        const rowCount = programTableBody.rows.length + 1; // Get current row count

        // Populate the new row with data including action buttons
        newRow.innerHTML = `
            <td data-label="#">${rowCount}</td>
            <td data-label="Program Code">${pcode}</td>
            <td data-label="Description">${description}</td>
            <td data-label="Type">${programType}</td>
            <td data-label="">
                <div class="action-buttons">
                    <button class="btn btn-edit" onclick="editProgramRow(this)">Edit</button>
                    <button class="btn btn-delete" onclick="deleteProgramRow(this)">Delete</button>
                </div>
            </td>
        `;
        // Add the new row to the table
        programTableBody.appendChild(newRow);

        // Hide the modal after saving
        closeModal(programModal); 
    } else {
        alert('Please fill in all fields.'); // Alert if fields are not filled
    }
});

// Function to edit a program row
function editProgramRow(button) {
    const row = button.closest('tr');
    const pcode = row.cells[1].innerText;
    const description = row.cells[2].innerText;
    const programType = row.cells[3].innerText;

    document.getElementById('pcode').value = pcode;
    document.getElementById('description').value = description;
    document.getElementById('programType').value = programType;

    row.remove();
    programModal.style.display = "block"; // Show modal for editing
}

// Function to delete a program row
function deleteProgramRow(button) {
    const row = button.closest('tr');
    row.remove(); // Remove the row from the table
}

// Function to toggle academic_year content
document.getElementById('academic_Year_Content').addEventListener('click', function() {
    var dashBoard = document.getElementById('dashBoard');
    var studentTable = document.getElementById('studentTable');
    var violationContent = document.getElementById('violationContent');
    var programContent = document.getElementById('programContent');
    var academic_year = document.getElementById('academicYearContent');
    var section_content = document.getElementById('sectionContent');

    dashBoard.style.display = 'none';
    studentTable.style.display = 'none';
    violationContent.style.display = 'none';
    programContent.style.display = 'none';
    section_content.style.display = 'none';

    if (academic_year.style.display === 'none' || !academic_year.style.display) {
        academic_year.style.display = 'block';
    } else {
        academic_year.style.display = 'none';
    }
});

// Modal logic for Academic Year section
const academicYearModal = document.getElementById("academicYearModal");
const createNewAcademicYearBtn = document.getElementById("createNew"); // Button to open the modal
const closeAcademicYearSpan = academicYearModal.getElementsByClassName("form-close")[0]; // Close button for the modal
const saveAcademicYearBtn = document.getElementById("saveAcademicYear"); // Save button for the modal

// Show Academic Year modal when button is clicked
createNewAcademicYearBtn.onclick = function() {
    academicYearModal.style.display = "block"; // Show Academic Year modal
}

// Close the modal when close button is clicked
closeAcademicYearSpan.onclick = function() {
    closeModal(academicYearModal); // Use the closeModal function
}

// Event listener for saving a new Academic Year
saveAcademicYearBtn.addEventListener('click', function() {
    const ayCode = document.getElementById('ayCode').value; // Ensure this ID matches the input field
    const semester = document.getElementById('semester').value; // Ensure this ID matches the input field
    const status = document.getElementById('status').value; // Ensure this ID matches the input field

    // Ensure all fields are filled before saving
    if (ayCode && semester && status) {
        const academicYearTableBody = document.querySelector('#academicYearTable tbody');
        const newRow = document.createElement('tr');
        const rowCount = academicYearTableBody.rows.length + 1;

        newRow.innerHTML = `
            <td data-label="#">${rowCount}</td>
            <td data-label="AY Code">${ayCode}</td>
            <td data-label="Semester">${semester}</td>
            <td data-label="Status">${status}</td>
            <td data-label="Actions">
                <div class="action-buttons">
                    <button class="btn btn-edit" onclick="editAcademicRow(this)">Edit</button>
                    <button class="btn btn-delete" onclick="deleteAcademicRow(this)">Delete</button>
                </div>
            </td>
        `;
        academicYearTableBody.appendChild(newRow);
        closeModal(academicYearModal); // Hide the modal after saving
    } else {
        alert('Please fill in all fields.'); // Alert if fields are not filled
    }
});

// Function to edit an academic year row
function editAcademicRow(button) {
    const row = button.closest('tr');
    const ayCode = row.cells[1].innerText;
    const semester = row.cells[2].innerText;
    const status = row.cells[3].innerText;

    document.getElementById('ayCode').value = ayCode; // Ensure this ID matches the input field
    document.getElementById('semester').value = semester; // Ensure this ID matches the input field
    document.getElementById('status').value = status; // Ensure this ID matches the input field

    row.remove();
    academicYearModal.style.display = "block"; // Show modal for editing
}

// Function to delete an academic year row
function deleteAcademicRow(button) {
    const row = button.closest('tr');
    row.remove(); // Remove the row from the table
}

// Use the correct ID in the openModal function
function toggleModal() {
    const container = document.getElementById('violationFormContainer');
    if (container.style.display === 'none' || container.style.display === '') {
        container.style.display = 'block';
    } else {
        container.style.display = 'none';
    }
}

// Event listener for saving a violation
document.getElementById('submitViolation').addEventListener('click', function() {
    const studentNo = document.getElementById('studentNo').value;
    const name = document.getElementById('name').value;
    const section = document.getElementById('section').value;
    const sanction = document.getElementById('sanction').value;
    const type = document.getElementById('type').value;

    // Ensure all fields are filled before saving
    if (studentNo && name && section && sanction && type) {
        const violationTableBody = document.querySelector('#violationTable tbody');
        const newRow = document.createElement('tr'); // Create a new row
        const rowCount = violationTableBody.rows.length + 1; // Get current row count

        // Populate the new row with data
        newRow.innerHTML = `
            <td data-label="Student ID">${studentNo}</td>
            <td data-label="Full Name">${name}</td>
            <td data-label="Section">${section}</td>
            <td data-label="Sanction">${sanction}</td>
            <td data-label="Type">${type}</td>
            <td data-label="User">Admin</td>
            <td data-label="">
                <div class="action-buttons">
                    <button class="btn btn-edit" onclick="editViolationRow(this)">Edit</button>
                    <button class="btn btn-delete" onclick="deleteViolationRow(this)">Delete</button>
                </div>
            </td>
        `;

        // Add the new row to the table
        violationTableBody.appendChild(newRow);

        // Hide the form after saving
        toggleModal(); // Close the modal
    } else {
        alert('Please fill in all fields.');
    }
});

// Function to edit a violation row
function editViolationRow(button) {
    const row = button.closest('tr');
    const studentNo = row.cells[0].innerText;
    const name = row.cells[1].innerText;
    const section = row.cells[2].innerText;
    const sanction = row.cells[3].innerText;
    const type = row.cells[4].innerText;

    document.getElementById('studentNo').value = studentNo;
    document.getElementById('name').value = name;
    document.getElementById('section').value = section;
    document.getElementById('sanction').value = sanction;
    document.getElementById('type').value = type;

    row.remove();
    toggleModal(); // Show modal for editing
}

// Function to delete a violation row
function deleteViolationRow(button) {
    const row = button.closest('tr');
    row.remove(); // Remove the row from the table
}