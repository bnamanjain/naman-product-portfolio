/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  trailingSlash: true,
  ...(process.env.SITES_BUILD === "1" ? {} : { output: "export" }),
};

export default nextConfig;
