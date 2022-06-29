import "../styles/globals.css";
import { Toaster } from "react-hot-toast";
import { UserProvider } from "../UserProvider";
import { NhostNextProvider, NhostClient } from "@nhost/nextjs";

const nhost = new NhostClient({
   backendUrl: process.env.NEXT_PUBLIC_NHOST_BACKEND_URL || "",
});

function MyApp({ Component, pageProps }) {
   return (
      <NhostNextProvider nhost={nhost} initial={pageProps.nhostSession}>
         <UserProvider>
            <Component {...pageProps} />
            <Toaster />
         </UserProvider>
      </NhostNextProvider>
   );
}
