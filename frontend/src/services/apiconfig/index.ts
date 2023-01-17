import config from "./config.json";
import { isDevMode } from "@angular/core"

export const API_URL = (): string => isDevMode() ? config.development : config.production

const URL = API_URL()

export const URLS = {
    FETCH_ALL: URL + '/view/all',
    FETCH_SINGLE: URL + '/view/',
    INSERT: URL + '/insert',
    UPDATE: URL + '/update/',
    DELETE: URL + '/delete/'
}
