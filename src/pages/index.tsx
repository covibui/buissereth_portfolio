import Head from "next/head";
import Layout from "@/components/Layout";
import { GetStaticProps } from "next";
import { ProjectFrontMatter, ProjectType } from "@/types";
import Link from "next/link";
import { getSortedProjects } from "@/lib/projects";
import { siteTitle } from "@/lib/constants";

interface Props {
    projects: Record<ProjectType, ProjectFrontMatter[]>;
}

export default function Home({ projects }: Props) {
    return (
        <>
            <Layout>
                <Head>
                    <title>{siteTitle}</title>
                </Head>
                <section>
                    <p>
                        Culpa est amet adipisicing ad. Labore id duis Lorem
                        laboris pariatur laborum Lorem dolor aute voluptate
                        eiusmod esse excepteur qui ex.
                    </p>
                    <p>
                        Non ad ex aute ad ex exercitation. Consequat ea mollit
                        quis mollit minim ut eiusmod voluptate consequat ipsum
                        fugiat exercitation mollit anim laborum. Culpa anim
                        exercitation duis sint enim consequat sint laborum
                        reprehenderit pariatur nisi culpa.
                    </p>
                </section>
                <section>
                    <h2>Blog</h2>
                    <ul>
                        {projects.work.length > 0 &&
                            projects.work.map(({ slug, title, type }, idx) => (
                                <li key={idx}>
                                    <Link href={`/projects/${slug}`}>
                                        {title} - {type}
                                    </Link>
                                </li>
                            ))}
                        {projects.college.length > 0 &&
                            projects.college.map(
                                ({ slug, title, type }, idx) => (
                                    <li key={idx}>
                                        <Link href={`/projects/${slug}`}>
                                            {title} - {type}
                                        </Link>
                                    </li>
                                )
                            )}
                    </ul>
                    <p>Esse velit sunt proident ex consequat dolor est aliqua nostrud reprehenderit ea do ad voluptate. Ullamco eiusmod cillum sunt aliquip amet duis ullamco officia consectetur officia consequat deserunt et culpa dolore. Sit aliquip esse consequat ad enim consequat amet ullamco ea commodo consectetur officia esse occaecat. Consequat incididunt officia minim magna sunt eiusmod incididunt. Aute eiusmod eu sunt laborum duis enim. Sunt pariatur culpa nulla labore esse cupidatat pariatur magna duis reprehenderit elit excepteur aute nostrud. Proident sint labore ullamco occaecat duis labore velit deserunt ea aliquip est.

Quis veniam tempor deserunt aliquip. Sint fugiat sunt dolor. Duis eiusmod duis quis ut. Velit enim aliquip ex aute irure occaecat duis. Elit nostrud aliqua nostrud commodo. Reprehenderit proident ex voluptate eiusmod proident. Qui enim dolor nulla consequat ut nisi Lorem cillum ea aliquip est. In mollit incididunt magna ea aliquip ad voluptate quis excepteur pariatur consequat.

Incididunt mollit veniam qui non voluptate pariatur reprehenderit mollit et esse ex dolor. Voluptate mollit commodo amet fugiat. Excepteur elit Lorem ex officia ex amet et ut voluptate dolor proident laboris enim elit sint. Adipisicing cillum officia nostrud labore velit ipsum laborum commodo consequat dolor. Incididunt mollit in est consequat. Ad consequat et commodo eu commodo dolor mollit commodo sint. Occaecat ad veniam proident duis pariatur id et sit mollit non eiusmod ex aliqua veniam. Tempor exercitation sint aliqua veniam amet ex ad irure commodo irure irure.

Elit dolor cillum tempor. Qui adipisicing commodo non ea esse qui esse ex sint do reprehenderit esse. Cupidatat irure sunt sint ea eiusmod aliquip commodo nulla ad fugiat. Lorem incididunt sint excepteur est sit aute proident sint aliqua et laborum et enim deserunt. Nostrud nulla aliquip culpa quis excepteur mollit pariatur. Eiusmod voluptate esse laboris id consequat ea. Irure esse aliqua ipsum sit excepteur esse excepteur sit labore deserunt eiusmod veniam mollit proident exercitation.

Qui nulla eu est aute irure. Nisi magna minim ut. Qui velit adipisicing anim proident voluptate aute nisi ea est ipsum pariatur. Ut elit in ea nulla nulla ipsum. Esse eiusmod id sit elit et anim fugiat aliquip ad dolore. Incididunt esse eu reprehenderit irure cupidatat.

Eu eiusmod nostrud id eu ipsum ex dolore duis commodo ipsum. Proident dolore velit quis do laboris ullamco. Ullamco cillum et velit deserunt quis quis reprehenderit. Pariatur sint non cupidatat adipisicing incididunt tempor incididunt labore ipsum sint. Est deserunt excepteur consectetur cupidatat Lorem. Sint fugiat in enim.

Id exercitation eiusmod nostrud fugiat aliqua. Amet elit labore ipsum irure consectetur nostrud proident officia sit cillum elit ullamco eiusmod nostrud. Ut fugiat esse aliquip. Adipisicing in eiusmod Lorem et non reprehenderit duis proident cupidatat pariatur amet. Amet reprehenderit ullamco pariatur laboris sunt sit adipisicing aliquip reprehenderit commodo id in minim aute veniam. Voluptate sit occaecat voluptate cupidatat exercitation do. Nisi Lorem nisi dolor reprehenderit adipisicing eu ad.

Ex quis reprehenderit exercitation ut. Sint tempor ullamco pariatur non do excepteur ea. Ad veniam tempor cupidatat exercitation enim ipsum aliqua. Esse adipisicing commodo laboris adipisicing reprehenderit ex.

Ut ea incididunt tempor nisi id anim excepteur ad Lorem ea. Ex veniam ex Lorem mollit tempor minim aliquip et esse aliquip. Consectetur ipsum dolore excepteur cupidatat. Ipsum mollit pariatur consectetur fugiat. Ad ex aute sint ut tempor ea sit commodo laboris consectetur. Reprehenderit culpa amet et ut nulla adipisicing laboris ut pariatur aute. Esse elit ad mollit ut labore minim ut.

Sit duis enim ut dolor. Eiusmod fugiat elit nostrud. Consectetur enim reprehenderit amet cupidatat occaecat mollit aliquip dolore eiusmod mollit qui sint ad minim. Consequat velit labore est anim laborum fugiat dolor cillum Lorem pariatur deserunt tempor. Cupidatat cupidatat enim culpa est qui esse exercitation magna duis consectetur sunt. Est sint tempor do amet minim amet id laborum qui reprehenderit et sunt. Amet minim esse labore consectetur adipisicing aliqua enim laboris ut ut voluptate.

Excepteur aute magna sunt nisi sunt ad labore. Duis commodo officia excepteur proident quis laborum. Qui in eiusmod quis laboris. Cillum voluptate non sunt anim sint eiusmod. Id ullamco sint eiusmod pariatur sunt ex mollit. Et duis id irure laboris nulla. Nisi in dolore id duis cupidatat id.

Cillum Lorem exercitation laboris officia elit cillum do excepteur qui. Deserunt aute elit reprehenderit est fugiat occaecat do sunt veniam cillum tempor. Esse eu excepteur fugiat reprehenderit velit veniam velit ullamco sint. Deserunt ullamco qui fugiat ex. Officia mollit aliqua fugiat sunt eu non excepteur ad sit. In proident nulla sit. Consequat qui nostrud mollit deserunt ex enim commodo culpa sit dolore aliquip sit commodo non dolor.

Elit ex elit ipsum dolor consequat elit. Duis tempor sunt id incididunt fugiat consequat. Veniam voluptate irure amet velit do. Magna deserunt exercitation dolor quis occaecat dolor exercitation eiusmod esse. Tempor esse labore commodo sint labore ad qui do ullamco commodo nulla.

Quis esse ex minim aliquip sint nisi aliquip. Enim excepteur Lorem quis veniam aliqua dolor ea laborum. Ullamco sint Lorem sit tempor do veniam eiusmod commodo ullamco laboris. Incididunt sunt eiusmod mollit. Deserunt aliqua incididunt aliquip quis irure. Ex exercitation non dolor. Adipisicing consequat excepteur sint ex ipsum eiusmod do voluptate. Aliqua velit veniam incididunt.

Reprehenderit cupidatat id veniam id laborum. Fugiat incididunt labore incididunt velit quis elit mollit ullamco dolore sit. Esse pariatur proident eiusmod culpa dolore sint velit velit consequat eiusmod excepteur. Ad anim enim sint incididunt ex amet officia. Quis occaecat culpa veniam tempor cupidatat nulla tempor dolore dolor deserunt deserunt et commodo ea veniam.

Quis incididunt incididunt laborum labore sunt. Exercitation dolor adipisicing tempor laborum magna esse cillum dolor culpa occaecat deserunt esse anim. Duis officia mollit ex officia cillum laborum dolore ipsum sint reprehenderit aliqua in. Quis mollit ex ea tempor eu ipsum proident excepteur laborum veniam cillum dolore. Ex commodo duis occaecat amet Lorem ex quis nisi excepteur veniam fugiat culpa magna nostrud proident. Excepteur id dolore eu qui in dolore reprehenderit. Nostrud tempor laboris officia voluptate laboris veniam veniam enim id velit laboris cupidatat in duis fugiat.

Exercitation amet ipsum ea aliqua. Pariatur elit ullamco in elit aute sit duis ea eiusmod voluptate. Esse eiusmod quis minim do esse laborum minim eu irure quis fugiat occaecat consequat. Eu veniam excepteur officia cillum est et non cillum irure deserunt. Est sint exercitation ex esse excepteur labore labore ullamco veniam elit incididunt nostrud incididunt ipsum esse. Officia eiusmod veniam in id mollit deserunt sit magna.

Laborum proident dolor commodo. Dolore deserunt consectetur adipisicing ad ex officia officia. Sunt deserunt nostrud Lorem aliquip aliquip veniam. Nisi occaecat ipsum id cupidatat nisi cillum sunt ex exercitation mollit veniam id voluptate occaecat incididunt.

Reprehenderit ut laboris consequat veniam. Eiusmod anim veniam fugiat aute laboris anim consectetur veniam. Irure consectetur ut commodo quis. Magna tempor exercitation non aliqua qui ex et sunt anim eu commodo occaecat aliquip. Sunt dolore mollit occaecat. Cillum excepteur fugiat Lorem id. Commodo laboris in ipsum irure duis dolor laborum sint adipisicing fugiat aliqua nostrud voluptate ullamco sint.

Magna nostrud ullamco elit eiusmod proident enim pariatur commodo nostrud consectetur nisi commodo ut reprehenderit dolor. Consectetur occaecat sint dolore duis. In aute quis deserunt anim. Culpa consequat amet et proident. Duis officia consequat aute. Id quis minim culpa ad labore commodo ea quis.</p>
                </section>
            </Layout>
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const projects = getSortedProjects();
    return {
        props: {
            projects,
        },
    };
};
