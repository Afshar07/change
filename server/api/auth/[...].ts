// file: ~/server/api/auth/[...].ts
import { NuxtAuthHandler } from "#auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";

const runtimeConfig = useRuntimeConfig();
export default NuxtAuthHandler({
  providers: [
    GithubProvider.default({
      clientId: "Iv1.5de076406c923230",
      clientSecret: "7a2d9a9dc8ec7d4628d8057b9d278de01ade31cd",
    }),
    GoogleProvider.default({
      clientId:
        "452697557944-1sa5q2nri9hn2obcd7v6b4j3ogbm5q5a.apps.googleusercontent.com",
      clientSecret: "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",
      httpOptions: {
        timeout: 50000,
      },
    }),
    // CredentialsProvider.default({
    //   // The name to display on the sign in form (e.g. 'Sign in with...')
    //   name: "Credentials",
    //   // The credentials is used to generate a suitable form on the sign in page.
    //   // You can specify whatever fields you are expecting to be submitted.
    //   // e.g. domain, username, password, 2FA token, etc.
    //   // You can pass any HTML attribute to the <input> tag through the object.
    //   credentials: {
    //     email: {
    //       label: "email",
    //       type: "email",
    //       placeholder: "(hint: @gmail.com)",
    //     },
    //     password: {
    //       label: "Password",
    //       type: "password",
    //       placeholder: "(hint: *******)",
    //     },
    //   },
    //   authorize(credentials: any) {
    //     // You need to provide your own logic here that takes the credentials
    //     // submitted and returns either a object representing a user or value
    //     // that is false/null if the credentials are invalid.
    //     // NOTE: THE BELOW LOGIC IS NOT SAFE OR PROPER FOR AUTHENTICATION!
    //     const user = {
    //       id: "1",
    //       name: "J Smith",
    //       email: "arian6865@gmail.com",
    //       password: "1234",
    //     };
    //     if (
    //       credentials?.email === user.email &&
    //       credentials?.password === user.password
    //     ) {
    //       // Any object returned will be saved in `user` property of the JWT
    //       return user;
    //     } else {
    //       // eslint-disable-next-line no-console
    //       console.error(
    //         "Warning: Malicious login attempt registered, bad credentials provided"
    //       );
    //       // If you return null then an error will be displayed advising the user to check their details.
    //       return null;
    //       // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
    //     }
    //   },
    // }),
  ],
});
