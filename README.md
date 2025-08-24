1. ARIA Roles and Attributes

role="dialog" and aria-modal="true" added to modal.

<dialog> element used for modal where supported.

aria-current="step" added to active timeline marker.

aria-label and aria-labelledby applied where appropriate.

2. Focus Management

Focus trapped inside modal when open.

Focus returns to triggering timeline marker on close.

Modal open/close is announced by screen readers.

3. Keyboard Navigation

Timeline markers reachable via Tab and Arrow keys.

Modal closable with Esc key.

All interactive elements fully keyboard accessible.

4. Color Contrast

All text and interactive elements meet WCAG AA contrast ratio (≥4.5:1).

Hover and focus states verified.

5. WCAG Compliance

Perceivable: ARIA attributes, clear labels, sufficient contrast.

Operable: Keyboard navigation, focus management.

Understandable: Clear active states and feedback.

Robust: Semantic HTML and ARIA roles.

Testing Checklist

 Modal announced correctly by screen readers

 Focus trapped inside modal

 Focus returns to trigger on close

 Timeline markers navigable by Tab/Arrow keys

 Modal closable with Esc key

 Color contrast passes WCAG AA

 Active marker identified with aria-current
