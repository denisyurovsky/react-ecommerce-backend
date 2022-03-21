import type { Request } from 'express';
import jwtDecode, { JwtPayload } from 'jwt-decode';

export default function extractUserIdFromRequest(req: Request): number | null {
  const token = req.get('Authorization')?.replace(/Bearer\s/, '');

  if (!token) return null;

  const decoded = jwtDecode<JwtPayload>(token);

  return Number(decoded.sub);
}
