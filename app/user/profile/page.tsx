import InfoCustomer from "@/ui/forms/InfoCustomer";
import Image from "next/image";
import { Suspense } from "react";

export default function Page() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <InfoCustomer />
      </Suspense>
    </div>
  );
}
