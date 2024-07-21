import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main style={{ width: "100%", height: 2800 }}>
        <iframe src="/Moobius-HTTP.html" width={"100%"} height={"100%"} />
      </main>
    </Layout>
  );
}
