import { APIRequestContext, request } from '@playwright/test'
import {
    ClientCertificate,
    ContextOptions,
    HTTPCredentials,
    Proxy,
} from './types/api-context'

export class ContextBuilder {
    private contextOptions: ContextOptions

    constructor() {
        this.contextOptions = {}
    }

    public baseURL(value: string): this {
        this.contextOptions.baseURL = value
        return this
    }

    public headers(headers: { [key: string]: string }) {
        this.contextOptions.extraHTTPHeaders = headers;
        return this;
    }

    public ignoreHTTPSError(value?: boolean): this {
        this.contextOptions.ignoreHTTPSErrors = value
        return this
    }

    public clientCertificates(...certificates: ClientCertificate[]): this {
        this.contextOptions.clientCertificates = certificates
        return this
    }

    public httpCredentials(credentials: HTTPCredentials): this {
        this.contextOptions.httpCredentials = credentials
        return this
    }

    public proxy(proxyData: Proxy): this {
        this.contextOptions.proxy = proxyData
        return this
    }

    public timeoutInMs(timeout: number): this {
        this.contextOptions.timeout = timeout
        return this
    }

    public userAgent(value: string): this {
        this.contextOptions.userAgent = value
        return this
    }

    public build(): Promise<APIRequestContext> {
        return request.newContext(this.contextOptions)
    }
}
