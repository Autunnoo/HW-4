// hw#4


const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

const girls = (students.slice(2,4) + ',' + students.slice(5)).split(','),
      boys =  (students.slice(0,2) + ',' + students.slice(4,5)).split(',');


// 1

function studentsСouple(boys, girls) {
	let boy = [...boys],
		girl = [...girls],
		groupStudents = [];
	for (let i = 0; i < boy.length; i++) {
		groupStudents.push([boy[i], girl[i]]);
	};
	return groupStudents;
};
const CoupleOfStudents = studentsСouple(boys, girls);

console.log('Студенческие пары: ', CoupleOfStudents);


// 2 

function ComposingWithThemes (CoupleOfStudents, themes) {
	let g = CoupleOfStudents.slice();
	let t = [...themes];
	let result = [];

	for (let i = 0; i < t.length; i++){
		result.push([g[i].join(' i ') + ' ,Тема пары : ' +  t[i]]);
	}
	return result;
}
let CompiledThemesForCouples = ComposingWithThemes(CoupleOfStudents, themes);
console.log('Темы занятий для пар :' ,CompiledThemesForCouples);


// 3 

function аssessing (students, marks){
	let s = [...students],
		m = [...marks]
		result = [];

		for (let i = 0; i < s.length; i++){
			result.push([s[i], m[i]])
		}

		return result;
}
let CompilingStudentGrades = аssessing(students, marks);
console.log('Оценки студентов :' , CompilingStudentGrades);

// 4

function appraisals (CompiledThemesForCouples){
	let с = [...CompiledThemesForCouples],
		result = [];

	for (let i = 0; i < с.length; i++){
		result.push([с[i] + ' -  Оценка ' +  Math.ceil(Math.random() * 5)]);
	}

	return result;
}
let pashka = appraisals(CompiledThemesForCouples);
console.log('Оценки парам :' , pashka);



































