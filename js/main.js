// Relative module imports targeting the same js/ directory[cite: 1]
import { students } from './students.js';
import { 
    searchStudents, 
    filterStudentsByBlock, 
    filterStudentsByStatus 
} from './gradeUtils.js';
import { 
    displayStudents, 
    displaySummary, 
    displayMessage 
} from './display.js';

// DOM Element Selectors[cite: 1]
const searchInput = document.getElementById('searchInput');
const blockFilter = document.getElementById('blockFilter');
const statusFilter = document.getElementById('statusFilter');
const applyBtn = document.getElementById('applyBtn');
const resetBtn = document.getElementById('resetBtn');

// Pipeline function combining search, block filter, and status filter[cite: 1]
function processAndRender() {
    const query = searchInput.value;
    const selectedBlock = blockFilter.value;
    const selectedStatus = statusFilter.value;

    let result = searchStudents(students, query);
    result = filterStudentsByBlock(result, selectedBlock);
    result = filterStudentsByStatus(result, selectedStatus);

    displayStudents(result);
    displaySummary(result);
}

// Reset function restoring initial state[cite: 1]
function resetDashboard() {
    searchInput.value = '';
    blockFilter.value = 'All';
    statusFilter.value = 'All';
    displayMessage('');

    displayStudents(students);
    displaySummary(students);
}

// Bind event listeners using addEventListener()[cite: 1]
function init() {
    applyBtn.addEventListener('click', processAndRender);
    resetBtn.addEventListener('click', resetDashboard);
    
    searchInput.addEventListener('input', processAndRender);
    blockFilter.addEventListener('change', processAndRender);
    statusFilter.addEventListener('change', processAndRender);

    // Initial render on page load[cite: 1]
    displayStudents(students);
    displaySummary(students);
}

// Execute application
init();