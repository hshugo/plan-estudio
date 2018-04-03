import {ADD_ARTICLE,ADD_SUBJECT, DEL_SUBJECT} from "../constants/action-types"
const initialState = {
  articles: [],
  materias:[]
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return { ...state, articles: [...state.articles, action.payload] };
    case ADD_SUBJECT:
      return { ...state, materias: [...state.materias, action.payload] };
    case DEL_SUBJECT:
      return {
        ...state,
        materias: state.materias.filter((materia) => materia.codigo != action.payload.codigo)
      }
    default:
      return state;
  }
};
export default rootReducer;