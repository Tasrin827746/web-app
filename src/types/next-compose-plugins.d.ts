declare module 'next-compose-plugins' {
    import { NextConfig } from 'next';
    type Plugin = (
      nextConfig: NextConfig
    ) => Partial<NextConfig> | Promise<Partial<NextConfig>>;
  
    export default function withPlugins(
      plugins: Plugin[],
      nextConfig?: NextConfig
    ): NextConfig;
  }
  