"use client";
import { useState } from "react";
import { addUser } from "@/app/lib/actions";
import SignUpLoader from "./SigningUp";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  useremail: z.string(),
  password: z.string(),
});
const SignUp = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      useremail: "",
      password: "",
    },
  });
  const [buttonClicked, setButtonClicked] = useState(false);

  return (
    <Card className="w-3/2">
      <CardContent>
        <Form {...form}>
          <form className=" space-y-4 w-full" action={addUser}>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="flex items-center gap-2">
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Username..." {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="useremail"
              render={({ field }) => (
                <FormItem className="flex items-center gap-2">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email..." type="email" {...field} />
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
                    <Input placeholder="password..." type="password" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="flex flex-col space-y-3 items-center">
              <Button
                type="submit"
                onClick={() => {
                  setButtonClicked(true);
                }}
                className="w-full"
              >
                Sign up
              </Button>

              <p>OR</p>
              <Button asChild className="w-full">
                <Link href="/login">Log in</Link>
              </Button>
            </div>
          </form>
        </Form>
        {buttonClicked ? <SignUpLoader /> : ""}
      </CardContent>
    </Card>
  );
};

export default SignUp;
