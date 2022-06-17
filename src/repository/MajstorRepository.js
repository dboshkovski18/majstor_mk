import axios from "../axios_custom/axios"

const service = {

    fetchAllMasters: () => {
        return axios.get("/masters")
    },

    fetchMasterTypes: () => {
        return axios.get("/masters/types")
    },
    fetchAllCities: () => {
        return axios.get("/city")
    },
    fetchFilteredMasters: (type, cityId) => {
        return axios.get("/masters/sortByTypeAndCity", {
            params: {
                type: type,
                cityId: cityId
            }
        })
    },
    fetchMastersByType: (type) => {
        return axios.get("/masters/sortByType", {
            params: {
                type: type
            }
        })
    },
    fetchMastersByCity: (cityId) => {
        return axios.get("/masters/sortByCity", {
            params: {
                cityId: cityId
            }
        })
    },
    fetchTopMasters: () => {
        return axios.get("/masters/top")
    },
    searchMaster: (search) => {
        return axios.get("/masters/search", {
            params: {
                value: search
            }
        })
    },
    addMaster: (name, surname, number, cityId, type, gender, embg) => {
        return axios.post("/masters/add", {
            name: name,
            surname: surname,
            number: number,
            cityId: cityId,
            type: type,
            gender: gender,
            embg: embg
        })
    }

}

export default service;