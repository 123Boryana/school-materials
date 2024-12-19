import { SESClient } from "@aws-sdk/client-ses";


export const DATABASE = "mongodb://127.0.0.1:27017/school_materials";
export const AWS_ACCESS_KEY_ID = "";
export const AWS_SECRET_ACCESS_KEY = "";

export const EMAIL_FROM = '"School Materials" <boryanaglavchevab2021@gmail.com>';
export const REPLY_TO = "boryanaglavchevab2021@gmail.com";

// AWS SES client setup for AWS SDK v3
export const AWSSES = new SESClient({
    region: "eu-north-1",
    credentials: {
        accessKeyId: AWS_ACCESS_KEY_ID,
        secretAccessKey: AWS_SECRET_ACCESS_KEY,
    },
});

export const JWT_SECRET = "";
export const CLIENT_URL = "http://localhost:3000";
