interface IApplicationRedirections {
    redirect_from: string;
    redirect_to: string;
    type: string;
}
interface IApplicationMeta {
    name: string;
    value: string;
}
type ISecureURL = IApplication["banner"];
type IDomain = IApplication["domain"];
export interface IApplication {
    website: {
        enabled: boolean;
        basepath: string;
    };
    cors: {
        domains: Array<string>;
    };
    auth: {
        enabled: boolean;
    };
    _id: string;
    description?: string;
    channel_type?: string;
    cache_ttl: number;
    internal: boolean;
    is_active: boolean;
    mode?: string;
    name: string;
    owner?: string;
    company_id?: number;
    token?: string;
    tokens?: Array<{
        token: string;
        created_at: string;
    }>;
    redirections?: Array<IApplicationRedirections>;
    meta?: Array<IApplicationMeta>;
    created_at: string;
    modified_at: string;
    __v: number;
    slug: string;
    status: string;
    banner?: {
        secure_url: string;
    };
    logo?: ISecureURL;
    favicon?: ISecureURL;
    domains?: Array<IDomain>;
    app_type?: string;
    mobile_logo?: ISecureURL;
    domain?: {
        verified: boolean;
        is_shortlink: boolean;
        is_primary: boolean;
        _id: string;
        name: string;
        is_predefined?: boolean;
    };
    id?: string;
}
export {};
