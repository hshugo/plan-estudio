import {ADD_ARTICLE, ADD_SUBJECT,DEL_SUBJECT} from "../constants/action-types"
export const addArticle = article => ({ type: ADD_ARTICLE, payload: article });
export const addMateria = materia => ({ type: ADD_SUBJECT, payload: materia });
export const delMateria = materia => ({ type: DEL_SUBJECT, payload: materia });