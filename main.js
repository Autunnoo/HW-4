// hw#4


const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

const girls = (students.slice(2,4) + ',' + students.slice(5)).split(','),
      boys =  (students.slice(0,2) + ',' + students.slice(4,5)).split(',');


// 1

function studentsСouple(boys, girls) {
	let groupStudents = [];
	for (let i = 0; i < boys.length; i++) {
		groupStudents.push([boys[i], girls[i]]);
	};
	return groupStudents;
};
const CoupleOfStudents = studentsСouple(boys, girls).slice();

console.log('#1 Студенческие пары: ', CoupleOfStudents);


// 2 

function ComposingWithThemes (CoupleOfStudents, themes) {
	let result = [];

	for (let i = 0; i < themes.length; i++){
		result.push([CoupleOfStudents.slice()[i].join(' i ') + ' ,Тема пары : ' +  themes[i]]);
	}
	return result;
}
let CompiledThemesForCouples = ComposingWithThemes(CoupleOfStudents, themes);
console.log('#2 Темы занятий для пар :' ,CompiledThemesForCouples);


// 3 

function аssessing (students, marks){
	let	result = [];

		for (let i = 0; i < students.length; i++){
			result.push([students[i], marks[i]])
		}

		return result;
}
let CompilingStudentGrades = аssessing(students, marks);
console.log('#3 Оценки студентов :' , CompilingStudentGrades);

// 4

function appraisals (CompiledThemesForCouples){
	let result = [];

	for (let i = 0; i < CompiledThemesForCouples.length; i++){
		result.push([CompiledThemesForCouples[i] + ' -  Оценка ' +  Math.ceil(Math.random() * 5)]);
	}

	return result;
}
let pashka = appraisals(CompiledThemesForCouples);
console.log('#4 Оценки парам :' , pashka);

