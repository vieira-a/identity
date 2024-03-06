import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class LocationInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest<Request>();
    const basePath = `/api/v1${request.baseUrl}`;

    return next.handle().pipe(
      map((response) => {
        if (response?.data) {
          const guid = response.data;
          const responseObj = context.switchToHttp().getResponse();
          const locationUrl = `${request.protocol}://${request.get('host')}${basePath}/${guid}`;
          responseObj.setHeader('Location', locationUrl);
        }
        return response;
      }),
    );
  }
}
