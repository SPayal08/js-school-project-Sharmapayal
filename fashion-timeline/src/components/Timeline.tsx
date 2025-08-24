import React, { useState, useEffect } from 'react';
import EventMarker from './EventMarker';
import EventModal from './EventModal';
import { HistoricalEvent } from '../types';

const Timeline: React.FC = () => {
  const [events, setEvents] = useState<HistoricalEvent[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<HistoricalEvent | null>(null);
  const [activeEventIndex, setActiveEventIndex] = useState<number>(-1);
  const [triggerElement, setTriggerElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    fetch('/Data/events.json')
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error('Error loading events:', error));
  }, []);

  const handleOpenModal = (event: HistoricalEvent, element?: HTMLElement) => {
    setSelectedEvent(event);
    setTriggerElement(element || null);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
    setTriggerElement(null);
  };

  const handleKeyNavigation = (event: React.KeyboardEvent, index: number) => {
    switch (event.key) {
      case 'ArrowUp':
        event.preventDefault();
        if (index > 0) {
          setActiveEventIndex(index - 1);
          const prevMarker = document.querySelector(`[data-event-index="${index - 1}"]`) as HTMLElement;
          prevMarker?.focus();
        }
        break;
      case 'ArrowDown':
        event.preventDefault();
        if (index < events.length - 1) {
          setActiveEventIndex(index + 1);
          const nextMarker = document.querySelector(`[data-event-index="${index + 1}"]`) as HTMLElement;
          nextMarker?.focus();
        }
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        const currentElement = event.currentTarget as HTMLElement;
        handleOpenModal(events[index], currentElement);
        break;
    }
  };

  const handleMarkerClick = (event: HistoricalEvent, index: number, element: HTMLElement) => {
    setActiveEventIndex(index);
    handleOpenModal(event, element);
  };

  const handleMarkerFocus = (index: number) => {
    setActiveEventIndex(index);
  };

  return (
    <section className="timeline" role="main" aria-label="Historical Events Timeline">
      <h2 className="sr-only">Timeline of Historical Events</h2>
      {events.map((event, index) => (
        <EventMarker 
          key={event.year} 
          event={event} 
          onClick={(e) => handleMarkerClick(e, index, document.activeElement as HTMLElement)}
          onKeyDown={(e) => handleKeyNavigation(e, index)}
          onFocus={() => handleMarkerFocus(index)}
          tabIndex={0}
          data-event-index={index}
          aria-current={activeEventIndex === index ? 'step' : undefined}
        />
      ))}
      {selectedEvent && (
        <EventModal 
          event={selectedEvent} 
          onClose={handleCloseModal}
          triggerElement={triggerElement}
        />
      )}
    </section>
  );
};

export default Timeline;