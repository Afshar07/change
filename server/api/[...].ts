
export default defineEventHandler(async (event) => {
  const url = (event.node.req.url as string).replace(
    /^\/api/,
    "https://changekon.com/api"
  );
  console.log(url);
  return await $fetch(url, {
    // Your code
  });
});
