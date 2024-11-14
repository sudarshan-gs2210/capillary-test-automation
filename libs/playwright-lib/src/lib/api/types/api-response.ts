export type APIResponse<T> = {
    statusCode: number
    statusText: string
    body?: T
    error?: string
}
