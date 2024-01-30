"use client";

import React, { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";

interface Props {
  children: ReactNode;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
    },
  },
});

const Providers = (props: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>{props.children}</SessionProvider>;
    </QueryClientProvider>
  );
};

export default Providers;
