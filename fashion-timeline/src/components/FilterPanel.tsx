import React from 'react';

interface FilterPanelProps {
  // Future filter props can be added here
  onFilterChange?: (filters: any) => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({ onFilterChange }) => {
  return (
    <aside className="filter-panel" role="complementary" aria-label="Filter options">
      <h3>Filters</h3>
      <p>Filter options will be available here in future updates.</p>
      {/* Future filter controls will be added here */}
    </aside>
  );
};

export default FilterPanel;