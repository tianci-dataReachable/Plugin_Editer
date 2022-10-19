/**
 * @file main domain
 * @date 2021-1-16
 * @author zhangchongzhi
 * @lastModify  2021-1-16
 */
let mainDomain = "";
let profileServiceUrl = "";
let oidcServiceUrl = "";
let commonAuthServiceUrl = "";
let pluginServiceUrl = "";
let marketApp = "";
switch (process.env.NODE_ENV) {
    case "development":
        mainDomain = "https://api.dev.datareachable.net/mkt/v2/dev";
        profileServiceUrl = "https://api.dev.datareachable.net/query/centre/v2/dev/profile";
        oidcServiceUrl = "https://api.dev.datareachable.net/common/oidc/v2";
        commonAuthServiceUrl = "https://api.dev.datareachable.net/auth/common/v2";
        pluginServiceUrl = "https://plugin-system.dev.datareachable.net/v2-dev/api/v1";
        marketApp = "market-v2-dev";
        break;
    case "v2_dev":
        mainDomain = "https://api.dev.datareachable.net/mkt/v2/dev";
        profileServiceUrl = "https://api.dev.datareachable.net/query/centre/v2/dev/profile";
        oidcServiceUrl = "https://api.dev.datareachable.net/common/oidc/v2";
        commonAuthServiceUrl = "https://api.dev.datareachable.net/auth/common/v2";
        pluginServiceUrl = "https://plugin-system.dev.datareachable.net/v2-dev/api/v1";
        marketApp = "market-v2-dev";
        break;
    case "v2_test":
        mainDomain = "https://api.dev.datareachable.net/mkt/v2/test";
        profileServiceUrl = "https://api.dev.datareachable.net/query/centre/v2/test/profile";
        oidcServiceUrl = "https://api.dev.datareachable.net/common/oidc/v2/test";
        commonAuthServiceUrl = "https://api.dev.datareachable.net/auth/common/v2/test";
        pluginServiceUrl = "https://plugin-system.dev.datareachable.net/v2-test/api/v1";
        marketApp = "market-v2-test";
        break;
    case "production":
        mainDomain = "https://api.dev.datareachable.net/mkt/v2/dev";
        profileServiceUrl = "https://api.dev.datareachable.net/query/centre/v2/dev/profile";
        oidcServiceUrl = "https://api.dev.datareachable.net/common/oidc/v2";
        commonAuthServiceUrl = "https://api.dev.datareachable.net/auth/common/v2";
        pluginServiceUrl = "https://plugin-system.dev.datareachable.net/v2-dev/api/v1";
        marketApp = "market-v2-dev";
        break;
    default:
        mainDomain = "https://api.dev.datareachable.net/mkt/v2/dev";
        profileServiceUrl = "https://api.dev.datareachable.net/query/centre/v2/dev/profile";
        oidcServiceUrl = "https://api.dev.datareachable.net/common/oidc/v2";
        commonAuthServiceUrl = "https://api.dev.datareachable.net/auth/common/v2";
        pluginServiceUrl = "https://plugin-system.dev.datareachable.net/v2-dev/api/v1";
        marketApp = "market-v2-dev";
        break;
}

export default mainDomain;
export { profileServiceUrl, oidcServiceUrl, marketApp, commonAuthServiceUrl, pluginServiceUrl };
