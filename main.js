document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let nome = document.getElementById("nome").value;
    let telefone = document.getElementById("telefone").value;
    
    let table = document.getElementById("contactList");
    let row = table.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    
    cell1.textContent = nome;
    cell2.textContent = telefone;
    
    document.getElementById("contactForm").reset();
});