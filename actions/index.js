import {ADD_ARTICLE, ADD_SUBJECT} from "../constants/action-types"
export const addArticle = article => ({ type: ADD_ARTICLE, payload: article });
export const addMateria = materia => ({ type: ADD_SUBJECT, payload: materia });