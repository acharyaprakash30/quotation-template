"use client"
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const page = ({children}: any) => {
  const router = useRouter();
  const redirectHome = () => {
    router.push("/quotation/create");
  };
  useEffect(() => {
    redirectHome();
  });

  return <div>{children}</div>;
};

export default page;
