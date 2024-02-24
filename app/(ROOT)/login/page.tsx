import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const page = async () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Card className="p-20">
        <div className="flex flex-col gap-5">
          <form
            action={async () => {
              "use server";
              await signIn("github");
            }}
          >
            <Button type="submit" variant={"outline"}>
              Sign in with Github
            </Button>
          </form>
          <form
            action={async () => {
              "use server";
              await signIn("google");
            }}
          >
            <Button type="submit" variant={"outline"}>
              Sign in with Google
            </Button>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default page;
