export type ContextOptions = {
    baseURL?: string
    clientCertificates?: Array<ClientCertificate>
    extraHTTPHeaders?: { [key: string]: string }
    httpCredentials?: HTTPCredentials
    ignoreHTTPSErrors?: boolean
    proxy?: Proxy
    timeout?: number
    userAgent?: string
}

export interface ClientCertificate {
    origin: string
    certPath?: string
    keyPath?: string
    pfxPath?: string
    passphrase?: string
}

export interface HTTPCredentials {
    username: string
    password: string
    origin?: string
    send?: 'unauthorized' | 'always'
}

export interface Proxy {
    server: string
    bypass?: string
    username?: string
    password?: string
}
