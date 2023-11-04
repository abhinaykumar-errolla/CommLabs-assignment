let redbtnel = document.getElementById("redbtn");
const modal = createModal();
let redbtn1el = document.getElementById("redbtn1");
const modal1 = createModal();
let redbtn2el = document.getElementById("redbtn2");
const modal2 = createModal();

function createModal() {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    const modalContent = document.createElement("div");
    modalContent.classList.add("modalContent");
    const closeModalSpan = document.createElement("span");
    closeModalSpan.textContent = "x";
    closeModalSpan.style.cursor = "pointer";
    modalContent.appendChild(closeModalSpan);
    const modalHeader = document.createElement("h2");
    modalHeader.textContent = "Register For Free Webinar";
    modalContent.appendChild(modalHeader);
    const form = document.createElement("form");
    form.innerHTML = `<label for="First Name">First Name:</label>
        <input type="text" id="name" name="name" required>
        <label for="Last Name'>Last Name:</label>
        <input type="text" id="lastname" name="lastname" required>
        <br>
        <label for="Email">Business Email:</label>
        <input type="email" id="email" name="email" required>
        <br>
        <label for="Mobile">Mobile:</label>
        <input type="text" id="mobile" name="mobile" required>
        <br>
        <input type="submit" value="Secure your seat" style="background-color: red; color: white">`;
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const lastname = document.getElementById("lastname").value;
        const email = document.getElementById("email").value;
        const mobile = document.getElementById("mobile").value;
        console.log(
            "Name:",
            name,
            "Last Name:",
            lastname,
            "Email:",
            email,
            "Mobile:",
            mobile
        );
        closeModal(modal);
    });
    modalContent.appendChild(form);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    return modal;
}

function openModal(modal) {
    modal.style.display = "block";
}

function closeModal(modal) {
    modal.style.display = "none";
}
redbtnel.addEventListener("click", () => openModal(modal));
redbtn1el.addEventListener("click", () => openModal(modal1));
redbtn2el.addEventListener("click", () => openModal(modal2));

window.addEventListener("click", function(event) {
    if (
        event.target === modal ||
        event.target === modal1 ||
        event.target === modal2
    ) {
        closeModal(modal);
        closeModal(modal1);
        closeModal(modal2);
    }
});
