import { apiGet } from './api'

export const getSkins = async () => {
    return apiGet('/skins')
}

export const getSkinByUuid = async (uuid) => {
    return apiGet(`/skins/${uuid}`)
}

export const getChromas = async () => {
    return apiGet('/chromas')
}

export const getLevels = async () => {
    return apiGet('/levels')
}