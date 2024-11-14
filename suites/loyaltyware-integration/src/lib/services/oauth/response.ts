import { GenericResponse } from "../common/response"

type OAuthResponseData = {
    accessToken: string,
    ttlSeconds: number
}

export type OAuthResponse = GenericResponse<OAuthResponseData>;