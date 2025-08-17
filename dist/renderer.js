export function renderEvents(events, container) {
    container.innerHTML = "";
    events.forEach(event => {
        const card = document.createElement("div");
        card.className = "event-card";
        card.innerHTML = `
      <img src="${event.imageURL}" alt="${event.title}" />
      <h3>${event.year} - ${event.title}</h3>
      <p>${event.description}</p>
      <button class="learn-more" data-title="${event.title}">Learn More</button>
    `;
        container.appendChild(card);
    });
}
