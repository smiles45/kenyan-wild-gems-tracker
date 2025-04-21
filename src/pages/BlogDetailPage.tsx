
import React from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { BookText, Calendar } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import AuthHeader from "@/components/AuthHeader";
import UserAvatar from "@/components/UserAvatar";

const fetchBlog = async (id: string) => {
  const { data, error } = await supabase
    .from("blogs")
    .select("*, profiles:username(username, avatar_url)")
    .eq("id", id)
    .maybeSingle();
  if (error) throw error;
  return data;
};

export default function BlogDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { data: blog, isLoading, error } = useQuery({
    queryKey: ["blog", id],
    queryFn: () => fetchBlog(id!),
    enabled: !!id,
  });

  return (
    <>
      <AuthHeader />
      <div className="max-w-xl mx-auto py-10 px-4">
        <div className="mb-4">
          <Link to="/blog" className="text-safari-700 hover:underline">&larr; Back to Blog</Link>
        </div>
        {isLoading ? (
          <Skeleton className="h-44" />
        ) : error ? (
          <div className="text-destructive">Could not load blog post.</div>
        ) : blog ? (
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl mb-2 flex items-center gap-2">
                <BookText strokeWidth={2} />
                {blog.title}
              </CardTitle>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(blog.created_at).toLocaleDateString()}
                </span>
                
                {blog.profiles && (
                  <div className="flex items-center gap-2">
                    <UserAvatar 
                      username={blog.profiles.username}
                      avatarUrl={blog.profiles.avatar_url} 
                      size="sm"
                    />
                    <span>{blog.profiles.username}</span>
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <article className="whitespace-pre-line mt-3">{blog.content}</article>
            </CardContent>
          </Card>
        ) : (
          <div className="text-muted-foreground">No blog found.</div>
        )}
      </div>
    </>
  );
}
