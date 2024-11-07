

function submitForm() { 
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
  
    if (name && phone) {
      // popupen med namn och telefonnummer
      document.getElementById("popupText").innerText = `Namn: ${name}Telefonnummer: ${phone}`;
      document.getElementById("popup").style.display = "flex";
      
      // Skapa ett nytt blockelement för kontakten
      const contactItem = document.createElement("div");
      contactItem.className = "contact-item";
      
      // Lägg till kontaktinformation
      const contactInfo = document.createElement("p");
      contactInfo.innerText = `Namn: ${name}Telefonnummer: ${phone}`;
      contactItem.appendChild(contactInfo);
  
      // Skapa redigeringsformulär 
      const editForm = document.createElement("div");
      editForm.className = "edit-form";
      editForm.innerHTML = `
        <input type="text" class="edit-name" value="${name}">
        <input type="tel" class="edit-phone" value="${phone}">
        <button onclick="saveContact(this)">Spara</button>
      `;
      contactItem.appendChild(editForm);
  
      //  "Ändra" och "Ta bort"-knappar
      const buttonContainer = document.createElement("div");
      buttonContainer.className = "contact-buttons";
  
      // Ändra-knapp
      const editButton = document.createElement("button");
      editButton.className = "edit";
      editButton.innerText = "Ändra";
      editButton.onclick = function() {
        toggleEditForm(editForm, contactInfo);
      };
  
      // Ta bort-knapp //
      const deleteButton = document.createElement("button");
      deleteButton.className = "delete";
      deleteButton.innerText = "Ta bort";
      deleteButton.onclick = function() {
        contactItem.remove();
      };
  
      // knappar i knapplayouten
      buttonContainer.appendChild(editButton);
      buttonContainer.appendChild(deleteButton);
      contactItem.appendChild(buttonContainer);
  
      //  kontaktblocket i kontaktlistan
      document.getElementById("contactList").appendChild(contactItem);
    }
  }
  
  // Stäng popupen
  function closePopup() {
    document.getElementById("popup").style.display = "none";
  }
  
  // Visa/dölj redigeringsformuläret
  function toggleEditForm(editForm, contactInfo) {
    if (editForm.style.display === "none") {
      editForm.style.display = "flex";
      contactInfo.style.display = "none";
    } else {
      editForm.style.display = "none";
      contactInfo.style.display = "block";
    }
  }
  
  // Spara ändringarna och uppdatera kontaktinformationen
  function saveContact(saveButton) {
    const editForm = saveButton.parentElement;
    const contactItem = editForm.parentElement;
    const contactInfo = contactItem.querySelector("p");
    const newName = editForm.querySelector(".edit-name").value;
    const newPhone = editForm.querySelector(".edit-phone").value;
  
    contactInfo.innerText = `Namn: ${newName}\nTelefonnummer: ${newPhone}`;
    toggleEditForm(editForm, contactInfo);
  }
  