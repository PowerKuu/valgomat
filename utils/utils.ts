//["🤮", "😒", "😵‍💫", "😊", "😍"]
import { Question } from "./config";

export function getFullIconPath(icon: string) {
    return `/icons/partier/${icon}`
}

export function getQuestionByID(id: string) {
    const question = config.questions.find(q => q.id == id)

    if (question == undefined) {
        throw `Could not find question with id ${id}`
    }

    return question
}

export function getNextQuestionID(currentOrder: number) {
    const sortedQuestions = config.questions.sort((a, b) => a.order - b.order)
    const nextQuestion = sortedQuestions.find(q => q.order > currentOrder)

    if (nextQuestion == undefined) {
        throw `Could not find next question for order ${currentOrder}`
    }

    return nextQuestion.id
}