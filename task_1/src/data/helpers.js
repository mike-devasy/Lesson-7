export function getStudentsArrayTo5(studentArray){
	return studentArray.map((student) => ({
		...student,
		averageScore: getAverageScore5(student.averageScore)
	}))
}
	export function getAverageScore5(averageScore){
    return  Math.round(averageScore / 2.4) 
	}