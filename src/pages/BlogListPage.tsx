import React from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { BookText, User, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import AuthHeader from "@/components/AuthHeader";
import { useAuth } from "@/contexts/AuthContext";
import UserAvatar from "@/components/UserAvatar";

const fetchBlogs = async () => {
  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw error;
  return data;
};

export default function BlogListPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
  });
  const { user } = useAuth();

  return (
    <>
      <AuthHeader />
      <div className="max-w-2xl mx-auto py-8 px-4">
        <h2 className="flex gap-2 items-center text-3xl font-bold mb-6">
          <BookText strokeWidth={2.2} />
          Blog
        </h2>
        <div className="mb-6 text-right">
          {user ? (
            <Link to="/blog/new" className="inline-block px-4 py-2 bg-safari-600 hover:bg-safari-700 text-white rounded-md font-medium transition-colors">
              Write a Blog
            </Link>
          ) : (
            <Link to="/auth" className="inline-block px-4 py-2 bg-safari-600 hover:bg-safari-700 text-white rounded-md font-medium transition-colors">
              Sign in to Write
            </Link>
          )}
        </div>
        {isLoading && (
          <div className="space-y-3">
            <Skeleton className="h-24" />
            <Skeleton className="h-24" />
          </div>
        )}
        {error && <div className="text-destructive">Could not load blogs.</div>}
        <div className="space-y-5">
          {data?.map((blog: any) => (
            <Card key={blog.id} className="hover:shadow-lg transition-shadow">
              <Link to={`/blog/${blog.id}`}>
                <CardHeader>
                  <CardTitle className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <span>{blog.title}</span>
                    <span className="flex items-center gap-2 text-muted-foreground text-xs font-normal">
                      <Calendar className="w-4 h-4" />
                      {new Date(blog.created_at).toLocaleDateString()}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    {blog.content.length > 120
                      ? blog.content.slice(0, 120) + "..."
                      : blog.content}
                  </CardDescription>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
