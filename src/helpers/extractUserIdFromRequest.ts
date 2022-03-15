import type { Request } from 'express';
import jwtDecode, { JwtPayload } from 'jwt-decode';

export default function extractUserIdFromRequest(req: Request): number | undefined {
  const token = req.get('Authorization')?.replace(/Bearer\s/, '');

  if (!token) return;

  const decoded = jwtDecode<JwtPayload>(token);

  return Number(decoded.sub);
}
