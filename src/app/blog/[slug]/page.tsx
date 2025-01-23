import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import Link from "next/link";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  title,
  mainImage,
  publishedAt,
  content,
  tags[]->{
    name,
    slug
  }
}`

const components = {
    types: {
        code: ({value}: any) => (
            <div className="my-6 rounded-lg overflow-hidden">
                {value.filename && (
                    <div className="bg-gray-800 text-gray-200 px-4 py-2 text-sm">
                        {value.filename}
                    </div>
                )}
                <SyntaxHighlighter
                    language={value.language}
                    style={tomorrow}
                    showLineNumbers
                    wrapLines
                >
                    {value.code}
                </SyntaxHighlighter>
            </div>
        ),
        image: ({value}: any) => (
            <img
                src={urlFor(value)?.url()}
                alt={value.alt || ''}
                className="rounded-lg my-6"
            />
        )
    },
    block: {
        normal: ({children}: any) => <p className="my-4">{children}</p>,
        h1: ({children}: any) => <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>,
        h2: ({children}: any) => <h2 className="text-2xl font-bold mt-6 mb-3">{children}</h2>,
        blockquote: ({children}: any) => (
            <blockquote className="border-l-4 border-gray-300 pl-4 my-6 italic">
                {children}
            </blockquote>
        ),
    },
    marks: {
        link: ({value, children}: any) => (
            <a href={value?.href} className="text-blue-500 hover:underline">
                {children}
            </a>
        )
    }
};

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
    projectId && dataset
        ? imageUrlBuilder({ projectId, dataset }).image(source)
        : null;

const options = { next: { revalidate: 30 } };

export default async function PostPage({
                                           params,
                                       }: {
    params: { slug: string };
}) {
    const post = await client.fetch<SanityDocument>(POST_QUERY, params, options);
    const postImageUrl = post.image
        ? urlFor(post.image)?.width(550).height(310).url()
        : null;

    console.log(post);
    return (
        <main className="flex flex-col min-h-[100dvh] space-y-10">
            <Link href="/blog" className="hover:underline">
                ← Back to posts
            </Link>
            {postImageUrl && (
                <img
                    src={postImageUrl}
                    alt={post.title}
                    className="aspect-video rounded-xl"
                    width="550"
                    height="310"
                />
            )}
            <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
            <div className="prose">
                <p>Published: {new Date(post.publishedAt).toLocaleDateString()}</p>
                <PortableText value={post.content} components={components} />
            </div>
        </main>
    );
}