
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAuth } from '@/contexts/AuthContext';
import { User } from 'lucide-react';

interface UserAvatarProps {
  username?: string;
  avatarUrl?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function UserAvatar({ username, avatarUrl, size = 'md' }: UserAvatarProps) {
  const sizeMap = {
    sm: 'h-6 w-6',
    md: 'h-10 w-10',
    lg: 'h-14 w-14'
  };
  
  // Get the initials from username or email
  const getInitials = (name: string) => {
    return name.charAt(0).toUpperCase();
  };
  
  const fallbackText = username ? getInitials(username) : 'U';
  
  return (
    <Avatar className={sizeMap[size]}>
      {avatarUrl && <AvatarImage src={avatarUrl} alt={username || 'User'} />}
      <AvatarFallback className="bg-safari-100 text-safari-800">
        {fallbackText}
      </AvatarFallback>
    </Avatar>
  );
}
