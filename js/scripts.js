// Get all the expandable rows
const expandableRows = document.querySelectorAll('.expandable-row');

// Attach click event listeners to the rows
expandableRows.forEach(row => {
  row.addEventListener('click', () => {
    const expandedContent = row.nextElementSibling;
    expandedContent.classList.toggle('expanded-content');
  });
});
