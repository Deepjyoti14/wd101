
// Retrieve entries from localStorage
const retrieveEntries = () => {
    let entries = localStorage.getItem("user-Entries");
    if (entries) {
        entries = JSON.parse(entries);
    } else {
        entries = [];
    }
    return entries;
};

// Display entries in a table format
const displayEntries = () => {
    const entries = retrieveEntries();
    const tableEntries = entries.map((entry) => {
        const nameCell = `<td class='border px-4 py-2'>${entry.name}</td>`;
        const emailCell = `<td class='border px-4 py-2'>${entry.email}</td>`;
        const passwordCell = `<td class='border px-4 py-2'>${entry.password}</td>`;
        const dobCell = `<td class='border px-4 py-2'>${entry.dob}</td>`;
        const acceptTermsCell = `<td class='border px-4 py-2'>${entry.acceptTerms}</td>`;

        return `<tr>${nameCell} ${emailCell} ${passwordCell} ${dobCell} ${acceptTermsCell}</tr>`;
    }).join("\n");

    const table = `<table class="table-auto w-full">
        <tr>
            <th class="px-4 py-2">Name</th>
            <th class="px-4 py-2">Email</th>
            <th class="px-4 py-2">Password</th>
            <th class="px-4 py-2">Date Of Birth</th>
            <th class="px-4 py-2">Accepted Terms</th>
        </tr>${tableEntries}
    </table>`;

    const details = document.getElementById("user-Entries");
    details.innerHTML = table; // Update the DOM with the new table
};

// Save user form data to localStorage
let userForm = document.getElementById("user-form");
let userEntries = [];
const saveUserForm = (event) => {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const dob = document.getElementById("dob").value;
    const acceptTerms = document.getElementById("acceptTerms").checked;

    const entry = {
        name,
        email,
        password,
        dob,
        acceptTerms
    };

    userEntries.push(entry);

    localStorage.setItem("user-Entries", JSON.stringify(userEntries));

    displayEntries(); // Update the displayed entries
};

// Set up event listener for form submission
userForm.addEventListener("submit", saveUserForm);

// Initial display of entries
displayEntries();


//Age validation

const date = new Date();  //2024-09-12

const year = date.getFullYear(); //2024

const minAge = new Date(year - 55, date.getMonth(), date.getDate());  //1969-09-12

const maxAge = new Date(year - 18, date.getMonth(), date.getDate()); //2006-09-12

document.getElementById('dob').setAttribute('min', minAge.toISOString().split('T')[0]);  //setting min attribute with value 1969

document.getElementById('dob').setAttribute('max', maxAge.toISOString().split('T')[0]);  //setting max attribute with value 2006
