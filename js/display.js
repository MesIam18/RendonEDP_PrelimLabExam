import { 
    calculateFinalGrade, 
    getAcademicStatus, 
    getPerformanceRemark, 
    calculateClassAverage, 
    countPassingStudents, 
    getTopStudent 
} from './gradeUtils.js';

export function displayStudents(students) {
    const studentList = document.getElementById('studentList');
    if (!studentList) return;

    studentList.innerHTML = '';

    if (!students || students.length === 0) {
        displayMessage("No students found");
        return;
    }

    displayMessage("");

    students.forEach(student => {
        const { id, name, block, quiz, lab, exam } = student;
        const finalGrade = calculateFinalGrade(student);
        const status = getAcademicStatus(finalGrade);
        const remark = getPerformanceRemark(finalGrade);

        const card = document.createElement('article');
        card.className = 'student-card';

        card.innerHTML = `
            <h3>${name}</h3>
            <p><strong>ID:</strong> ${id} | <strong>Block:</strong> ${block}</p>
            <p><strong>Quiz:</strong> ${quiz} | <strong>Lab:</strong> ${lab} | <strong>Exam:</strong> ${exam}</p>
            <p><strong>Final Grade:</strong> ${finalGrade.toFixed(2)}</p>
            <p><strong>Status:</strong> ${status}</p>
            <p><strong>Remark:</strong> ${remark}</p>
        `;

        studentList.appendChild(card);
    });
}

export function displaySummary(students) {
    const classAvgElem = document.getElementById('classAverage');
    const passingCountElem = document.getElementById('passingCount');
    const displayedCountElem = document.getElementById('displayedCount');
    const topStudentElem = document.getElementById('topStudent');

    const avg = calculateClassAverage(students);
    const passing = countPassingStudents(students);
    const top = getTopStudent(students);

    if (displayedCountElem) displayedCountElem.textContent = students ? students.length : 0;
    if (classAvgElem) classAvgElem.textContent = avg.toFixed(2);
    if (passingCountElem) passingCountElem.textContent = passing;

    if (topStudentElem) {
        if (top) {
            const topGrade = calculateFinalGrade(top).toFixed(2);
            topStudentElem.textContent = `${top.name} (${topGrade})`;
        } else {
            topStudentElem.textContent = "None";
        }
    }
}

export function displayMessage(message) {
    const messageArea = document.getElementById('messageArea');
    if (messageArea) {
        messageArea.textContent = message;
    }
}