import Layout from "../components/Layout";
import BreadcrumbArea from "../sections/BreadcrumbArea";
import ContactInfoArea from "../sections/ContactInfoArea";

export default function Contact() {
    return (
        <Layout page={"Me contacter"}>
            {/** contact-1.html **/}
            <BreadcrumbArea/>
            <ContactInfoArea/>
        </Layout>
    )
}