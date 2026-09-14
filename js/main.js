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

function processAndRender() {
    try {
        const searchInput = document.getElementById('searchInput');
        const blockFilter = document.getElementById('blockFilter');
        const statusFilter = document.getElementById('statusFilter');

        const query = searchInput ? searchInput.value : '';
        const selectedBlock = blockFilter ? blockFilter.value : 'All';
        const selectedStatus = statusFilter ? statusFilter.value : 'All';

        let result = searchStudents(students, query);
        result = filterStudentsByBlock(result, selectedBlock);
        result = filterStudentsByStatus(result, selectedStatus);

        displayStudents(result);
        displaySummary(result);
    } catch (err) {
        console.error("Render error:", err);
    }
}

function resetDashboard() {
    const searchInput = document.getElementById('searchInput');
    const blockFilter = document.getElementById('blockFilter');
    const statusFilter = document.getElementById('statusFilter');

    if (searchInput) searchInput.value = '';
    if (blockFilter) blockFilter.value = 'All';
    if (statusFilter) statusFilter.value = 'All';
    
    displayMessage('');
    displayStudents(students);
    displaySummary(students);
}

function init() {
    const applyBtn = document.getElementById('applyBtn');
    const resetBtn = document.getElementById('resetBtn');
    const searchInput = document.getElementById('searchInput');
    const blockFilter = document.getElementById('blockFilter');
    const statusFilter = document.getElementById('statusFilter');

    if (applyBtn) applyBtn.addEventListener('click', processAndRender);
    if (resetBtn) resetBtn.addEventListener('click', resetDashboard);
    if (searchInput) searchInput.addEventListener('input', processAndRender);
    if (blockFilter) blockFilter.addEventListener('change', processAndRender);
    if (statusFilter) statusFilter.addEventListener('change', processAndRender);

    // Initial Dashboard Display on Page Load
    displayStudents(students);
    displaySummary(students);
}

// Ensure DOM is fully loaded before initialization
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}