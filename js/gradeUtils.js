// Exact Exported Function Names & Pure Calculation Logic[cite: 1]

export function calculateFinalGrade(student) {
    const { quiz, lab, exam } = student; // Object destructuring requirement[cite: 1]
    // Returns numeric value (Quiz 25%, Lab 35%, Exam 40%)[cite: 1]
    return (quiz * 0.25) + (lab * 0.35) + (exam * 0.40);
}

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

export function searchStudents(students, query) {
    const lowerQuery = query.toLowerCase().trim();
    // Case-insensitive filtering using arrow function callback[cite: 1]
    return students.filter(student => student.name.toLowerCase().includes(lowerQuery));
}

export function filterStudentsByBlock(students, block) {
    if (block === "All") return students;
    return students.filter(student => student.block === block);
}

export function filterStudentsByStatus(students, status) {
    if (status === "All") return students;
    return students.filter(student => {
        const grade = calculateFinalGrade(student);
        return getAcademicStatus(grade) === status;
    });
}

export function calculateClassAverage(students) {
    if (!students || students.length === 0) return 0; // Pure numeric 0[cite: 1]
    // Uses reduce() aggregate calculation[cite: 1]
    const total = students.reduce((sum, student) => sum + calculateFinalGrade(student), 0);
    return total / students.length; // Returns pure numeric average[cite: 1]
}

export function countPassingStudents(students) {
    if (!students) return 0;
    return students.filter(student => calculateFinalGrade(student) >= 75).length;
}

export function getTopStudent(students) {
    if (!students || students.length === 0) return null; // Returns null for empty arrays[cite: 1]
    return students.reduce((top, current) => {
        return calculateFinalGrade(current) > calculateFinalGrade(top) ? current : top;
    }, students[0]);
}

// Control Structure Requirement: switch statement range logic[cite: 1]
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