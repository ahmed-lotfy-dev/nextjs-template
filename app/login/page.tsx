import { signIn } from "@/auth";
import SigninBtn from "@/components/shared/SigninBtn";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const page = async () => {
  return (
    <div className=" flex h-screen w-full items-center justify-center">
      <Card className="flex flex-col gap-5 p-20 text-center">
        <p>Sign In 👇 </p>
        <div className="flex flex-col gap-5">
          <SigninBtn provider="google" />
          <SigninBtn provider="github" />
        </div>
      </Card>
    </div>
  );
};

export default page;
