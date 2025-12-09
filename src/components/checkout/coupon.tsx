import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import FormItemInput from "../form/form-item-input";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { Button } from "../ui/button";

const FormSchema = z.object({
  coupon: z.string(),
});
const CouponForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      coupon: "",
    },
  });

  const submitForm = (data: z.infer<typeof FormSchema>) => {
    console.log(data);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submitForm)}>
        <div className="flex item-center border border-blue-500 rounded-md">
          <FormItemInput
            form={form}
            name="coupon"
            placeholder="Promo or Coupon"
            className="w-full"
            inputClassName="border-none shadow-none "
          />
          <Button className="bg-blue-500 hover:bg-blue-500 shadow-none border-none text-white rounded-l-none">
            Apply
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default CouponForm;
