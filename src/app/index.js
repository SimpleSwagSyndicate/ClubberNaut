export async function getStaticProps() {
  return {
    db: {
      url: process.env.SUPABASE_URL,
      key: process.env.SUPABASE_KEY,
    },
  };
}
