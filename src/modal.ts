export function setupModal(): void {
  const modal = document.getElementById("modal")!;
  const modalTitle = document.getElementById("modalTitle")!;
  const closeModal = document.getElementById("closeModal")!;

  document.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains("learn-more")) {
      const title = target.getAttribute("data-title");
      modalTitle.textContent = title ?? "No Title";
      modal.style.display = "block";
    }
  });

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });
}
