export default async function Home() {
  const data = await fetch("http://localhost:3001/users", {
    method: "GET",
    headers: {
      authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImVtYWlsIjoibGhhZ3ZhYUBleGFtcGxlLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc3Mzk3ODE4OSwiZXhwIjoxNzczOTgxNzg5fQ.fN-whYTLGATyd00zpa63SBd7oP8u3nVMNDV1nBuraMU`,
    },
  });
  const users = await data.json();
  console.log(users);
  return <div>"ok"</div>;
}
