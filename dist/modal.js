export function setupModal() {
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modalTitle");
    const modalContent = document.getElementById("modal-content-para");
    const closeModal = document.getElementById("closeModal");
    document.addEventListener("click", (e) => {
        const target = e.target;
        if (target.classList.contains("learn-more")) {
            const title = target.getAttribute("data-title");
            const content = target.getAttribute("data-content");
            modalTitle.textContent = title !== null && title !== void 0 ? title : "No Title";
            modalContent.textContent = content !== null && content !== void 0 ? content : "No Title";
            modal.style.display = "block";
        }
    });
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });
}
