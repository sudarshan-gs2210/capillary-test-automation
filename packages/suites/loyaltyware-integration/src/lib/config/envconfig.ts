export const ENVCONFIG = {
    'CAP_CLUSTER': process.env['CAP_CLUSTER'] ?? '',
    'HOST': process.env['HOST'] ?? '',
    'PARENT_CLIENT_KEY': process.env['PARENT_CLIENT_KEY'] ?? '',
    'PARENT_CLIENT_SECRET': process.env['PARENT_CLIENT_SECRET'] ?? '',
    'CHILD_CLIENT_KEY': process.env['CHILD_CLIENT_KEY'] ?? '',
    'CHILD_CLIENT_SECRET': process.env['CHILD_CLIENT_SECRET'] ?? '',
    'PARENT_ORG_ID': process.env['PARENT_ORG_ID'] ?? '',
    'CHILD_ORG_ID': process.env['CHILD_ORG_ID'] ?? '',
}