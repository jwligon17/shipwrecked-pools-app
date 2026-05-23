import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
  getHealth(): {
    status: 'ok';
    service: 'shipwrecked-api';
    environment: string;
    timestamp: string;
  } {
    return {
      status: 'ok',
      service: 'shipwrecked-api',
      environment: process.env.APP_ENV ?? 'development',
      timestamp: new Date().toISOString(),
    };
  }
}
