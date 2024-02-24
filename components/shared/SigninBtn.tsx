import { signIn } from "@/auth";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io";

type Props = {
  provider: string;
};

const SigninBtn = ({ provider }: Props) => {
  return (
    <form
      className="w-96"
      action={async () => {
        "use server";
        await signIn(provider);
      }}
    >
      <Button type="submit" variant={"outline"}>
        {provider === "google" && <FcGoogle className="mr-2" size={25} />}
        {provider === "github" && <IoLogoGithub className="mr-2" size={25} />}
        <span className="capitalize">{provider}</span>
      </Button>
    </form>
  );
};

export default SigninBtn;
