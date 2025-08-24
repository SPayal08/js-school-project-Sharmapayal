import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { HistoricalEvent } from '../types';

interface EventModalProps {
  event: HistoricalEvent;
  onClose: () => void;
  triggerElement?: HTMLElement | null;
}

const EventModal: React.FC<EventModalProps> = ({ event, onClose, triggerElement }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog) {
      dialog.showModal();
      
      // Focus the close button when modal opens
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 0);

      // Handle focus trapping and modal close
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
        
        if (e.key === 'Tab') {
          const focusableElements = dialog.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          const firstElement = focusableElements[0] as HTMLElement;
          const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              e.preventDefault();
              lastElement.focus();
            }
          } else {
            if (document.activeElement === lastElement) {
              e.preventDefault();
              firstElement.focus();
            }
          }
        }
      };

      dialog.addEventListener('keydown', handleKeyDown);
      
      return () => {
        dialog.removeEventListener('keydown', handleKeyDown);
        // Return focus to triggering element when modal is unmounted
        if (triggerElement) {
          triggerElement.focus();
        }
      };
    }
  }, [onClose, triggerElement]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    const dialog = dialogRef.current;
    const modalContent = dialog?.querySelector('.modal-content');
    
    // Check if the click target is not within the modal content
    if (modalContent && !modalContent.contains(e.target as Node)) {
      onClose();
    }
  };

  const modalContent = (
    <dialog 
      ref={dialogRef}
      className="modal-overlay"
      onClick={handleBackdropClick}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      role="dialog"
      aria-modal="true"
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button 
          ref={closeButtonRef}
          className="close-button" 
          onClick={onClose}
          aria-label="Close modal"
          type="button"
        >
          &times;
        </button>
        <h2 id="modal-title">{event.title} ({event.year})</h2>
        <p id="modal-description">{event.description}</p>
        <img 
          src={event.image} 
          alt={`Historical image representing ${event.title} from ${event.year}`}
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
      </div>
    </dialog>
  );

  return createPortal(modalContent, document.body);
};

export default EventModal;