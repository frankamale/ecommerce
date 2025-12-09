/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form } from "@/components/ui/form";
import FormItemInput from "@/components/form/form-item-input";
import FormItemSelect from "@/components/form/form-item-select";
import { Button } from "@/components/ui/button";
import { useState, type Dispatch, type SetStateAction } from "react";
import { useForm, type UseFormReturn } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface ShippingAddress {
  id: string;
  type: "self_pickup" | "personal" | "shop" | "other";
  fullName: string;
  phone: string;
  city: string;
  area: string;
  landmark: string;
  address: string;
  isDefault?: boolean;
}

const addressSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  type: z.enum(["personal", "shop", "other"]),
  phone: z.string().min(1, "Phone number is required"),
  city: z.enum(["kampala", "kikuubo"]),
  area: z.enum(["makindye", "kanyanya", "ntebbe", "lugazi"]),
  landmark: z.string().min(1, "Landmark is required"),
  address: z.string().min(1, "Address is required"),
});
type AddressFormData = z.infer<typeof addressSchema>;

const AddressForm = ({
  setAddresses,
  setShowAddAddressForm,
  setSelectedAddressId,
  checkoutForm,
}: {
  setAddresses: Dispatch<SetStateAction<ShippingAddress[]>>;
  setShowAddAddressForm: Dispatch<SetStateAction<boolean>>;
  setSelectedAddressId: Dispatch<SetStateAction<string>>;
  checkoutForm: UseFormReturn<
    {
      billingFirstName: string;
      billingLastName: string;
      billingEmail: string;
      billingPhone: string;
      selectedAddressId: string;
      deliveryDate: string;
      paymentMethod: "card" | "mobile_money" | "bank_transfer";
      acceptTerms: boolean;
    },
    any,
    {
      billingFirstName: string;
      billingLastName: string;
      billingEmail: string;
      billingPhone: string;
      selectedAddressId: string;
      deliveryDate: string;
      paymentMethod: "card" | "mobile_money" | "bank_transfer";
      acceptTerms: boolean;
    }
  >;
}) => {
  const [addressCounter, setAddressCounter] = useState(1);

  const addressForm = useForm<AddressFormData>({
    resolver: zodResolver(addressSchema),
    defaultValues: {
      fullName: "",
      type: "personal",
      phone: "",
      city: "kampala",
      area: "makindye",
      landmark: "",
      address: "",
    },
  });

  const handleAddAddress = (data: AddressFormData) => {
    const newAddress: ShippingAddress = {
      id: `address-${addressCounter}`,
      ...data,
    };

    setAddresses((prev) => [...prev, newAddress]);
    setSelectedAddressId(newAddress.id);
    checkoutForm.setValue("selectedAddressId", newAddress.id);
    setShowAddAddressForm(false);
    setAddressCounter((prev) => prev + 1);
    addressForm.reset();
  };
  return (
    <Form {...addressForm}>
      <form
        onSubmit={addressForm.handleSubmit(handleAddAddress)}
        className="space-y-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormItemInput
            form={addressForm}
            name="fullName"
            label="Full Name"
            placeholder="Enter full name"
          />
          <FormItemSelect
            form={addressForm}
            name="type"
            label="Address Type"
            placeholder="Select type"
            options={[
              { label: "Personal", value: "personal" },
              { label: "Shop", value: "shop" },
              { label: "Other", value: "other" },
            ]}
          />
        </div>

        <FormItemInput
          form={addressForm}
          name="phone"
          label="Phone Number"
          type="tel"
          placeholder="Enter phone number"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormItemSelect
            form={addressForm}
            name="city"
            label="City"
            placeholder="Select city"
            options={[
              { label: "Kampala", value: "kampala" },
              { label: "Kikuubo", value: "kikuubo" },
            ]}
          />
          <FormItemSelect
            form={addressForm}
            name="area"
            label="Area"
            placeholder="Select area"
            options={[
              { label: "Makindye", value: "makindye" },
              { label: "Kanyanya", value: "kanyanya" },
              { label: "Ntebbe", value: "ntebbe" },
              { label: "Lugazi", value: "lugazi" },
            ]}
          />
        </div>

        <FormItemInput
          form={addressForm}
          name="landmark"
          label="Landmark"
          placeholder="Enter landmark"
        />

        <FormItemInput
          form={addressForm}
          name="address"
          label="Address"
          placeholder="Enter full address"
        />

        <div className="flex gap-4">
          <Button type="submit">Add Address</Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => {
              setShowAddAddressForm(false);
              addressForm.reset();
            }}
          >
            Cancel
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default AddressForm;
