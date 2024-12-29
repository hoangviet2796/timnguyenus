"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  phone: z.string().min(5, {
    message: "This is not a valid phone.",
  }),
  email: z
    .string()
    .min(1, {
      message: "This is not a valid email.",
    })
    .email("This is not a valid email."),
  zipcode: z.string().regex(/^([0-9]{5})(?:[-\s]*([0-9]{4}))?$/),
});

function onSubmit(values: z.infer<typeof formSchema>) {
  // Do something with the form values.
  // ✅ This will be type-safe and validated.
  toast("Thông tin của bạn đã được tiếp nhận", {
    action: {
      label: "X",
      onClick: () => console.log("X"),
    },
  });
  console.log(values);
}

const fields = [
  {
    name: "name",
    label: "Họ và tên",
    placeholder: "Your name",
  },
  {
    name: "phone",
    label: "Số điện thoại",
    placeholder: "Your phone number",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Your email",
  },
  {
    name: "zipcode",
    label: "Zipcode",
    placeholder: "zipcode",
  },
];
//<z.infer<typeof formSchema>>
export default function FormInfo() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      zipcode: "",
    },
  });

  return (
    <div className="bg-[#3e547b] w-full flex justify-center">
      <div className="w-[1280px] flex justify-around m-auto">
        <div className="w-1/2 text-white my-5 flex flex-col justify-center">
          <div className="flex flex-col w-full">
            <h3 className="text-4xl font-bold">Đăng ký ngay hôm nay</h3>
            <span className="text-2xl my-5">
              Để nhận được Payment plan miễn phí
            </span>
          </div>
          <div className="bg-white/10 w-2/3 p-5 mb-5">
            <h4 className="text-xl">Address</h4>
            <p>Irvine, CA, United States, California</p>
          </div>
          <div className="bg-white/10 w-2/3 p-5">
            <h4 className="text-xl">Contact:</h4>
            <p>Phone: 949-569-9698</p>
            <p>Email: timnguyenus.finance@gmail.com</p>
          </div>
        </div>
        <div className="w-1/2">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 bg-white w-full p-10 my-5 flex flex-col items-center"
            >
              {fields.map((f, i) => (
                <FormField
                  key={i}
                  control={form.control}
                  // @ts-ignore */}
                  name={f.name}
                  render={({ field }) => (
                    <div className="w-full h-[60px]">
                      <FormItem className="flex items-center w-full">
                        {/* <FormLabel className="w-1/3 text-2xl">
                        {f.label}
                      </FormLabel> */}
                        <FormControl>
                          <Input
                            className="text-xl bg-[#f6f6f4] rounded-none h-[50px]"
                            placeholder={f.label}
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                      <FormMessage className="text-base" />
                    </div>
                  )}
                />
              ))}
              <Button
                className="bg-[--text-primary-color] w-full h-[50px] text-xl font-bold"
                type="submit"
              >
                ĐĂNG KÝ NGAY
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
