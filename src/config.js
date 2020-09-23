export default {
  MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "us-east-2",
      BUCKET: "guest-profile-image"
    },
    apiGateway: {
      REGION: "us-east-2",
      URL: "https://7ho7yeswq8.execute-api.us-east-2.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "us-east-2_yr0c1zsy4",
      APP_CLIENT_ID: "4v2ejlh26bj6nmggqtfdra0kpc",
      IDENTITY_POOL_ID: "us-east-2:5502b11c-51f2-4fb5-a0a1-0b2d7b04ba09"
    }
  };