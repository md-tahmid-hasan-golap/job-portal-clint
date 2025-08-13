export const myApplicationPromised = (email) => {
  return fetch(`https://job-portal-server-khaki-phi.vercel.app/application?email=${email}`).then((res) =>
    res.json()
  );
};