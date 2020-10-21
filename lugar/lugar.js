const { default: Axios } = require("axios");

const getLatitud = async(direccionn) => {
    const params = {
        auth: '468094144012824417779x77738',
        locate: `${direccionn}`,
        json: '1'
    }

    const resp = await Axios.get('https://geocode.xyz', { params })
    if (resp.status === 401) {
        throw new Error(`No hay resultados para ${direccionn}`)
    }
    const data = resp.data
    const direccion2 = data.standard.city
    const latitud = data.latt
    const longuitud = data.longt
    return {
        direccion2,
        latitud,
        longuitud
    }

}
module.exports = {
    getLatitud
}