import { Button } from "@/components/Button";
import { getAppleDevices } from "@/api/apple";
import { LogoutButton } from "@/components/LogoutButton";

export default async function Home() {
  const data = await getAppleDevices(true);
  return (
    <>
      <h1>Hello</h1>
      <p>hot reload</p>
      <ul>
        {data.devices.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
      <div><Button/></div>
      <div><LogoutButton/></div>
    </>
  );
}
