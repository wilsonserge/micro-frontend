import { aemPageApiContentMockData } from "./aemPageApiContentMockData";
import { axiosInstanceAemContent } from "@acme/utils/apiSetup"

export async function getStaticProps() {
    try {
        const { data } = await axiosInstanceAemContent().get(
            "/graphql/execute.json/ardx_colibri/colibri_pq_all_colibri_content"
        );

        return {
            props: {
                aemContent: [],
                dummy: "FIRST BLOCK",
            }
        };
    } catch (e) {
        console.log("AEM ERROR: ", e);
        return { props: { aemContent: aemPageApiContentMockData, dummy: "" } };
    }
}
