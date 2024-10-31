import { Button } from '@/components/Button';
import { LogoutButton } from '@/components/LogoutButton';
import { UpdateButton } from '@/components/UpdateButton';
import { UserInfo } from '@/components/UserInfo';

export default async function Home() {
  return (
    <>
      <h1>App 1</h1>
      <UserInfo />
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
