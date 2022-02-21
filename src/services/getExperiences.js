import {API_URL} from "./settings";

export function getExperiences() {

    return fetch(API_URL)
        .then(r => r.json())

}