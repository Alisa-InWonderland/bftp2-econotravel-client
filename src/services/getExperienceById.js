import {API_URL} from "./settings";

export function getExperienceById(id) {

    return fetch(`${API_URL}/${id}`)
        .then(r => r.json())

}