const initialData = {
    "Name": "Muthu raman",
    "Email": "muthuraman@2002.com",
    "profession":"Developer"
};

document.addEventListener('DOMContentLoaded', () => {
    const userInfoList = document.getElementById('userInfoList');
    
    // Populate initial data
    for (const [key, value] of Object.entries(initialData)) {
        addListItem(key, value);
    }
});

document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const fieldName = document.getElementById('fieldName').value;
    const fieldValue = document.getElementById('fieldValue').value;

    addListItem(fieldName, fieldValue);

    // Clear input fields
    document.getElementById('fieldName').value = '';
    document.getElementById('fieldValue').value = '';
});

function addListItem(name, value) {
    const userInfoList = document.getElementById('userInfoList');
    const listItem = document.createElement('li');
    
    listItem.innerHTML = `${name}: ${value} <button class="edit-button" onclick="editEntry(this)">Edit</button>`;
    userInfoList.appendChild(listItem);
}

function editEntry(button) {
    const listItem = button.parentElement;
    const text = listItem.textContent.replace(" Edit", "").trim();
    const [fieldName, fieldValue] = text.split(": ");

    document.getElementById('fieldName').value = fieldName;
    document.getElementById('fieldValue').value = fieldValue;

    // Remove the entry from the list
    listItem.remove();
}
