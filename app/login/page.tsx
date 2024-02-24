import { signIn } from "@/auth";
import SigninBtn from "@/components/shared/SigninBtn";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const page = async () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Card className="p-20 text-center flex flex-col gap-5">
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
