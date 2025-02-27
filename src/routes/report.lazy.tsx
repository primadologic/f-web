import { createLazyFileRoute, useNavigate } from '@tanstack/react-router'
import ReportMainComponent from '../features/report/main'
import { useEffect } from 'react';
import Cookies from "js-cookie";
import React from 'react';

interface ProtectedRouteProps {
  children: React.ReactNode;
}


export const Route = createLazyFileRoute('/report')({
  component: () => (
    <ProtectedRoute>
      <ReportMainComponent />
    </ProtectedRoute>
  ),
 
});


const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const navigate = useNavigate();
  
  useEffect(() => {
    const accessToken = Cookies.get('accessToken');
    
    if (!accessToken) {
      // Redirect to login if no access token is found
      navigate({ to: '/' });
    }
  }, [navigate]);

 // Only render children if accessToken exists
 const accessToken = Cookies.get('accessToken');
 return accessToken ? children : null;
};