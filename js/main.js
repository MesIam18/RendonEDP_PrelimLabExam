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

// Get required control elements by exact ID[cite: 1]
const searchInput = document.getElementById('searchInput');
const blockFilter = document.getElementById('blockFilter');
const statusFilter = document.getElementById('statusFilter');
const applyBtn = document.getElementById('applyBtn');
const resetBtn = document.getElementById('resetBtn');

// Primary function to handle combined search and filter processing[cite: 1]
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

// Reset handler restoring default state[cite: 1]
function resetDashboard() {
    searchInput.value = '';
    blockFilter.value = 'All';
    statusFilter.value = 'All';
    displayMessage('');

    displayStudents(students);
    displaySummary(students);
}

// Event Listeners registration using addEventListener()[cite: 1]
function init() {
    applyBtn.addEventListener('click', processAndRender);
    resetBtn.addEventListener('click', resetDashboard);
    
    // Live update capabilities[cite: 1]
    searchInput.addEventListener('input', processAndRender);
    blockFilter.addEventListener('change', processAndRender);
    statusFilter.addEventListener('change', processAndRender);

    // Initial Dashboard Display on Page Load[cite: 1]
    displayStudents(students);
    displaySummary(students);
}

init();