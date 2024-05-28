declare const process: {
  env: {
    NODE_ENV: 'dev' | 'prod';
  };
};

export const isDev = process.env.NODE_ENV === 'dev';
export const isProd = process.env.NODE_ENV === 'prod';
