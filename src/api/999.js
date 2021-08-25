import api from './api'

export const fetchSuggestions = (search) => api.get('suggestions', {params: {search}})
export const fetchCategories = () => api.get('categories')
export const fetchItem = (link) => api.get('item', {params: {link}})
// export const fetchProducts = () => api.get() path ???