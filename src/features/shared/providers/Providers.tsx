"use client";

import React, { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthContextProvider } from "../contexts/AuthContext";

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
      <AuthContextProvider>{props.children}</AuthContextProvider>
    </QueryClientProvider>
  );
};

export default Providers;
