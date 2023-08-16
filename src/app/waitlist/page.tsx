"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z
    .string({
      required_error: "Please enter an email",
    })
    .email(),
  type: z.enum(["company", "tester"], {
    required_error: "Please select",
  }),
});

type FormSchema = z.infer<typeof formSchema>;

const Page = () => {
  const router = useRouter();
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(data: FormSchema) {
    toast.success("Success! You will get notified when the product releases");
    router.push("/");
  }

  return (
    <>
      <div className="container">
        <h1 className="font-heading tracking-tighter text-3xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
          Join the waitlist
        </h1>
        <p className="text-lg font-heading">
          The product will be launching soon, to get your hands on first, join
          our waitlist
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="max-w-[38rem] mt-4 gap-2 flex items-center">
                  <FormLabel className="text-lg font-semibold tracking-tighter">
                    Your Email
                  </FormLabel>
                  <Input
                    className="max-w-[32rem]"
                    onChange={field.onChange}
                    defaultValue={""}
                  />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem className="flex items-center mt-4 gap-4">
                  <FormLabel className="text-lg font-semibold tracking-tighter">
                    What describes you the best?{" "}
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="company">Company</SelectItem>
                        <SelectItem value="tester">Tester</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <Button className="mt-4" type="submit">
              Let&apos;s go
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
};

export default Page;
