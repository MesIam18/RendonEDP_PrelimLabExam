export function calculateFinalGrade(student) {
    const { quiz, lab, exam } = student;
    return (quiz * 0.25) + (lab * 0.35) + (exam * 0.40);
}

export function getAcademicStatus(grade) {
    if (grade >= 90) return "Excellent";
    if (grade >= 75) return "Passed";
    if (grade >= 70) return "Needs Improvement";
    return "Failed";
}

export function searchStudents(students, query) {
    const cleanQuery = (query || "").toLowerCase().trim();
    return students.filter(student => student.name.toLowerCase().includes(cleanQuery));
}

export function filterStudentsByBlock(students, block) {
    if (!block || block === "All") return students;
    return students.filter(student => student.block === block);
}

export function filterStudentsByStatus(students, status) {
    if (!status || status === "All") return students;
    return students.filter(student => {
        const grade = calculateFinalGrade(student);
        return getAcademicStatus(grade) === status;
    });
}

export function calculateClassAverage(students) {
    if (!students || students.length === 0) return 0;
    const total = students.reduce((sum, student) => sum + calculateFinalGrade(student), 0);
    return total / students.length;
}

export function countPassingStudents(students) {
    if (!students) return 0;
    return students.filter(student => calculateFinalGrade(student) >= 75).length;
}

export function getTopStudent(students) {
    if (!students || students.length === 0) return null;
    return students.reduce((top, current) => {
        return calculateFinalGrade(current) > calculateFinalGrade(top) ? current : top;
    }, students[0]);
}

export function getPerformanceRemark(grade) {
    switch (true) {
        case (grade >= 90): return "Outstanding";
        case (grade >= 85): return "Very Good";
        case (grade >= 80): return "Good";
        case (grade >= 75): return "Satisfactory";
        default: return "Unsatisfactory";
    }
}