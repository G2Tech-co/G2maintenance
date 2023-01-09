import { env } from '$env/dynamic/public';

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();

    const first_name = formData.get("first_name");
    const last_name = formData.get("last_name");
    const email = formData.get("email");
    const tags = [env.PUBLIC_SENDPORTAL_TAG];

    const response = await fetch(
      env.PUBLIC_SENDPORTAL,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name,
          last_name,
          email,
          tags,
        }),
      }
    );

    return {
      status: response.status,
    };
  },
};
