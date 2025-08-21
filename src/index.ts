import { fetchEvents } from "./fetcher.js";
import { EventData } from "./types.js";
import { renderEvents } from "./renderer.js";
import { setupModal } from "./modal.js";


document.addEventListener("DOMContentLoaded", async () => {
  const timeline = document.getElementById("timeline") as HTMLElement;
  try {
    const events: EventData[] = await fetchEvents();
    renderEvents(events, timeline);
    setupModal();
  } catch (err) {
    console.error("Error loading events:", err);
  }
});
