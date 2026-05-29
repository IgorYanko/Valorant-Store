import { apiGet } from './api'

export const getSkins = async () => {
    return apiGet('/skins')
}

export const getChromas = async () => {
    return apiGet('/chromas')
}