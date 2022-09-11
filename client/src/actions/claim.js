import * as api from '../api/index.js';

export const claim = (formData, router) => async (dispatch) => {
    try {
        const { data } = await api.claim(formData);

       dispatch({type: 'CLAIM', data });
       
       //after claiming
       router.push('/')

    } catch (error) {
        console.log(error)
    }
};