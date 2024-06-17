export interface IPrisbeamOption {
    database: string,
    sqlitePath?: string,
    cachePath?: string,
    readOnly: boolean,
    sensitiveImageProtocol?: boolean,
    verbose?: boolean
}
