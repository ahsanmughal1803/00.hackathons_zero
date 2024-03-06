import {createClient} from "next-sanity"
import imageUrlBuilder from "@sanity/image-url"

export const client =createClient({
    projectId: "iwavmvns",
    dataset: "production",
    apiVersion: "2024-02-21",
    useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source:any){
    return builder.image(source);
}