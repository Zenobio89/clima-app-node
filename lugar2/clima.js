const { default: Axios } = require("axios")

const getClima = async(latitud, longuitud) => {
    const resp = await Axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longuitud}&appid=61d12a4e8472bffcc0982ed2e4774085&units=metric`)

    return resp.data.main.temp
}
module.exports = {
    getClima
}