import React, { useEffect, useState } from "react";
import styles from "@/styles/Console.module.css";

const Console = () => {
  const [text, setText] = useState("");
  const buildOutput = `
    $ npm run build

    > rod@0.1.0 build
    > next build


    ./src/components/Integrants/readmos/IntegrantReadmos.tsx
    93:9  Warning: Using \`<img>\` could result in slower LCP and higher bandwidth. Consider using \`<Image />\` from \`next/image\` to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
    93:9  Warning: img elements must have an alt prop, either with meaningful text, or an empty string for decorative images.  jsx-a11y/alt-text    

    ./src/views/Technologies.tsx        
    20:18  Warning: Using \`<img>\` could 
    result in slower LCP and higher bandwidth. Consider using \`<Image />\` from \`next/image\` to automatically optimize images. This may incur additional usage or cost from your provider- info Collecting page data
    - info Generating static pages (10/10)
    - info Finalizing page optimization 

    Route (pages)
          Size     First Load JS       
    ┌ ○ /
          1.24 kB          80 kB       
    ├   └ css/94efd7a619f3678b.css      
          1.74 kB
    ├   /_app
          0 B            74.9 kB       
    ├ ○ /404
          182 B          75.1 kB       
    ├ λ /api/hello
          0 B            74.9 kB       
    ├ ○ /auxDescription (1549 ms)       
          1.2 kB          134 kB       
    ├   └ css/f556984f72128fd9.css      
          551 B
    ├ ○ /auxFooter (1560 ms)
          330 B          96.3 kB       
    ├ ○ /auxHero (1560 ms)
          527 B          96.5 kB       
    ├   └ css/0f0be32ae6bd78e8.css      
          241 B
    ├ ○ /auxIntegrants (941 ms)
          20.6 kB         177 kB       
    ├   └ css/abe87d0211b2a009.css      
          5.67 kB
    ├ ○ /auxProjects (2183 ms)
          21.3 kB         177 kB       
    ├   └ css/8dca290f83222ea9.css      
          5.92 kB
    ├ ○ /auxServices (1554 ms)
          328 B          96.3 kB       
    └ ○ /auxTechnologies (1607 ms)      
          828 B          96.8 kB       
        └ css/1d6d689664795ae4.css      
          149 B
    + First Load JS shared by all       
          75.8 kB
      ├ chunks/framework-305cb810cde7afac.js   45.2 kB
      ├ chunks/main-bfbd70c9b9a5a25b.js 
          28.4 kB
      ├ chunks/pages/_app-5fbdfbcdfb555d2f.js  296 B
      ├ chunks/webpack-36d12a75f0098f30.js     1.04 kB
      └ css/24b609945d45f95c.css        
          878 B

    λ  (Server)  server-side renders at 
    runtime (uses getInitialProps or getServerSideProps)
    ○  (Static)  automatically rendered 
    as static HTML (uses no initial props)
  `;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText((prev) => prev + buildOutput[index]);
      index += 1;
      if (index === buildOutput.length) {
        clearInterval(interval);
      }
    }, 10);
    return () => clearInterval(interval);
  }, [buildOutput]);

  return <pre className={styles.console}>{text}</pre>;
};

export default Console;
