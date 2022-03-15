import type { Request } from 'express';
import jwtDecode, { JwtPayload } from 'jwt-decode';

const getToken = (req: Request): string | undefined =>
  req.get('Authorization')?.replace(/Bearer\s/, '');
const getIdFromToken = (token: string | undefined): number | null => {
  if (!token) return null;

  const decoded = jwtDecode<JwtPayload>(token);

  return Number(decoded.sub);
};

export default function checkCurrentUser(userId: number, req: Request): boolean {
  const token = getToken(req);
  const currentUserId = getIdFromToken(token);

  return userId === currentUserId;
}
