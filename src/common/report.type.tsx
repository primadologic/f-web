

export type ReportFormType = {
    suspectNumber: string;
    platFormId: string;
    incidentDate: string;
    description: string;
    requestFiles: File[];
}

export type PlatformIDType = {
    dateCreated: string,
    dateUpdated: string,
    dateDeleted: string,
    id: string,
    name: string,
    displayName: string,
    description: string
}