import axios from 'axios'

var id = "2f98992c40b8edf17423d93bda2e04ab";

function fetchAPI (value) {

    const URL = `https://api.soundcloud.com/tracks?client_id=${id}&q=${value}`

    return axios.get(URL)
    .then(res => {
        return res.data}
        )
    .catch(error => console.log(error));
}



module.exports.id = id;
module.exports.fetchAPI = fetchAPI;