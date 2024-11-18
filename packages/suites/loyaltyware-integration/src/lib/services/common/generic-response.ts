export type GenericResponse<T> = {
    data: T
    errors: Record<string, never>
    warnings: Record<string, never>
}
