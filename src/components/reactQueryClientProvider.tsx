"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Children } from "react"


const queryClient = new QueryClient();
export const ReactQueryClientProvider = ({children} : { children : React.ReactNode}) => (

    <QueryClientProvider client={queryClient}>
    {children}
    </QueryClientProvider>
)
