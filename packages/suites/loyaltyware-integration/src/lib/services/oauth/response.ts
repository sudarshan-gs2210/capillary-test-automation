import { GenericResponse } from "../common/generic-response"

type OAuthResponseData = {
    accessToken: string,
    ttlSeconds: number
}

export type OAuthResponse = GenericResponse<OAuthResponseData>;