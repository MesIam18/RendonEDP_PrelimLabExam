// Calculate final grade: Quiz 25%, Lab 35%, Exam 40%[cite: 1]
export function calculateFinalGrade(student) {
    const { quiz, lab, exam } = student;
    return (quiz * 0.25) + (lab * 0.35) + (exam * 0.40);
}

// Academic Status classifier[cite: 1]
export function getAcademicStatus(grade) {
    if (grade >= 90) {
        return "Excellent";
    } else if (grade >= 75) {
        return "Passed";
    } else if (grade >= 70) {
        return "Needs Improvement";
    } else {
        return "Failed";
    }
}

// Case-insensitive search[cite: 1]
export function searchStudents(students, query) {
    const cleanQuery = (query || "").toLowerCase().trim();
    return students.filter(student => student.name.toLowerCase().includes(cleanQuery));
}

// Filter by Block[cite: 1]
export function filterStudentsByBlock(students, block) {
    if (!block || block === "All") return students;
    return students.filter(student => student.block === block);
}

// Filter by Status[cite: 1]
export function filterStudentsByStatus(students, status) {
    if (!status || status === "All") return students;
    return students.filter(student => {
        const grade = calculateFinalGrade(student);
        return getAcademicStatus(grade) === status;
    });
}

// Class Average calculator returning numeric value[cite: 1]
export function calculateClassAverage(students) {
    if (!students || students.length === 0) return 0;
    const total = students.reduce((sum, student) => sum + calculateFinalGrade(student), 0);
    return total / students.length;
}

// Count passing students (grade >= 75)[cite: 1]
export function countPassingStudents(students) {
    if (!students) return 0;
    return students.filter(student => calculateFinalGrade(student) >= 75).length;
}

// Top student selector[cite: 1]
export function getTopStudent(students) {
    if (!students || students.length === 0) return null;
    return students.reduce((top, current) => {
        return calculateFinalGrade(current) > calculateFinalGrade(top) ? current : top;
    }, students[0]);
}

// Performance remark switch logic[cite: 1]
export function getPerformanceRemark(grade) {
    switch (true) {
        case (grade >= 90):
            return "Outstanding";
        case (grade >= 85):
            return "Very Good";
        case (grade >= 80):
            return "Good";
        case (grade >= 75):
            return "Satisfactory";
        default:
            return "Unsatisfactory";
    }
}