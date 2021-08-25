import api from './api'

export const fetchSuggestions = (search) => api.get('suggestions', {params: {search}})
export const fetchCategories = () => api.get('categories')
