import { GetServerSideProps } from "next";
import cookie from "cookie";
import client from "./apolloclient";
import { CurrentUserDocument, CurrentUserQuery } from "./generated";

type Props = {
  // define the props for the page here
};

type Options = {
  // define any options for the function here
};

export const withAuth = (options: Options): GetServerSideProps<Props> => {
  return async (context) => {
    const { req } = context;
    // const cookies = cookie.parse(req.headers.cookie || "");
    // const token = cookies.token;
    // const refresh_token = cookies.refresh_token;
    const { data } = await client.query<CurrentUserQuery>({
      query: CurrentUserDocument,
      context: {
        headers: {
          cookie: req.headers.cookie,
        },
      },
    });

    if (!data.currentUser) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }

    return {
      props: {},
    };
  };
};
