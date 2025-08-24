import React from 'react';
import { HistoricalEvent } from '../types';

interface EventMarkerProps {
  event: HistoricalEvent;
  onClick: (event: HistoricalEvent) => void;
  onKeyDown?: (e: React.KeyboardEvent) => void;
  onFocus?: () => void;
  tabIndex?: number;
  'data-event-index'?: number;
  'aria-current'?: 'step' | undefined;
}

const EventMarker: React.FC<EventMarkerProps> = ({ 
  event, 
  onClick, 
  onKeyDown,
  onFocus,
  tabIndex,
  'data-event-index': dataEventIndex,
  'aria-current': ariaCurrent
}) => {
  const handleClick = () => {
    onClick(event);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (onKeyDown) {
      onKeyDown(e);
    }
  };

  const handleFocus = () => {
    if (onFocus) {
      onFocus();
    }
  };

  return (
    <div 
      className="event-marker" 
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onFocus={handleFocus}
      tabIndex={tabIndex}
      data-event-index={dataEventIndex}
      role="button"
      aria-label={`${event.year}: ${event.title}. Press Enter or Space to view details`}
      aria-current={ariaCurrent}
    >
      <span className="year" aria-hidden="true">{event.year}</span>
      <span className="title" aria-hidden="true">{event.title}</span>
    </div>
  );
};

export default EventMarker;