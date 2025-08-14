document.addEventListener("DOMContentLoaded", () => {
  const timeline = document.getElementById("timeline");
  const searchInput = document.getElementById("search");
  const modal = document.getElementById("modal");
  const closeModal = document.getElementById("closeModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalImage = document.getElementById("modalImage");
  const modalDesc = document.getElementById("modalDesc");

  let eventsData = [];

  // Fetch events.json
  fetch("data/events.json")
    .then(response => {
      if (!response.ok) throw new Error("Failed to load events.json");
      return response.json();
    })
    .then(data => {
      eventsData = data;
      renderEvents(eventsData);
    })
    .catch(error => console.error("Error loading events:", error));

  // Render events into timeline
  function renderEvents(events) {
    timeline.innerHTML = "";

    events.forEach(event => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <span class="year-marker">${event.year}</span>
        <img src="${event.imageURL}" alt="${event.title}">
        <h2>${event.title}</h2>
        <p>${event.category}</p>
        <button class="learn-btn">Learn More</button>
      `;

      // Attach Learn More click handler
      card.querySelector(".learn-btn").addEventListener("click", () => openModal(event));

      timeline.appendChild(card);
    });
  }

  // Open modal with event details
  function openModal(event) {
    modalTitle.textContent = `${event.year} - ${event.title}`;
    modalImage.src = event.imageURL;
    modalImage.alt = event.title;
    modalDesc.textContent = event.description;
    modal.style.display = "block";
  }

  // Search filter
  searchInput.addEventListener("input", () => {
    const term = searchInput.value.toLowerCase();
    const filtered = eventsData.filter(event =>
      event.year.includes(term) ||
      event.title.toLowerCase().includes(term) ||
      event.category.toLowerCase().includes(term)
    );
    renderEvents(filtered);
  });

  // Close modal when clicking X
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close modal when clicking outside
  window.addEventListener("click", e => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
