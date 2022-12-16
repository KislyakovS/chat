import type { ErrorResponse } from '../types';

export default (data: any): data is ErrorResponse => Boolean(data?.reason);
