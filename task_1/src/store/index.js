import { createStore } from 'vuex'
import { v4 as uuidv4 } from 'uuid'
import { studentsArray } from '@/data/students'
import { getAverageScore5, getStudentsArrayTo5 } from '@/data/helpers'
export default createStore({
    state: {
        studentsList: '',
        selectedScore: '1',
        selectedCategory: null,
    },
    getters: {
        getStudentsList: (state) => state.studentsList,
        getStudListWithScore(state) {
            if (state.selectedScore === '1') return state.studentsList
            else return getStudentsArrayTo5(state.studentsList)
        },
        getStudListWithScoreAndCategory(state, getters) {
            if (state.selectedCategory) {
                const filteredArr = state.studentsList.filter(
                    (student) => getAverageScore5(student.averageScore) == state.selectedCategory
                )
                if (state.selectedScore == '1') return filteredArr
                else if (state.selectedScore == '2') return getStudentsArrayTo5(filteredArr)
            } else return getters.getStudListWithScore
        },
    },
    mutations: {
        showStudentArray(state, studentsArray) {
            const copyArr = JSON.parse(JSON.stringify(studentsArray))
            copyArr.forEach((element) => {
                element.id = uuidv4()
            })
            state.studentsList = copyArr
        },

        addSelectedScore(state, score) {
            state.selectedScore = score
        },
        addSelectedCat(state, category) {
            state.selectedCategory = category
        },
    },
    actions: {
        chooseSelectedCategory({ commit }, category) {
            commit('addSelectedCat', category)
        },
        chooseSelectedScore({ commit }, score) {
            commit('addSelectedScore', score)
        },
        onLoadStudentArray({ commit }) {
            commit('showStudentArray', studentsArray)
        },
    },

    modules: {},
})
