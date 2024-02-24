"use client";
import { useFormState, useFormStatus } from "react-dom";
import { authenticate } from "@/app/lib/actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { TypographyP } from "@/components/ui/TypographyP";
import { TypographyH2 } from "@/components/ui/TypographyH2";

type LoginFormProps = {
  loginButtonClicked: boolean;
  setLoginButtonClicked: (clicked: boolean) => void;
};

const formSchema = z.object({
  email: z.string(),
  password: z.string(),
});

const LoginForm: React.FC<LoginFormProps> = ({
  loginButtonClicked,
  setLoginButtonClicked,
}) => {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <Card className="w-fit mx-auto my-5">
      <CardContent className="pt-6">
        <TypographyH2>Login</TypographyH2>
        <Form {...form}>
          <form action={dispatch} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex items-center gap-2">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="flex items-center gap-2">
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <LoginButton
              loginButtonClicked={loginButtonClicked}
              setLoginButtonClicked={setLoginButtonClicked}
            />

            {errorMessage && (
              <>
                <TypographyP className="text-red-500">
                  {errorMessage}
                </TypographyP>
                {setLoginButtonClicked(false)}
              </>
            )}
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

const LoginButton: React.FC<LoginFormProps> = ({
  loginButtonClicked,
  setLoginButtonClicked,
}) => {
  const { pending } = useFormStatus();

  return (
    <Button
      onClick={() => {
        setLoginButtonClicked(true);
      }}
    >
      Sign in
    </Button>
  );
};

export default LoginForm;
