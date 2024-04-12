import type { AppProps } from 'next/app'
import type { LayoutProps } from '@vercel/examples-ui/layout'
import { getLayout } from '@vercel/examples-ui'
import '@vercel/examples-ui/globals.css'
import { aemPageApiContentMockData } from '@acme/pages/app/aemPageApiContentMockData'
import { axiosInstanceAemContent } from '@acme/utils/apiSetup'

const MyApp = ({ Component, pageProps, aemContent }: any) => {
  const Layout = getLayout<LayoutProps>(Component)
  console.log(aemContent);

  return (
    <Component {...pageProps} />
  )
}


MyApp.getInitialProps = async () => {
  try {
    const { data } = await axiosInstanceAemContent().get(
      "/graphql/execute.json/ardx_colibri/colibri_pq_all_colibri_content"
    );


    return {
      aemContent: data,
      dummy: "FIRST BLOCK",
    };
  } catch (e) {
    console.log("AEM ERROR: ", e);
    return { aemContent: aemPageApiContentMockData, dummy: e };
  }
};

export default MyApp;
