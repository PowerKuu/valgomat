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

export function getQuestionUrlByOrder(order: number) {
    // Sort and get the nearest question

    const sortedQuestions = config.questions.sort((a, b) => a.order - b.order)
    const question = sortedQuestions.find(q => q.order >= order)

    if (sortedQuestions.every(q => q.order > order)) {
        return "/intro"
    } else if (sortedQuestions.every(q => q.order < order)) {
        return "/results"
    }

    if (question == undefined) {
        throw `Could not find question with order ${order}`
    }

    return `/question/${question.id}`
}