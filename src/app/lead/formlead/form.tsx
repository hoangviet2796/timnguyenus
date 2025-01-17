"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import "./input.css";
// Hàm định dạng tiền tệ USD
function formatCurrency(value: string): string {
  const numericValue = value.replace(/[^0-9.]/g, "");
  if (!numericValue) return "";
  const parts = numericValue.split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return `$${parts.join(".")}`;
}
const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." })
    .regex(/^[a-zA-Z\s]*$/, { message: "Name can only contain letters." }),
  phone: z.string().min(5, {
    message: "This is not a valid phone.",
  }),
  zipcode: z.string().regex(/^([0-9]{5})(?:[-\s]*([0-9]{4}))?$/, {
    message: "Invalid zipcode format.",
  }),
  debtAmount: z
    .string()
    .regex(/^\$?(\d{1,3}(,\d{3})*|(\d+))(\.\d{2})?$/, {
      message: "Enter a valid amount (e.g., $1,000.00 or 1000).",
    })
    .refine((value) => parseFloat(value.replace(/[$,]/g, "")) > 0, {
      message: "Amount must be greater than 0.",
    }),

  debtTypes: z.array(z.string()).optional(),
  callTime: z.string().optional(),
});
function onSubmit(values: z.infer<typeof formSchema>) {
  console.log("Dữ liệu form:", JSON.stringify(values, null, 2));
  // Do something with the form values.
  // ✅ This will be type-safe and validated.
  toast("Thông tin của bạn đã được tiếp nhận", {
    action: {
      label: "X",
      onClick: () => console.log("X"),
    },
  });
}
export default function FormLead() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      zipcode: "",
      debtAmount: "",
      debtTypes: [],
      calltime: "",
    },
  });
  return (
    <div className="bg-white w-full h-full mx-auto flex flex-col items-center justify-center py-6 mt-4">
      <div className="w-full max-w-lg h-auto bg-[#F8D578] rounded-3xl shadow-md p-6">
        <h2 className="text-[#940000] text-2xl text-center mb-2 font-bold">
          Đăng ký Tư vấn miễn phí <br /> Chương trình giảm nợ 2024
        </h2>
        <p className="text-center text-lg text-[#032D65] mb-3">
          Miễn phí tư vấn và làm hồ sơ <br /> An toàn và bảo mật thông tin
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            
            {/* Input Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="NAME"
                      className="custom-input"
                      {...field}
                      onInput={(e) => {
                        e.currentTarget.value = e.currentTarget.value.replace(
                          /[^a-zA-Z\s]/g,
                          ""
                        );
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Input Phone */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="PHONE"
                      formatPhone // Bật định dạng số điện thoại
                      className="custom-input"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Input Zipcode */}
            <FormField
              control={form.control}
              name="zipcode"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="ZIPCODE"
                      {...field}
                      className="custom-input"
                      onInput={(e) => {
                        e.currentTarget.value = e.currentTarget.value.replace(
                          /\D/g,
                          ""
                        ); // Chỉ giữ lại số
                      }}
                      onChange={(e) => {
                        field.onChange(e);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Input Số Nợ */}
            <FormField
              control={form.control}
              name="debtAmount"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="SỐ NỢ (eg: $1,000.00)"
                      className="custom-input"
                      {...field}
                      onInput={(e) => {
                        const value = e.currentTarget.value;
                        const formattedValue = formatCurrency(value);
                        e.currentTarget.value = formattedValue;
                        field.onChange(formattedValue);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Debt Types */}
            <FormField
              control={form.control}
              name="debtTypes"
              render={({ field }) => (
                <FormItem>
                  <div className="custom-input">
                    {["Nợ Credit", "Personal Loan", "Medical Bills"].map(
                      (type) => (
                        <div key={type} className="flex items-center">
                          <Checkbox
                            checked={(field.value as string[]).includes(type)}
                            onChange={(e) => {
                              const checked = e.target.checked;
                              const valueArray =
                                (field.value as string[]) || [];
                              if (checked) {
                                field.onChange([...valueArray, type]);
                              } else {
                                field.onChange(
                                  valueArray.filter((item) => item !== type)
                                );
                              }
                            }}
                            className="mr-2"
                          />
                          <span className="text-[#032D65]">{type}</span>
                        </div>
                      )
                    )}
                  </div>
                </FormItem>
              )}
            />

            {/* Input Call Time */}
            <FormField
              control={form.control}
              name="calltime"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Hẹn giờ gọi"
                      className="custom-input"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <p className="text-md text-[#032D65] text-center mt-4">
              * Chương trình này đã giảm 26 triệu USD <br /> cho hơn 51,000
              người Việt tại Mỹ
            </p>
          </form>
        </Form>
      </div>
      <div className="max-w-full mt-4 justify-center items-center">
        <Button
          type="submit"
          className="animate-zoom bg-[#F8D578] text-red-800 py-6 px-12 rounded-xl text-2xl font-bold hover:bg-red-800 hover:text-[#F8D578] shadow-custom"
          onClick={() => document.querySelector("form")?.requestSubmit()}
        >
          Đăng ký ngay
        </Button>
      </div>
    </div>
  );
}
