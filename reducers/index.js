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
      let codigo_seteado = action.payload.codigo;
      let state_subjects = state.materias.filter((materia) => materia.codigo != codigo_seteado );
      return {
        ...state,
        materias: state_subjects
      }
    default:
      return state;
  }
};
export default rootReducer;