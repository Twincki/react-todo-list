import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { getCookie } from 'shared/cookies/cookies';
import { AppRoutes, USER_LOGGED } from 'shared/lib/types/consts';

interface ProtectedRouteProps {
  children: ReactNode;
}

// HOC - Компонент высшего порядка.
// Этот компонент оборачивает другой компонент и добавляет новый функционал
// В данном случае, мы проверяем - если пользователь авторизован, показывать children (переданный компонент)
// Если не авторизован, перенаправить пользователя на странице Login
export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const authId = getCookie(USER_LOGGED);

  if (!authId) {
    return <Navigate to={AppRoutes.LOGIN} replace />
  }

  return children;
}