import { Button } from '@/components/Button';
import { getAppleDevices } from '@/api/apple';
import { LogoutButton } from '@/components/LogoutButton';
import { UpdateButton } from '@/components/UpdateButton';

export default async function Home() {
  const data = await getAppleDevices(true);
  return (
    <>
      <h1>App 1</h1>
      <p>hot reload</p>
      <ul>
        {data.devices.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div>
        <Button />
      </div>
      <div>
        <UpdateButton />
      </div>
      <div>
        <LogoutButton />
      </div>
    </>
  );
}
