declare module 'express-ip' {
  const expressIp: () => { getIpInfoMiddleware: any};
  export default expressIp;
}

declare namespace Express {
  export interface Request {
    ipInfo?: {
      ip: string;
    };
  }
}