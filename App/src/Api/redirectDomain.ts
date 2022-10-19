/**
 * @file redirect domain
 * @date 2021-1-16
 * @author Jack
 * @lastModify  2021-1-16
 */

import { marketApp, oidcServiceUrl } from "./mainDomain";

let redirectToSignInPage = ""; // redirect to company website
let redirectToSignOutPage = ""; // redirect to company website
let redirectToCompanyWebsite = ""; // redirect to company website
let redirectToSignUpPage = ""; // redirect to company website
let redirectToProfilePage = ""; // redirect to company website
let redirectToDashBoardPage = ""; // redirect to company website
let redirectToSurveyPMPage = ""; // redirect to company website
let redirectToSurveyDisPage = ""; // redirect to company website
let redirectToMarketPage = ""; // redirect to company website
let redirectToCommunityPage = ""; // redirect to company website
const lang = window.localStorage.getItem("language") as string;

switch (process.env.NODE_ENV) {
    case "development":
        redirectToSignInPage = `${oidcServiceUrl}/entry?app=${marketApp}&lang=${lang}`;
        redirectToSignOutPage = `${oidcServiceUrl}/logout?app=${marketApp}`;
        redirectToCompanyWebsite = "https://www.datareachable.com";
        redirectToSignUpPage = "https://signup.dev.datareachable.net/v2/dev";
        redirectToProfilePage = "https://profile.dev.datareachable.net/v2/dev";
        redirectToDashBoardPage = "https://dashboard.dev.datareachable.net/v2/dev";
        redirectToSurveyPMPage = "https://spm.dev.datareachable.net/v2/dev";
        redirectToSurveyDisPage = "https://dist.dev.datareachable.net/v2/dev";
        redirectToMarketPage = "https://market.dev.datareachable.net/v2/dev";
        redirectToCommunityPage = "https://cmty.dev.datareachable.net/v2/dev";
        break;
    case "v2_dev":
        redirectToSignInPage = `${oidcServiceUrl}/entry?app=${marketApp}&lang=${lang}`;
        redirectToSignOutPage = `${oidcServiceUrl}/logout?app=${marketApp}`;
        redirectToCompanyWebsite = "https://www.datareachable.com";
        redirectToSignUpPage = "https://signup.dev.datareachable.net/v2/dev";
        redirectToProfilePage = "https://profile.dev.datareachable.net/v2/dev";
        redirectToDashBoardPage = "https://dashboard.dev.datareachable.net/v2/dev";
        redirectToSurveyPMPage = "https://spm.dev.datareachable.net/v2/dev";
        redirectToSurveyDisPage = "https://dist.dev.datareachable.net/v2/dev";
        redirectToMarketPage = "https://market.dev.datareachable.net/v2/dev";
        redirectToCommunityPage = "https://cmty.dev.datareachable.net/v2/dev";
        break;
    case "v2_test":
        redirectToSignInPage = `${oidcServiceUrl}/entry?app=${marketApp}&lang=${lang}`;
        redirectToSignOutPage = `${oidcServiceUrl}/logout?app=${marketApp}`;
        redirectToCompanyWebsite = "https://www.datareachable.com";
        redirectToSignUpPage = "https://signup.dev.datareachable.net/v2/test";
        redirectToProfilePage = "https://profile.dev.datareachable.net/v2/test";
        redirectToDashBoardPage = "https://dashboard.dev.datareachable.net/v2/test";
        redirectToSurveyPMPage = "https://spm.dev.datareachable.net/v2/test";
        redirectToSurveyDisPage = "https://dist.dev.datareachable.net/v2/test";
        redirectToMarketPage = "https://market.dev.datareachable.net/v2/test";
        redirectToCommunityPage = "https://cmty.dev.datareachable.net/v2/dev";
        break;
    case "production":
        redirectToSignInPage = `${oidcServiceUrl}/entry?app=${marketApp}&lang=${lang}`;
        redirectToSignOutPage = `${oidcServiceUrl}/logout?app=${marketApp}`;
        redirectToCompanyWebsite = "https://www.datareachable.com";
        redirectToSignUpPage = "https://signup.dev.datareachable.net/v2/dev";
        redirectToProfilePage = "https://profile.dev.datareachable.net/v2/dev";
        redirectToDashBoardPage = "https://dashboard.dev.datareachable.net/v2/dev";
        redirectToSurveyPMPage = "https://spm.dev.datareachable.net/v2/dev";
        redirectToSurveyDisPage = "https://dist.dev.datareachable.net/v2/dev";
        redirectToMarketPage = "https://market.dev.datareachable.net/v2/dev";
        redirectToCommunityPage = "https://cmty.dev.datareachable.net/v2/dev";
        break;
    default:
        redirectToSignInPage = `${oidcServiceUrl}/entry?app=${marketApp}&lang=${lang}`;
        redirectToSignOutPage = `${oidcServiceUrl}/logout?app=${marketApp}`;
        redirectToCompanyWebsite = "https://www.datareachable.com";
        redirectToSignUpPage = "https://signup.dev.datareachable.net/v2/dev";
        redirectToSurveyPMPage = "https://spm.dev.datareachable.net/v2/dev";
        redirectToDashBoardPage = "https://dashboard.dev.datareachable.net/v2/dev";
        redirectToSurveyDisPage = "https://dist.dev.datareachable.net/v2/dev";
        redirectToMarketPage = "https://market.dev.datareachable.net/v2/dev";
        redirectToCommunityPage = "https://cmty.dev.datareachable.net/v2/dev";
        break;
}

export {
    redirectToSignInPage,
    redirectToSignOutPage,
    redirectToCompanyWebsite,
    redirectToSignUpPage,
    redirectToProfilePage,
    redirectToDashBoardPage,
    redirectToSurveyPMPage,
    redirectToSurveyDisPage,
    redirectToMarketPage,
    redirectToCommunityPage,
};
