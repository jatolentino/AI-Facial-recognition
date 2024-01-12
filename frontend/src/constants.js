let ENVIRONMENT = process.env.ENVIRONMENT
let DEBUG = process.env.REACT_APP_DEBUG
// base is the url of the backend HOST like "http://127.0.0.1:8000"
let base = process.env.REACT_APP_PROD_URL;
let stripePublishKey = process.env.REACT_APP_STRIPE_PUBLISH_KEY_DEV

if (ENVIRONMENT === 'PRODUCTION') {
  // on debug false, input your production stripepublishKey
  base = process.env.REACT_APP_PROD_URL
  stripePublishKey = process.env.REACT_APP_STRIPE_PUBLISH_KEY_PROD
} else if (ENVIRONMENT === 'DEVELOPMENT') {
  base = process.env.REACT_APP_DEV_URL
  stripePublishKey = process.env.REACT_APP_STRIPE_PUBLISH_KEY_DEV
}

export { stripePublishKey };
export const APIEndpoint = new URL("/api", base).toString();
export const fileUploadURL = new URL("/api/demo/", base).toString();
export const facialRecognitionURL = new URL("/api/upload/", base).toString();
export const emailURL = new URL("/api/email/", base).toString();
export const changeEmailURL = new URL("/api/change-email/", base).toString();
export const changePasswordURL = new URL("/api/change-password/", base).toString();
export const billingURL = new URL("/api/billing/", base).toString();
export const subscribeURL = new URL("/api/subscribe/", base).toString();
export const APIkeyURL = new URL("/api/api-key/", base).toString();
export const cancelSubscriptionURL = new URL("/api/cancel-subscription/", base).toString();

export const loginURL = new URL("/rest-auth/login/", base).toString();
export const signupURL = new URL("/rest-auth/registration/", base).toString();

export const CLOUDINARY_API_KEY = process.env.REACT_APP_CLOUDINARY_API_KEY;
export const CLOUDINARY_API_SECRET = process.env.REACT_APP_CLOUDINARY_API_SECRET;
export const CLOUDINARY_CLOUD_NAME = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME; 